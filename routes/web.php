<?php

use App\Http\Controllers\FilmController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('detail_film', function () {
    return Inertia::render('detail_film');
})->name('detail_film');

Route::get('theater', function () {
    return Inertia::render('theater');
})->name('theater');

Route::get('jadwal', function () {
    return Inertia::render('jadwal');
})->name('jadwal');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('pembayaran', function () {
        return Inertia::render('pembayaran');
    })->name('pembayaran');
});

// Route::rescource('films', FilmController::class);
Route::get('films', [FilmController::class, 'view'])->name('films');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
