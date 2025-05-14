<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    /** @use HasFactory<\Database\Factories\FilmFactory> */
    use HasFactory;
    protected $fillable = [
        'nama_film',
        'durasi_film',
        'sutradara_film',
        'genre_film',
        'prosedur',
        'produksi',
        'casts',
        'sinopsis',
        'tayang',
    ];
}
