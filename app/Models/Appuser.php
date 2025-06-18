<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appuser extends Model
{
    //
    protected $fillable = [
        'name',
        'email',
        'saldo'
    ];
}
