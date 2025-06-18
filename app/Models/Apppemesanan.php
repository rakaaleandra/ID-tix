<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apppemesanan extends Model
{
    //
    protected $fillable = [
        'email',
        'nama_film',
        'nama_bioskop',
        'jadwal_tayang',
        'kursi',
        'jumlah_kursi',
        'tanggal_pemesanan',
        'status_pemesanan',
        'feedback',
        'total_bayar'
    ];
}
