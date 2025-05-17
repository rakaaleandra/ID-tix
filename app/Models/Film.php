<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Film extends Model
{
    /** @use HasFactory<\Database\Factories\FilmFactory> */
    use HasFactory;
    protected $fillable = [
        'nama_film',
        'durasi_film',
        'sutradara_film',
        'genre_film',
        'produser',
        'produksi',
        'casts',
        'sinopsis',
        'tayang',
    ];
    public function schedules(): HasMany{
        return $this->hasMany(Schedule::class, 'film_id');
    }
}
