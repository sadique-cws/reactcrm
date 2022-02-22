<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    public function register(Request $req){
        $u = new User();
        $u->name = $req->name;
        $u->email = $req->email;
        $u->password = Hash::make($req->password);
        $u->save();

        return $u;
    }

    public function login(Request $req){
        $user = User::where("email", $req->email)->first();

        if(!$user || !Hash::check($req->password,$user->password)){
            return response()->json([
                'error' => "invalid username and password please try again",
            ],202);
        }
        
        return $user;
    
    }
}
