<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BonusRequest extends FormRequest
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
            'bonus' => 'required|numeric|bail'
        ];
    }

    public function messages(){
        return [
             'bonus.required' => 'Please fill up with numeric values',
             'bonus.numeric' => 'Please fill up with numeric values',
        ];
    }
}
