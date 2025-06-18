<?php
use App\Http\Controllers\Api\FilmApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::apiResource('films', FilmApiController::class);
Route::get('user', [FilmApiController::class, 'user_all']);
Route::get('pemesanan', [FilmApiController::class, 'pemesanan_all']);

Route::post('user_check', [FilmApiController::class, 'user_check']);
Route::post('pemesanan_check', [FilmApiController::class, 'pemesanan_check']);

Route::post('user_topup', [FilmApiController::class, 'user_topup']);

Route::post('input_user', [FilmApiController::class, 'input_user']);
Route::post('input_pemesanan', [FilmApiController::class, 'input_pemesanan']);