<?php

// use App\Http\Controllers\FilmController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\TheaterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('index');
// })->name('home');
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

//Slug taro bawah

Route::get('/', [FilmController::class, 'index'])->name('home');

Route::get('coming-soon', [FilmController::class, 'index2'])->name('index2');
Route::get('theater', [TheaterController::class, 'index'])->name('theater');
Route::get('theater/{theater}', [TheaterController::class, 'show'])->name('theater.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::post('storing', [FilmController::class, 'store'])->name('membayar');
Route::get('tickets', [FilmController::class, 'show4'])->name('ticket');
Route::get('ticket/{pemesanan}', [FilmController::class, 'show5'])->name('detail_ticket');

Route::get('/{film:slug}', [FilmController::class, 'show'])->name('detail_films.show');
Route::get('/{film:slug}/schedules', [FilmController::class, 'show2'])->name('jadwal');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/{film:slug}/schedules/{schedule}',[FilmController::class, 'show3'])->name('pembayaran');
});

