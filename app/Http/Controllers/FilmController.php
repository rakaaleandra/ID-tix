<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Schedule;
use App\Models\Pemesanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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
        $request->validate([
            'schedule_id' => 'required',
            'bukti_bayar' => 'required'
        ]);


        $user = Auth::user();
        if($request->hasFile('bukti_bayar')){
            $file = $request->file('bukti_bayar');
            $filename = $user->name . '_' . time() . '.' . $file->getClientOriginalExtension();
            $bukti_bayar_path = $file->storeAs('bukti_bayar', $filename, 'public');

            Pemesanan::create([
                'user_id' => $user->id,
                'schedule_id' => $request->schedule_id,
                'bukti_bayar' => $bukti_bayar_path ?? null
            ]);
        }

        return redirect()->route('home');
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

    public function show2(Film $film){
        $film->load(['schedules.theater']);
        // $film = Film::with(['schedules.theater'])->find($id);
        return Inertia::render('jadwal',[
            'film' => $film
        ]);
    }

    public function show3(Film $film,Schedule $schedule){

        return Inertia::render('pembayaran',[
            'film' => $film,
            'schedule' => $schedule
        ]);
    }

    public function show4(){
        $user = Auth::user();
        $pesanans = Pemesanan::with(['schedule.film', 'schedule.theater'])
            ->where('user_id', $user->id)
            ->get();
        return Inertia::render('ticket',[
            'pemesanan' => $pesanans
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
