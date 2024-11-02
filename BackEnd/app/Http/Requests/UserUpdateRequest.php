<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'         => 'required|string|max:255',
            'email'        => 'required|email|unique:users,email,'.$this->user.',id',
            'national_id'  => 'required|digits_between:9,20|unique:users,national_id,'.$this->user.',id',
            'blocked'      => 'sometimes|boolean',
            'specialty_id' => 'required',
        ];
    }
}
