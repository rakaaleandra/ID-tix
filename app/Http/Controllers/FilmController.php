<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('index',[
            // 'films' => Film::all()
            'films' => Film::where('tayang', true)->get()
        ]);
    }

    public function index2(){
        return Inertia::render('soon',[
            'films' => Film::where('tayang', false)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Film $film)
    {
        return Inertia::render('detail_film',[
            // 'film' => Film::find($film),
            'film' => $film
        ]);
    }

    public function show2($id){
        $film = Film::with(['schedules.theater'])->find($id);
        return Inertia::render('jadwal',[
            'film' => $film
        ]);
    }

    public function show3($film,$schedule){

        return Inertia::render('pembayaran',[
            'film' => Film::find($film),
            'schedule' => Schedule::find($schedule)
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
