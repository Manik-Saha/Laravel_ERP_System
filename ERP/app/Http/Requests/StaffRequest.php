<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StaffRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_name' => 'required|max:30|min:5|bail',
            'first_name' => 'required|alpha|bail',
            'last_name' => 'required|alpha|bail',
            'gender' => 'required',
            'address' => 'required',
            'email' => 'required|min:10|max:50|email:rfc,dns|bail',
            'birth' => 'required',
            'blood_group' => 'required',
            'marriage' => 'required',
            'phone' => 'required|min:11|numeric|bail'
        ];
    }
}
