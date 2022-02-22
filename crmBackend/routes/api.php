<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;

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
Route::apiResource("post",PostController::class);
Route::apiResource("category",CategoryController::class);

// login system routes
Route::post("/register",[UserController::class, "register"]);
Route::post("/login",[UserController::class, "login"]);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
