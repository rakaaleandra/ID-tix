<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Film>
 */
class FilmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // return [
        //     'nama_film' => fake()->title(),
        //     'durasi_film' => fake()->randomNumber(2),
        //     'sutradara_film' => fake()->name(),
        //     'genre_film' => fake()->name(),
        //     'prosedur' => fake()->name(),
        //     'produksi' => fake()->name(),
        //     'casts' => fake()->name(),
        //     'sinopsis' => fake()->text(),
        //     'tayang' => fake()->boolean()
        // ];
        return [
            'nama_film' => 'Inception',
            'durasi_film' => 148,
            'sutradara_film' => 'Christopher Nolan',
            'genre_film' => 'Sci-Fi',
            'prosedur' => 'Warner Bros',
            'produksi' => 'Syncopy',
            'casts' => 'Leonardo DiCaprio, Joseph Gordon-Levitt',
            'sinopsis' => 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
            'tayang' => true
        ];
    }
}
