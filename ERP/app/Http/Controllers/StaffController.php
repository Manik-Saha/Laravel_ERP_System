<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use App\Http\Requests\NewStaffRequest;
use App\Http\Requests\StaffRequest;
use App\Http\Requests\BonusRequest;
use App\Http\Requests\PromotionRequest;

class StaffController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Staff.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewStaffRequest $req)
    {
       if($req->hasFile('staffImage')){
        $file = $req->file('staffImage');
           if($file->getClientOriginalExtension() == 'jpeg' || $file->getClientOriginalExtension() == 'JPEG' || $file->getClientOriginalExtension() == 'jpg' || $file->getClientOriginalExtension() == 'JPG' || $file->getClientOriginalExtension() == 'img' || $file->getClientOriginalExtension() == 'IMG' || $file->getClientOriginalExtension() == 'png' ||$file->getClientOriginalExtension() == 'PNG')
           {
            $filename = time().".".$file->getClientOriginalExtension();
            $file->move('upload',$filename);

            if($req->password == $req->Cpassword){

                $staff = new Staff();
                $staff->user_name = $req->user_name;
                $staff->first_name = $req->first_name;
                $staff->last_name = $req->last_name;
                $staff->password = $req->password;
                $staff->home_address = $req->address;
                $staff->email = $req->email;
                $staff->phone = $req->phone;
                $staff->status = $req->status;
                $staff->gender = $req->gender;
                $staff->birth_date = $req->birth;
                $staff->joining_date = $req->joining;
                $staff->marital_status = $req->marriage;
                $staff->blood = $req->blood_group;
                $staff->salary = $req->salary;
                $staff->picture = $filename;
        
                $staff->save();
        
                $req->session()->flash('congratulations', 'Congratulations! New employee has been registered!...');
                return redirect()->route('Staff.create');
               }else{
                $req->session()->flash('password', 'Password and confirmation password do not match...');
                return redirect()->route('Staff.create');
               }
           }else{
            $req->session()->flash('picture', 'Your uploaded file is not a picture...');
            return redirect()->route('Staff.create');
           }
       }else{
        $req->session()->flash('picture', 'Please upload a picture...');
        return redirect()->route('Staff.create');
       }
       
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $staffList = Staff::all();
        return view('Staff.list')->with('list',$staffList);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function edit($user_id)
    {
        $staff = Staff::find($user_id);
        return view('Staff.edit')->with('user', $staff);
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function update($user_id, StaffRequest $req)
    {
        $staff = Staff::find($user_id);

        $staff->user_name = $req->user_name;
    	$staff->first_name = $req->first_name;
    	$staff->last_name = $req->last_name;
    	$staff->home_address = $req->address;
    	$staff->email = $req->email;
    	$staff->phone = $req->phone;
    	$staff->gender = $req->gender;
    	$staff->birth_date = $req->birth;
    	$staff->marital_status = $req->marriage;
    	$staff->blood = $req->blood_group;

        $staff->save();

        $req->session()->flash('congratulations', 'Congratulations! information updated successfully!...');
        return view('Staff.edit')->with('user', $staff);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Staff  $staff
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id, Request $req)
    {
        if(Staff::destroy($user_id)){
            $req->session()->flash('msg', 'Deleteed successfully!...');
            return redirect()->route('Staff.list');
        }else{
            return redirect()->route('Staff.delete');
        }
    }

    public function delete($user_id){
        $staff = Staff::find($user_id);
        return view('Staff.delete')->with('user', $staff);
    }

    public function promotion($user_id){
        $staff = Staff::find($user_id);
        return view('Staff.promotion')->with('user', $staff);
    }

    public function storePromotion($user_id, PromotionRequest $req){

        $staff = Staff::find($user_id);

        $staff->status = $req->status;
    	$staff->salary = $req->salary;

        $staff->save();

        $req->session()->flash('congratulations', 'Congratulations! Staff Promoted successfully!...');
        return view('Staff.promotion')->with('user', $staff);
    }

    public function bonus($user_id){
        $staff = Staff::find($user_id);
        return view('Staff.bonus')->with('user', $staff);
    }

    public function storeBonus($user_id, BonusRequest $req){

        $staff = Staff::find($user_id);

        $staff->bonus= $req->bonus;
        $staff->save();

        $req->session()->flash('congratulations', 'Congratulations! Bonus given successfully!...');
        return view('Staff.bonus')->with('user', $staff);
    }
}