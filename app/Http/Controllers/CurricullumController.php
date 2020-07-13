<?php

namespace App\Http\Controllers;

use App\Curricullum;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Resources\Curricullum as CurricullumResource;
use App\Http\Resources\CurricullumCollection as CurricullumCollectionResource;



class CurricullumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return  CurricullumResource::collection(Curricullum::all());
        // try{
        //     $curricullums = Curricullum::all();
        //     if(count($curricullums)>0){
        //         $message = 'Curricullum fetched successfully!';
        //     }else{
        //         $message = 'No curricullums found!';
        //     }

        //     return ['data'=>$curricullums,'message'=>$message,'status'=>false];
        // }catch(Exception $e){
        //     return ['message'=>$e->message,'status'=>false];
        // }
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
        $validatedData = $request->validate([
            'name' => "bail|required|unique:curricullums",

        ]);
        try {

            $curricullum = new Curricullum;
            $curricullum->name = $request->name;
            $curricullum->slug = Str::slug($request->name . ' Syllabus', '-');
            $curricullum->isActive = isset($request->isActive) ? $request->isActive : true;
            $curricullum->save();
            return new CurricullumResource($curricullum);
        } catch (Exception $e) {
            return ['message' => $curricullum->name . ' could not be created!.', 'status' => true];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Curricullum  $curricullum
     * @return \Illuminate\Http\Response
     */
    public function show(Curricullum $curricullum)
    {
        try {
            return new CurricullumResource($curricullum);
        } catch (Exception $e) {
            return ['message' => 'Curricullum with id ' . $curricullum->id . ' not found'];
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Curricullum  $curricullum
     * @return \Illuminate\Http\Response
     */
    public function edit(Curricullum $curricullum)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Curricullum  $curricullum
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Curricullum $curricullum)
    {
        try {

            $curricullum_exists = Curricullum::where(['name' => strtolower($request->name)])->first();
            $validatedData = $request->validate([
                'name' => "bail|unique:curricullums",

            ]);
            // $curricullumUpdate = Curricullum::findOrFail($curricullum->id);

            $curricullum->name = strtolower($request->name);
            $curricullum->slug = Str::slug($request->name . ' Syllabus', '-');
            $curricullum->isActive = isset($request->isActive) ? $request->isActive : true;
            $curricullum->save();
            return new CurricullumResource($curricullum);
        } catch (Exception $e) {
            return ['message' => $curricullum->name . ' could not be updated!.', 'status' => false];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Curricullum  $curricullum
     * @return \Illuminate\Http\Response
     */
    public function destroy(Curricullum $curricullum)
    {
        try {

            $curricullum->delete();
            return ['message' => $curricullum->name . ' deleted successfully!.', 'status' => true];
        } catch (Exception $e) {
            return ['message' => $curricullum->name . ' could not be deleted!.', 'status' => false];
        }
    }
}
