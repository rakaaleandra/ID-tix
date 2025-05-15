<?php

namespace Database\Seeders;

use App\Models\Film;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
                'durasi_film' => 148,
                'sutradara_film' => 'Christopher Nolan',
                'genre_film' => 'Sci-Fi',
                'prosedur' => 'Warner Bros',
                'produksi' => 'Syncopy',
                'casts' => 'Leonardo DiCaprio, Joseph Gordon-Levitt',
                'sinopsis' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'The Matrix',
                'durasi_film' => 136,
                'sutradara_film' => 'Lana Wachowski & Lilly Wachowski',
                'genre_film' => 'Action, Sci-Fi',
                'prosedur' => 'Warner Bros.',
                'produksi' => 'Village Roadshow Pictures',
                'casts' => 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
                'sinopsis' => 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Parasite',
                'durasi_film' => 132,
                'sutradara_film' => 'Bong Joon-ho',
                'genre_film' => 'Thriller, Drama',
                'prosedur' => 'CJ Entertainment',
                'produksi' => 'Barunson E&A',
                'casts' => 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
                'sinopsis' => 'A poor family schemes to become employed by a wealthy family by infiltrating their household one by one.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Spirited Away',
                'durasi_film' => 125,
                'sutradara_film' => 'Hayao Miyazaki',
                'genre_film' => 'Animation, Fantasy',
                'prosedur' => 'Toho',
                'produksi' => 'Studio Ghibli',
                'casts' => 'Rumi Hiiragi, Miyu Irino, Mari Natsuki',
                'sinopsis' => 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'The Godfather',
                'durasi_film' => 175,
                'sutradara_film' => 'Francis Ford Coppola',
                'genre_film' => 'Crime, Drama',
                'prosedur' => 'Paramount Pictures',
                'produksi' => 'Alfran Productions',
                'casts' => 'Marlon Brando, Al Pacino, James Caan',
                'sinopsis' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                'tayang' => true,
            ],
        ];

        foreach ($films as $film) {
            Film::create($film);
        }
    }
}
