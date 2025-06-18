<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apppemesanan extends Model
{
    //
    protected $fillable = [
        'email',
        'filmId',
        'namaFilm',
        'filmPoster',
        'namaBioskop',
        'jadwalTayang',
        'kursi',
        'jumlahKursi',
        'tanggalPemesanan',
        'statusPemesanan',
        'feedback',
        'totalBayar'
    ];
}
