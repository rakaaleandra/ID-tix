<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Theater extends Model
{
    /** @use HasFactory<\Database\Factories\TheaterFactory> */
    use HasFactory;
    protected $fillable = [
        'nama_bioskop',
        'lokasi_bioskop',
    ];
    public function schedules(): HasMany{
        return $this->hasMany(Schedule::class, 'theater_id');
    }
}
