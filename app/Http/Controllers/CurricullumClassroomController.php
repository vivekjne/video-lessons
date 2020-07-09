<?php

namespace App\Http\Controllers;

use App\CurricullumClassroom;
use Illuminate\Http\Request;

class CurricullumClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $students = CurricullumClassroom::with('students')->get();
        return $students;
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
     * @param  \App\CurricullumClassroom  $curricullumClassroom
     * @return \Illuminate\Http\Response
     */
    public function show(CurricullumClassroom $curricullumClassroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CurricullumClassroom  $curricullumClassroom
     * @return \Illuminate\Http\Response
     */
    public function edit(CurricullumClassroom $curricullumClassroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CurricullumClassroom  $curricullumClassroom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CurricullumClassroom $curricullumClassroom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CurricullumClassroom  $curricullumClassroom
     * @return \Illuminate\Http\Response
     */
    public function destroy(CurricullumClassroom $curricullumClassroom)
    {
        //
    }
}
