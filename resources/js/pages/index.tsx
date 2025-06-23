import AppLayout from '@/layouts/app/main-layout';
import Film from '@/assets/film1.jpg';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Dashboard from './dashboard';
import { useRoute } from 'vendor/tightenco/ziggy';
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


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
  const { props } = usePage<{ flash?: { success?: string } }>()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (props.flash?.success && !shown) {
      toast.success(props.flash.success)
      setShown(true)
    }
  }, [props.flash?.success, shown])

  // console.log('FLASH MESSAGE:', successMessage)

  return (
    <AppLayout>
      <Head title="Home" />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={() =>
          'bg-main text-white font-medium px-4 py-3 rounded shadow-lg border border-orange-500'
        }
      />

      {/* Hero Section */}
      <div className="relative w-full h-[32rem] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div
          className="absolute inset-0 opacity-15 dark:opacity-25"
          style={{
            backgroundImage: `
              polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)
            `,
            maskImage: `
              radial-gradient(circle at 20% 20%, #f97316 2px, transparent 2px),
              radial-gradient(circle at 80% 40%, #f97316 1.5px, transparent 1.5px),
              radial-gradient(circle at 40% 80%, #f97316 2px, transparent 2px)
            `,
            maskSize: "80px 80px, 60px 60px, 70px 70px",
            backgroundColor: "#f97316",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            Welcome to <span className="text-orange-500">ID-tix</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">Experience the magic of movies</p>
        </div>
      </div>
    </div>

      {/* Main Content */}
      <main className="w-full bg-white dark:bg-main flex justify-center">
        <div className="container mx-8 my-12 max-w-7xl">
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
                    className="block bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={`/storage/FilmPoster/${film.poster_film}`}
                        alt={film.nama_film}
                        className='h-[440px] w-full object-cover group-hover:scale-105 transition-transform duration-300'
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
