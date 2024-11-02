<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResultResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'teacher_id'  => $this->teacher_id,
            'student_id'  => $this->student_id,
            'subject_id'  => $this->subject_id,
            'season_id'   => $this->season_id,
            'grade'       => $this->grade,
            'exam_grade'  => $this->exam_grade,
            'extra_grade' => $this->extra_grade,
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
            'subject'     => new SubjectResource($this->whenLoaded('subject')),
        ];
    }
}
