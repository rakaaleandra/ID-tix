<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Schedule extends Model
{
    /** @use HasFactory<\Database\Factories\ScheduleFactory> */
    use HasFactory;
    protected $fillable = [
        'tanggal_tayang',
        'jam_tayang',
        'film_id',
        'theater_id',
        'harga_tiket'
    ];

    public function film(): BelongsTo{
        return $this->belongsTo(Film::class, 'film_id');
    }

    public function theater(): BelongsTo{
        return $this->belongsTo(Theater::class, 'theater_id');
    }
}
