<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SpecialtyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'season_id' => 'required|exists:seasons,id',
            'user_id' => 'required|exists:users,id',
            'specialty_id' => 'required|exists:specialties,id',
            'code' =>'required|string|max:255|unique:specialties,code',
        ];
    }
}
