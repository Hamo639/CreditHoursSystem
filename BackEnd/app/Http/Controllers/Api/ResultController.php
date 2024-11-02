<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Year;
use App\Models\Result;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ResultResource;
use App\Notifications\NewResultsNotification;
use App\Notifications\SubmitResultsNotification;

class ResultController extends Controller
{
    public function store(Request $request, $subject_id)
    {
        $subject = Subject::findOrFail($subject_id);
        $results = json_decode($request->results, true);

        foreach ($results as $result) {
            $data = [
                'teacher_id' => auth()->user()->id,
                'subject_id' => $subject_id,
                'season_id' => settings()->get('current_season_id'),
            ];

            if (array_key_exists('exam_grade', $result)) {
                $data['exam_grade'] = $result['exam_grade'];
            }

            if (array_key_exists('extra_grade', $result)) {
                $data['extra_grade'] = $result['extra_grade'];
            }

            if (isset($data['exam_grade']) && isset($data['extra_grade'])) {
                $data['grade'] = $data['exam_grade'] + $data['extra_grade'];
            }

            Result::updateOrCreate(['student_id' => $result['student']['id']], $data);
        }

        $professors = User::role('professor')->where('specialty_id', auth()->user()->specialty_id)->get();
        foreach ($professors as $professor) {
            $professor->notify(new NewResultsNotification(auth()->user()->name, $subject->name));
        }

        return true;
    }

    public function show($seasonId, $year)
    {
        $results = Result::where('student_id', auth()->user()->id)
                        ->where('season_id', $seasonId)
                        ->whereYear('created_at', $year)
                        ->with('subject')
                        ->get();

        return ResultResource::collection($results);
    }

    public function submit()
    {
        $students = User::role('student')->get();
        $current_season_id = settings()->get('current_season_id');
        foreach ($students as $student) {
            if($student->id != 6)
                continue;

            $subjects_ids = $student->results->filter(function($result) use ($current_season_id) {
                return $result->grade >= 60;
            })->pluck('subject_id')->toArray();

            $totalHours = Subject::whereIn('id', $subjects_ids)->sum('score');

            $current_year_id = $student->year_id;
            $current_year = Year::find($current_year_id);

            if ($current_year && $current_season_id==2) {
                $next_year = Year::find($current_year_id + 1);
                $next_year_id = $next_year ? $next_year->id : null;

                $appropriateYear = ($current_year->min_hours <= $totalHours) ? $next_year_id : $current_year_id;

                $student->year_id = $appropriateYear;
                $student->save();

                $student->notify(new SubmitResultsNotification());
            }
        }

        settings()->set('enroll_subjects', false);
        settings()->set('update_results', false);
        settings()->set('current_season_id', $current_season_id == 1 ? 2 : 1);
    }
}
