<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\User;
class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        
       
        try{
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
        }catch(Exception $error){
            return response()->json([
                'status_code'=>200,
                'message'=>'Error in Login',
                'error'=>$error
            ]);
        }
    }
    
}
