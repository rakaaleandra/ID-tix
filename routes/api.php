<?php
use App\Http\Controllers\Api\FilmApiController;
use Illuminate\Support\Facades\Route;

Route::apiResource('films', FilmApiController::class);