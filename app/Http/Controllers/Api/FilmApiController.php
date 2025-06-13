<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Film;
use Illuminate\Http\Request;

class FilmApiController extends Controller
{
    public function index()
    {
        return response()->json(Film::all());
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