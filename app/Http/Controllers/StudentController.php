<?php

namespace App\Http\Controllers;

use App\User;
use App\Student;
use App\CurricullumClassroom;
use App\Classroom;
use App\Curricullum;


use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $classrooms = CurricullumClassroom::with(['students'])->get();
        foreach($classrooms as $i=>$classroom){
            $students = $classroom->students;
            $classrooms[$i]->classroom_data = Classroom::where('id',$classroom->classroom_id)->first();
            $classrooms[$i]->curricullum_data = Curricullum::where('id',$classroom->curriculum_id)->first();
            unset($classrooms[$i]->classroom_id);
            unset($classrooms[$i]->curriculum_id);

            foreach($students as $j=>$student){
                $students[$j] = Student::where('curricullum_classroom_id',$student->curricullum_classroom_id)->with(['enrollments','lessons'])->get();
            }
           
            $classrooms[$i]->students = $students;
        }

        return ['classroomData'=>$classrooms];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
