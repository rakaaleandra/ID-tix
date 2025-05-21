<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Schedule;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $Schedules = [
            [
                'film_id' => 1,
                'theater_id' => 1,
                'tanggal_tayang' => '2023-05-15',
                'jam_tayang' => '10:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 2,
                'theater_id' => 2,
                'tanggal_tayang' => '2023-05-16',
                'jam_tayang' => '12:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 1,
                'theater_id' => 1,
                'tanggal_tayang' => '2023-05-17',
                'jam_tayang' => '14:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 2,
                'theater_id' => 2,
                'tanggal_tayang' => '2023-05-18',
                'jam_tayang' => '16:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 1,
                'theater_id' => 1,
                'tanggal_tayang' => '2023-05-19',
                'jam_tayang' => '18:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 1,
                'theater_id' => 1,
                'tanggal_tayang' => '2023-05-20',
                'jam_tayang' => '20:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 1,
                'theater_id' => 1,
                'tanggal_tayang' => '2023-05-21',
                'jam_tayang' => '22:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 2,
                'theater_id' => 2,
                'tanggal_tayang' => '2023-05-22',
                'jam_tayang' => '00:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 2,
                'theater_id' => 2,
                'tanggal_tayang' => '2023-05-23',
                'jam_tayang' => '02:00:00',
                'harga_tiket'=> 40000
            ],
            [
                'film_id' => 1,
                'theater_id' => 2,
                'tanggal_tayang' => '2023-05-24',
                'jam_tayang' => '04:00:00',
                'harga_tiket'=> 40000
            ]
        ];
        foreach ($Schedules as $Schedule) {
            Schedule::create($Schedule);
        }
    }
}
