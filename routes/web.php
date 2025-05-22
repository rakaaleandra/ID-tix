<?php

// use App\Http\Controllers\FilmController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\TheaterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('index');
// })->name('home');

//MIDDLEWARE TARO DIBAWAH

Route::get('/', [FilmController::class, 'index'])->name('home');

Route::get('Comming-Soon', [FilmController::class, 'index2'])->name('index2');
Route::get('theater', [TheaterController::class, 'index'])->name('theater');
Route::get('theater/{theater}', [TheaterController::class, 'show'])->name('theater.show');

// Route::resource('detail_films', FilmController::class)->except('index', 'index2', 'show2');
Route::get('/{film:slug}', [FilmController::class, 'show'])->name('detail_films.show');
Route::get('/{film:slug}/schedules', [FilmController::class, 'show2'])->name('jadwal');
Route::get('/{film:slug}/schedules/{schedule}',[FilmController::class, 'show3'])->name('pembayaran');

Route::middleware(['auth', 'verified'])->group(function () {
});



// Route::get('theater', function () {
//     return Inertia::render('theater');
// })->name('theater');

// Route::get('jadwal', function () {
//     return Inertia::render('jadwal');
// })->name('jadwal');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
