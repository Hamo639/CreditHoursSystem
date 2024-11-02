<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubjectRequest;
use App\Http\Resources\SubjectResource;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::with(['doctor', 'specialty'])->get();

        return SubjectResource::collection($subjects);
    }

    public function RegistrationSubjectsList()
    {
        $user = auth()->user();

        $subjects = Subject::where('specialty_id', $user->specialty_id)->with(['doctor', 'specialty'])->get();

        return SubjectResource::collection($subjects);
    }

    public function show($id)
    {
        $subject = Subject::with(['doctor', 'specialty'])->find($id);

        return new SubjectResource($subject);
    }

    public function store(SubjectRequest $request)
    {
        $subject = Subject::create($request->all());

        return new SubjectResource($subject);
    }

    public function update(SubjectRequest $request, Subject $subject)
    {
        $subject->update($request->all());

        return new SubjectResource($subject);
    }

    public function destroy(Subject $subject)
    {
        $subject->delete();

        return response()->json(['message' => 'تم الحذف بنجاح.']);
    }

    public function doctor()
    {
        $subjects = Subject::where('user_id', auth()->user()->id)->get();

        $currentSeasonId = settings()->get('current_season_id');

        $subjects = Subject::where('specialty_id', $currentSeasonId)
        ->whereYear('created_at', now()->year)
        ->get();

        return SubjectResource::collection($subjects);
    }

    public function enrollSubject(Request $request)
    {
        $student = User::findOrFail(auth()->user()->id);

        $subjectId = $request->subject_id;
        $currentSeasonId = settings()->get('current_season_id');

        $isEnrolled = $student->subjects()
            ->where('subjects.id', $subjectId)
            ->where('user_subjects.season_id', $currentSeasonId)
            ->exists();

        if ($isEnrolled)
            return response()->json(['message' => 'الطالب مسجل بالفعل في هذه المادة'], 400);

        $student->subjects()->attach($subjectId, [
            'season_id' => $currentSeasonId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['message' => 'تم تسجيل الطالب في المادة بنجاح'], 200);
    }

    public function showEnrolledSubjects()
    {
        $student = User::findOrFail(auth()->user()->id);

        $currentYear = now()->year;

        $currentSeasonId = settings()->get('current_season_id');

        $enrolledSubjects = $student->subjects()
            ->where('user_subjects.season_id', $currentSeasonId)
            ->whereYear('user_subjects.created_at', $currentYear)
            ->get();

        return response()->json(SubjectResource::collection($enrolledSubjects), 200);
    }

    public function removeEnrolledSubject($subjectId)
    {
        $student = User::findOrFail(auth()->user()->id);

        $student->subjects()->detach($subjectId);

        return response()->json(['message' => 'تم حذف المادة بنجاح'], 200);
    }

    public function enrolledSubjectsYears()
    {
        $studentId = auth()->user()->id;

        $years = DB::table('user_subjects')
                    ->where('user_id', $studentId)
                    ->selectRaw('YEAR(created_at) as year')
                    ->distinct()
                    ->pluck('year');

        $years = $years->map(function ($year) {
            return [
                'id' => $year,
                'name' => $year,
            ];
        });

        return $years;
    }

    public function students($id)
    {
        $subject = Subject::findOrFail($id);

        $results = $subject->students()->with('result')->get();

        $formattedResults = $results->map(function ($result) {
            return [
                'student' => $result,
                'grade' => $result->result->grade ?? 0,
            ];
        });

        return $formattedResults;
    }
}
