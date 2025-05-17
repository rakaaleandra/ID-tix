<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Theater;
use Inertia\Inertia;

class TheaterController extends Controller
{
    public function index(){
        return Inertia::render('theater',[
            'theaters' => Theater::all()
        ]);
    }
}
