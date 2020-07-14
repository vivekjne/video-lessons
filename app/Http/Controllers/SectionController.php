<?php

namespace App\Http\Controllers;

use App\Section;
use Illuminate\Support\Str;

use Illuminate\Http\Request;
use App\Http\Resources\Section as SectionResource;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SectionResource::collection(Section::with('lessons')->get());
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
            'summary' => "string",


        ]);

        $section =  new Section;

        $section->name = $request->name;
        $section->slug = Str::slug($request->name, '-');
        $section->subject_id = $request->subject_id;
        $section->summary = $request->summary;
        $orderMax = Section::max('order');

        if (isset($orderMax) && $orderMax >= 0) {
            $section->order = $orderMax + 1;
        } else {
            $section->order = 0;
        }

        $section->save();
        $section->lessons = [];

        return new SectionResource($section);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function show(Section $section)
    {
        //
        $section = Section::where('id', $section->id)->with('lessons')->first();
        return ["data" => $section];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Section $section)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function destroy(Section $section)
    {
        $section->delete();
        return  ['data' => 'Section ' . $section->name . " deleted successfully"];
    }
}
