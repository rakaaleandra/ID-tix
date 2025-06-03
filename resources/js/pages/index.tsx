import AppLayout from '@/layouts/app/main-layout';
import Film from '@/assets/film1.jpg';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Dashboard from './dashboard';
import { useRoute } from 'vendor/tightenco/ziggy';

interface Film {
  id: number | string
  nama_film: string
  durasi_film: number
  sutradara_film: string
  genre_film: string
  prosedur: string
  produksi: string
  casts: string
  sinopsis: string
  tayang: boolean
  poster_film: string
  slug: string
}

interface Props {
  films: Film[]
}

export default function Index({ films }: Props) {
  return (
    <AppLayout>
      <Head title="Home" />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-gradient-to-r from-black/50 to-black/30">
        <div
          className="absolute inset-0 bg-[url('@/assets/film1.jpg')] bg-center bg-cover"
          style={{ backgroundImage: "url('@/assets/film1.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-end pr-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-white text-2xl font-bold">Welcome to Cinema Dongo</h2>
            <p className="text-gray-200 mt-2">Experience the magic of movies</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full bg-white dark:bg-main">
        <div className="container mx-auto py-8 max-w-7xl">
          <div className="space-y-8">
            <header>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Now Showing</h1>
            </header>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {films.map((film) => (
                <div key={film.id} className="group">
                  <Link
                    href={route("detail_films.show", film.slug)}
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={`/storage/FilmPoster/${film.poster_film}`}
                        alt={film.nama_film}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white line-clamp-2">
                        {film.nama_film}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}
