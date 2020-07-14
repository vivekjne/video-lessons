<?php

namespace App\Http\Controllers;

use App\Subject;
use Illuminate\Http\Request;
use App\Http\Resources\Subject as SubjectResource;
use Illuminate\Support\Str;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SubjectResource::collection(Subject::all());
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
        $request->validate([
            'name' => "required",
            "display_name" => "required",
            "thumbnail" => "mimes:jpeg,png",
            'classroom_id' => "required|exists:classrooms,id",
            'curricullum_id' => "required|exists:curricullums,id"
        ]);

        $subject = new Subject;
        $subject->name = $request->name;
        $subject->slug = Str::slug($request->name, '-');
        $subject->display_name = $request->display_name;
        $subject->classroom_id = $request->classroom_id;
        $subject->curricullum_id = $request->curricullum_id;

        if ($request->has('short_description')) {
            $subject->short_description = $request->short_description;
        }

        if ($request->has('description')) {
            $subject->description = $request->description;
        }

        if ($request->has('thumbnail')) {
            $fileName = time() . '.' . $request->thumbnail->extension();

            $request->thumbnail->move(public_path('uploads'), $fileName);
            $subject->thumbnail = $fileName;
        }

        if ($request->has('isActive')) {
            $subject->isActive = $request->isActive;
        }

        if ($request->has('preview_url')) {
            $subject->preview_url = $request->preview_url;
        }

        if ($request->has('meta_tags')) {
            $subject->meta_tags = $request->meta_tags;
        }

        if ($request->has('meta_description')) {
            $subject->meta_description = $request->meta_description;
        }

        $subject->save();
        return new SubjectResource($subject);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function show(Subject $subject)
    {
        //

        return new SubjectResource($subject);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function edit(Subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subject $subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        //
    }
}
