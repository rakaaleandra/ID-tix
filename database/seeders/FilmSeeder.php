<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Theater;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Support\Str;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Film::factory(5)->create();
        $films = [
            [
                'nama_film' => 'Inception',
                'slug' => 'inception',
                'poster_film' => 'Inception.jpg',
                'durasi_film' => 148,
                'sutradara_film' => 'Christopher Nolan',
                'genre_film' => 'Sci-Fi',
                'produser' => 'Warner Bros',
                'produksi' => 'Syncopy',
                'casts' => 'Leonardo DiCaprio, Joseph Gordon-Levitt',
                'sinopsis' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'The Matrix',
                'slug' => 'The-Matrix',
                'poster_film' => 'TheMatrix.jpg',
                'durasi_film' => 136,
                'sutradara_film' => 'Lana Wachowski & Lilly Wachowski',
                'genre_film' => 'Action, Sci-Fi',
                'produser' => 'Warner Bros.',
                'produksi' => 'Village Roadshow Pictures',
                'casts' => 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
                'sinopsis' => 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Parasite',
                'slug' => 'Parasite',
                'poster_film' => 'Parasite.jpg',
                'durasi_film' => 132,
                'sutradara_film' => 'Bong Joon-ho',
                'genre_film' => 'Thriller, Drama',
                'produser' => 'CJ Entertainment',
                'produksi' => 'Barunson E&A',
                'casts' => 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
                'sinopsis' => 'A poor family schemes to become employed by a wealthy family by infiltrating their household one by one.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Spirited Away',
                'slug' => 'Spirited-Away',
                'poster_film' => 'SpiritedAway.jpg',
                'durasi_film' => 125,
                'sutradara_film' => 'Hayao Miyazaki',
                'genre_film' => 'Animation, Fantasy',
                'produser' => 'Toho',
                'produksi' => 'Studio Ghibli',
                'casts' => 'Rumi Hiiragi, Miyu Irino, Mari Natsuki',
                'sinopsis' => 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'The Godfather',
                'slug' => 'The-Godfather',
                'poster_film' => 'TheGodfather.jpg',
                'durasi_film' => 175,
                'sutradara_film' => 'Francis Ford Coppola',
                'genre_film' => 'Crime, Drama',
                'produser' => 'Paramount Pictures',
                'produksi' => 'Alfran Productions',
                'casts' => 'Marlon Brando, Al Pacino, James Caan',
                'sinopsis' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Bad Genius',
                'slug' => 'Bad-Genius',
                'poster_film' => 'BadGenius.jpg',
                'durasi_film' => 96,
                'sutradara_film' => 'J.C. Lee',
                'genre_film' => 'Crime, Drama',
                'produser' => 'Patrick Wachsberger, Erik Feig, Jessica Switch, Ashley Stern',
                'produksi' => 'Vertical Entertainment',
                'casts' => 'Callina Liang, Benedict Wong, Jabari Banks',
                'sinopsis' => 'A group of senior high school students, trying to remove the cheating system of new student admissions at a famous university.',
                'tayang' => false,
            ],
            [
                'nama_film' => 'Ballerina',
                'slug' => 'Ballerina',
                'poster_film' => 'Ballerina.jpg',
                'durasi_film' => 124,
                'sutradara_film' => 'Len Wiseman',
                'genre_film' => 'Action, Thriller',
                'produser' => 'Basil Iwanyk, Erica Lee, Chad Stahelski',
                'produksi' => 'Lionsgate',
                'casts' => 'Ana de Armas, Keanu Reeves, Ian McShane',
                'sinopsis' => 'Eve (Ana de Armas) a trained assassin in the tradition of the Roman Ruska organization set out for revenge after her fathers death.',
                'tayang' => false,
            ],
            [
                'nama_film' => 'How To Train Your Dragon',
                'slug' => 'How-To-Train-Your-Dragon',
                'poster_film' => 'HowToTrainYourDragon.jpg',
                'durasi_film' => 125,
                'sutradara_film' => 'Dean DeBlois',
                'genre_film' => 'Fantasy',
                'produser' => 'Dean DeBlois, Marc Platt, Adam Siegel',
                'produksi' => 'Universal Pictures',
                'casts' => 'Nico Parker, Gerard Butler',
                'sinopsis' => 'When an ancient threat threatens the Vikings on the island of Berk, the friendship between Hiccup (Mason Thames), an innovative Viking, and Toothless, a Night Fury dragon, becomes the key for both species to make a new future together.',
                'tayang' => false,
            ],
            [
                'nama_film' => 'Mission: Impossible - The Final Reckoning',
                'slug' => 'Mission-The-Final-Reckoning',
                'poster_film' => 'MissionTheFinalReckoning.jpg',
                'durasi_film' => 169,
                'sutradara_film' => 'Christopher McQuarrie',
                'genre_film' => 'Action, Thriller',
                'produser' => 'Tom Cruise, Christopher McQuarrie',
                'produksi' => 'Paramount Pictures',
                'casts' => 'Tom Cruise, Hayley Atwell, Ving Rhames',
                'sinopsis' => 'Continuing the story from the previous film, Mission: Impossible - Dead Reckoning Part One. Ethan Hunt (Tom Cruise) will return to continue the mission to destroy old enemies and new enemies that are more dangerous.',
                'tayang' => false,
            ],
            [
                'nama_film' => 'Locked',
                'slug' => 'Locked',
                'poster_film' => 'Locked.jpg',
                'durasi_film' => 95,
                'sutradara_film' => 'David Yarovesky.',
                'genre_film' => 'Thriller, Suspense',
                'produser' => 'Sam Raimi and Zainab Azizi',
                'produksi' => 'The Avenue Entertainment',
                'casts' => 'Bill Skersgard, Anthony Hopkins, Gabriella Waish',
                'sinopsis' => 'Eddie Barrish (Bill Skarsgard) is a thief who tries to break into a luxury SUV. What he doesnt know is that he has fallen into a dangerous psychological game made by William (Anthony Hopkins) the owner of the car.',
                'tayang' => false,
            ],
        ];

        foreach ($films as $film) {
            Film::create($film);
        }

        $skejuls = [
            [
                'nama_bioskop' => 'Grand XXI Solo',
                'lokasi_bioskop' => 'Solo'
            ],
            [
                'nama_bioskop' => 'Solo Paragon XXI',
                'lokasi_bioskop' => 'Solo'
            ],
            [
                'nama_bioskop' => 'Solo Square XXI',
                'lokasi_bioskop' => 'Solo'
            ],
            [
                'nama_bioskop' => 'The Park XXI',
                'lokasi_bioskop' => 'Solo'
            ],
            [
                'nama_bioskop' => 'Transmart Solo CGV',
                'lokasi_bioskop' => 'Solo'
            ]
        ];

        foreach ($skejuls as $skejul) {
            Theater::create($skejul);
        }

        $Schedules = [];

        // Mulai dari 2023-05-15 selama 7 hari
        $startDate = Carbon::create(2023, 5, 15);

        for ($x = 0; $x < 5; $x++) {
            $theater_id = $x + 1;

            $showtimes = [
                [1, ['12:00:00', '14:20:00', '16:40:00', '19:00:00', '21:20:00']],
                [2, ['12:10:00', '14:25:00', '16:40:00', '18:45:00', '21:00:00']],
                [3, ['12:30:00', '14:30:00', '16:30:00', '18:30:00', '20:30:00']],
                [4, ['12:35:00', '14:40:00', '16:45:00', '18:50:00', '20:55:00']],
                [5, ['14:05:00', '17:10:00', '20:15:00']],
            ];

            // Loop setiap hari selama 5 hari
            for ($day = 0; $day < 5; $day++) {
                $currentDate = $startDate->copy()->addDays($day)->format('Y-m-d');

                foreach ($showtimes as [$film_id, $times]) {
                    foreach ($times as $jam_tayang) {
                        $Schedules[] = [
                            'film_id' => $theater_id,
                            'theater_id' => $film_id,
                            'tanggal_tayang' => $currentDate,
                            'jam_tayang' => $jam_tayang,
                            'harga_tiket' => 25000,
                        ];
                    }
                }
            }
        }

        // Mass insert ke database
        Schedule::insert($Schedules);

        User::create([
            'name' => 'Raka Aleandra',
            'email' => 'r@g.com',
            'password' => '12345678',
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'isAdmin' => false
        ]);
        User::create([
            'name' => 'Raka Aleandra Admin',
            'email' => 'raka.aleandra@gmail.com',
            'password' => '12345678',
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'isAdmin' => true
        ]);
    }
}
