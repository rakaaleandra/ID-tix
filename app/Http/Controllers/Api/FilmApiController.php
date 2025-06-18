<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Film;
use App\Models\Pemesanan;
use App\Models\Apppemesanan;
use App\Models\Appuser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class FilmApiController extends Controller
{
    public function user_all(){
        return response()->json([
            Appuser::all()
        ]);
    }

    public function pemesanan_all(){
        return response()->json([
            Apppemesanan::all()
        ]);
    }
    
    public function input_user(Request $request){
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:appusers,email',
            'saldo' => 'required|integer',
        ]);

        $user = Appuser::create($request->all());

        return response()->json($user, 201);
    }

    public function user_topup(Request $request){
        $request->validate([
            'email' => 'required|email',
            'amount' => 'required|integer',
        ]);

        $user = Appuser::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->saldo += $request->amount;
        $user->save();

        return response()->json([
            'message' => 'Saldo berhasil ditambahkan',
            'user' => $user
        ]);
    }

    public function user_check(Request $request)
    {
            $request->validate([
            'email' => 'required|email',
        ]);

        $user = Appuser::where('email', $request->email)->first();

        if ($user) {
            return response()->json($user, 200);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function input_pemesanan(){

    }

    public function pemesanan_check(){

    }

    public function index()
    {
        $pesanans = Pemesanan::with(['schedule.film', 'schedule.theater'])->get();
        // return response()->json(Film::all());
        return response()->json(
            $pesanans
        );
    }

    public function show(Film $film)
    {
        return response()->json($film);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_film' => 'required|string',
            // tambahkan validasi lain sesuai kebutuhan
        ]);
        $film = Film::create($validated);
        return response()->json($film, 201);
    }

    public function update(Request $request, Film $film)
    {
        $validated = $request->validate([
            'nama_film' => 'sometimes|string',
            // tambahkan validasi lain sesuai kebutuhan
        ]);
        $film->update($validated);
        return response()->json($film);
    }

    public function destroy(Film $film)
    {
        $film->delete();
        return response()->json(null, 204);
    }
}