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
use Illuminate\Support\Str;

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

    public function input_pemesanan(Request $request){
        $request->validate([
            'email' => 'required|email',
            'filmId' => 'required|integer',
            'namaFilm' => 'required|string',
            'filmPoster' => 'required|integer',
            'namaBioskop' => 'required|string',
            'jadwalTayang' => 'required|string',
            'kursi' => 'required|string',
            'jumlahKursi' => 'required|integer',
            'tanggalPemesanan' => 'required|date',
            'statusPemesanan' => 'required|in:berhasil,gagal,masalah,null',
            'feedback' => 'nullable|string',
            'totalBayar' => 'required|integer',
        ]);

        do {
            $code = Str::random(25);
        } while (Apppemesanan::where('codePemesanan', $code)->exists());

        // Kurangi saldo user
        // $user = Appuser::where('email', $validatedData['email'])->first();
        $user = Appuser::where('email', $request->email)->first();

        // if (!$user) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'User tidak ditemukan'
        //     ], 404);
        // }

        // if ($user->saldo < $request['totalBayar']) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => 'Saldo tidak mencukupi'
        //     ], 400);
        // }

        // Simpan pemesanan
        // $pemesanan = Apppemesanan::create($request->all());
        $pemesanan = Apppemesanan::create([
            'email' => $request->email,
            'filmId' => $request->filmId,
            'namaFilm' => $request->namaFilm,
            'filmPoster' => $request->filmPoster,
            'namaBioskop' => $request->namaBioskop,
            'jadwalTayang' => $request->jadwalTayang,
            'kursi' => $request->kursi,
            'jumlahKursi' => $request->jumlahKursi,
            'codePemesanan' => $code,
            'tanggalPemesanan' => $request->tanggalPemesanan,
            'statusPemesanan' => $request->statusPemesanan,
            'feedback' => $request->feedback,
            'totalBayar' => $request->totalBayar
        ]);

        // Update saldo user
        $user->saldo -= $request->totalBayar;
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Pemesanan berhasil disimpan dan saldo dikurangi',
            'data' => $pemesanan
        ], 201);
    }

    public function pemesanan_check(Request $request){
        $request->validate([
            'email' => 'required|email',
        ]);

        $data = Apppemesanan::where('email', $request->email)->get();

        return response()->json($data);
    }
}