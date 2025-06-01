<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $Schedules = [];

        // for ($x = 0; $x < 5; $x++) {
        //     $film_id = $x + 1;

        //     $showtimes = [
        //         [1, ['10:00:00', '12:30:00', '15:00:00', '17:30:00', '20:00:00']],
        //         [2, ['09:45:00', '12:00:00', '14:15:00', '16:30:00', '18:45:00']],
        //         [3, ['10:15:00', '12:45:00', '15:15:00', '17:45:00', '20:15:00']],
        //         [4, ['09:30:00', '11:45:00', '14:00:00', '16:15:00', '18:30:00']],
        //         [5, ['10:30:00', '13:00:00', '15:30:00', '18:00:00', '20:30:00']],
        //     ];

        //     foreach ($showtimes as [$theater_id, $times]) {
        //         foreach ($times as $jam_tayang) {
        //             $Schedules[] = [
        //                 'film_id' => $film_id,
        //                 'theater_id' => $theater_id,
        //                 'tanggal_tayang' => '2023-05-15',
        //                 'jam_tayang' => $jam_tayang,
        //                 'harga_tiket' => 40000,
        //             ];
        //         }
        //     }
        // }

        // // Mass insert
        // Schedule::insert($Schedules);
    }
}
