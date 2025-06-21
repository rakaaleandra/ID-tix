<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pemesanan extends Model
{
    /** @use HasFactory<\Database\Factories\PemesananFactory> */
    use HasFactory;
    protected $fillable = [
        'user_id',
        'schedule_id',
        'code_pemesanan',
        'bukti_bayar',
        'status_pemesanan',
        'total_bayar'
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class, 'user_id');
    }
    public function schedule(): BelongsTo{
        return $this->belongsTo(Schedule::class, 'schedule_id');
    }
    public function ticket(): HasMany{
        return $this->hasMany(Ticket::class, 'pemesanan_id');
    }
}
