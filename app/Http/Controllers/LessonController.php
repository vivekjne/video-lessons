<?php

namespace App\Http\Controllers;

use App\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Resources\Lesson as LessonResource;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Lesson::collection(Lesson::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => "required|string",

            'subject_id' => "required|exists:subjects,id",
            'section_id' => "required|exists:sections,id",

            'summary' => "string",
            'video_url' => "required|string",
            'duration' => "string",

        ]);

        $lesson =  new Lesson;

        $lesson->name = $request->name;
        $lesson->slug = Str::slug($request->name, '-');
        $lesson->subject_id = $request->subject_id;
        $lesson->section_id = $request->section_id;

        $lesson->summary = $request->summary;
        $lesson->video_url = $request->video_url;
        $lesson->video_views = 0;
        $lesson->duration = $request->duration;



        $orderMax = Lesson::max('order');

        if (isset($orderMax) && $orderMax >= 0) {
            $lesson->order = $orderMax + 1;
        } else {
            $lesson->order = 0;
        }

        $lesson->save();

        return new LessonResource($lesson);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function show(Lesson $lesson)
    {
        return new LessonResource($lesson);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lesson $lesson)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Lesson  $lesson
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return ['status' => true, 'message' => $lesson->name . " deleted successfully"];
    }
}
