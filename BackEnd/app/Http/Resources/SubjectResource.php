<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'   => $this->id,
            'name' => $this->name,
            'score' => $this->score,
            'code' => $this->code,
            'specialty' => new SpecialtyResource($this->whenLoaded('specialty')),
            'doctor' => new UserResource($this->whenLoaded('doctor')),
        ];
    }
}
