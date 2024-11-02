<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'national_id' => $this->national_id,
            'blocked' => $this->blocked,
            'role' => $this->getRoleNames()->first(),
            'specialty_id' => $this->specialty_id,
            'year' => $this->year,
        ];
    }
}
