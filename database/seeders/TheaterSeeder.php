<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Theater;
use Illuminate\Database\Seeder;

class TheaterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $skejuls = [
            [
                'nama_bioskop' => 'DP Mall XXI',
                'lokasi_bioskop' => 'Semarang'
            ],
            [
                'nama_bioskop' => 'Ambarrukmo XXI',
                'lokasi_bioskop' => 'Yogyakarta'
            ],
            [
                'nama_bioskop' => 'Solo Paragon XXI',
                'lokasi_bioskop' => 'Solo'
            ],
            [
                'nama_bioskop' => 'Java Supermall Cinepolis',
                'lokasi_bioskop' => 'Semarang'
            ],
            [
                'nama_bioskop' => 'Pakuwon Mall Cineplex',
                'lokasi_bioskop' => 'Solo'
            ]
        ];

        foreach ($skejuls as $skejul) {
            Theater::create($skejul);
        }
    }
}
