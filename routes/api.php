<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('/login', 'AuthController@login');
Route::get('/test', function (Request $request) {
    return response()->json(['message'=>'hello']);
});

Route::middleware(['auth:sanctum'])->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
});
});


Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
       
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return response()->json(['token'=>$user->createToken('authToken')->plainTextToken]);
});
Route::get('categories/products', 'CategoryController@getCategoryWithProjects');



// Route::resource('categories', 'CategoryController');
Route::resource('curricullums', 'CurricullumController');

Route::resource('classrooms', 'ClassroomController');
Route::get('syllabus/classrooms/subjects', 'ClassroomSyllabusController@index');
Route::get('syllabus/classrooms/students','CurricullumClassroomController@index');
Route::resource('subjects', 'SubjectController');
Route::resource('students', 'StudentController');


