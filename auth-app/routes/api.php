<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ruta base
Route::get('/', function(){
    return 'api';
});

// ruta para obtener el usuario
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// rutas para autenticación
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');;