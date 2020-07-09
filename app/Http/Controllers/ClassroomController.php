<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\CurricullumClassroom;
use App\CurricullumClassroomSubject;
use App\Http\Resources\Classroom as ClassroomResource;
use App\Http\Resources\ClassroomCollection as ClassroomCollectionResource;
use Exception;
use Illuminate\Support\Str;


use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return  ClassroomResource::collection(Classroom::all());
        //
        // try{
        //     $classrooms = Classroom::with('curricullums')->get();

        //     if($classrooms){
        //         $message = 'Classrooms fetched successfully';
        //     }else{
        //         $message = 'No classrooms found';
        //     }

        //     return ['data'=>$classrooms,'message'=>$message,'status'=>true];
        // }catch(Exception $e){
        //     return ['data'=>$classrooms,'message'=>$e->message,'status'=>false];
        // }




        // $data = CurricullumClassroom::with('subjects')->get();

        // foreach($data as $i=>$d){
        //     // return $d;
        //     foreach($d->subjects as $j=>$subject){
        //          $ccid =  $subject->pivot->curricullum_classroom_id;
        //          $sid = $subject->pivot->subject_id;
        //         $lessons_data = CurricullumClassroomSubject::where(['curricullum_classroom_id'=>$ccid,'subject_id'=>$sid])->with('lessons')->get();

        //     //    return $lessons_data;

        //         $data[$i]->subjects[$j]->lessons_data = $lessons_data;
        //         // return $data;
        //     }

        // }
        // return ['data'=>$data];
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
        // dd($request->curricullum_ids);
        $classroom_exists = Classroom::where('name', strtolower($request->name))->exists();
        if ($classroom_exists) {
            return ['message' => 'Classroom with name ' . $request->name . ' already exits.', 'status' => false];
        }
        $classroom = new Classroom;
        $classroom->name = $request->name;
        if (strpos($request->name, 'class') !== false || strpos($request->name, 'Class') !== false) {
            $classroom->slug = Str::slug(strtolower($request->name), '-');
        } else {
            $classroom->slug = Str::slug('Class ' . strtolower($request->name), '-');
        }
        $classroom->isActive = isset($request->isActive) ? $request->isActive : true;

        try {
            \DB::beginTransaction();
            $classroom->save();

            foreach ($request->curricullum_ids as $cur) {
                // dd($classroom->id);
                $curricullumClassroom_array[] = ['classroom_id' => $classroom->id, 'curricullum_id' => $cur];
                // CurricullumClassroom::create(['classroom_id'=>$classroom->id,'curricullum_id'=>$cur]);
            }
            //  dd($curricullumClassroom_array);
            CurricullumClassroom::insert($curricullumClassroom_array);
            \DB::commit();

            return ['data' => new ClassroomResource($classroom), 'message' => 'Classroom with name ' . $classroom->name . ' created successfully'];
        } catch (Throwable $e) {
            \DB::rollback();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Classroom  $classroom
     * @return \Illuminate\Http\Response
     */
    public function show(Classroom $classroom)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Classroom  $classroom
     * @return \Illuminate\Http\Response
     */
    public function edit(Classroom $classroom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Classroom  $classroom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Classroom $classroom)
    {
        //
        try {

            $classroom_exists = Classroom::where(['name' => strtolower($request->name)])->first();
            if ($classroom_exists) {
                if ($classroom_exists->id != $classroom->id) {
                    return ['message' => 'Classroom with name ' . $request->name . ' already exits.', 'status' => false];
                }
            }
            // $curricullumUpdate = Curricullum::findOrFail($curricullum->id);
            if ($request->name) {
                $classroom->name = strtolower($request->name);
                if (strpos($request->name, 'class') !== false || strpos($request->name, 'Class') !== false) {
                    $classroom->slug = Str::slug(strtolower($request->name), '-');
                } else {
                    $classroom->slug = Str::slug('Class ' . strtolower($request->name), '-');
                }
            }

            $classroom->isActive = isset($request->isActive) ? $request->isActive : true;
            if ($request->curricullum_ids) {

                try {
                    \DB::beginTransaction();
                    $classroom->save();
                    CurricullumClassroom::where('classroom_id', $classroom->id)->delete();


                    foreach ($request->curricullum_ids as $cur) {
                        // dd($classroom->id);
                        $curricullumClassroom_array[] = ['classroom_id' => $classroom->id, 'curricullum_id' => $cur];
                        // CurricullumClassroom::create(['classroom_id'=>$classroom->id,'curricullum_id'=>$cur]);
                    }
                    //  dd($curricullumClassroom_array);
                    CurricullumClassroom::insert($curricullumClassroom_array);
                    \DB::commit();
                } catch (Exception $e) {
                    \DB::rollback();
                    // dd($e);
                    return ['message' => 'Could not update classroom ' . $classroom->name, 'status' => false, 'error' => $e];
                }
            }
            return ['data' => new ClassroomResource($classroom), 'message' => 'Classroom with name ' . $classroom->name . ' updated successfully'];
            // $classroom->save();
            //    return new ClassroomResource($classroom);
        } catch (Exception $e) {
            return ['message' => $classroom->name . ' could not be updated!.', 'status' => false];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Classroom  $classroom
     * @return \Illuminate\Http\Response
     */
    public function destroy(Classroom $classroom)
    {
        //
        $classroom->delete();
        return ['message' => 'Classroom ' . $classroom->name . ' deleted successfully!', 'status' => false];
    }
}
