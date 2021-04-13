<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PromotionRequest extends FormRequest
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
            'salary' => 'required|numeric|bail'
        ];
    }

    public function messages(){
        return [
             'salary.required' => 'Please fill up with numeric values',
             'salary.numeric' => 'Please fill up with numeric values',
        ];
    }
}
