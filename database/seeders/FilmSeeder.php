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
                'produser' => 'Warner Bros',
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
                'produser' => 'Warner Bros.',
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
                'produser' => 'CJ Entertainment',
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
                'produser' => 'Toho',
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
                'produser' => 'Paramount Pictures',
                'produksi' => 'Alfran Productions',
                'casts' => 'Marlon Brando, Al Pacino, James Caan',
                'sinopsis' => 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
                'tayang' => true,
            ],
            [
                'nama_film' => 'Bad Genius',
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
    }
}
