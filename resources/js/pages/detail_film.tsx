import MainLayout from "@/layouts/app/main-layout"
import { Head, Link, usePage } from "@inertiajs/react"
import { useState } from "react"
import { Youtube } from 'lucide-react';

interface Film {
  id: number | string
  nama_film: string
  durasi_film: number
  sutradara_film: string
  trailer_film: string
  genre_film: string
  produser: string
  produksi: string
  casts: string
  sinopsis: string
  poster_film: string
  tayang: boolean
  slug: string
}

interface Props {
  film: Film
}

export default function Detail_Film({ film }: Props) {
  const [showTrailer, setShowTrailer] = useState(false)
  return (
    <MainLayout>
      <Head title={film.nama_film} />
      <div className="w-full min-h-screen bg-white dark:bg-main flex justify-center">
      <div className="container mx-8 my-12 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold"></h1>
            {/* <h1 className="text-white text-3xl md:text-4xl font-bold">Now Showing</h1> */}
            {(()=>{
              if(film.tayang ==true){
                return(
                  <h1 className="text-white text-3xl md:text-4xl font-bold">Now Showing</h1>
                )
              } else{
                return(
                  <h1 className="text-white text-3xl md:text-4xl font-bold">Coming Soon</h1>
                )
              }
            })()}
          </header>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Poster Section */}
            <div className="w-full lg:w-2/5">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/storage/FilmPoster/${film.poster_film}`}
                  alt={film.nama_film}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full h-fit lg:w-3/5 flex flex-col gap-6 light:bg-white text-white dark:bg-gray-900 rounded-lg p-8 shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{film.nama_film}</h2>
              {/* <div className="text-lg dark:text-gray-400 w-fit text-left flex items-center gap-3 hover:text-white" onClick={() => setShowTrailer(true)}>
                <Youtube className="hover:text-white"/>
                <h3 className="hover:text-white">
                  Lihat Trailer
                </h3>
              </div> */}

              {/* Film Details Table */}
              <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6">
                <table className="w-full text-sm md:text-base">
                  <tbody className="space-y-3 text-gray-900 dark:text-white">
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Jenis Film</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right">{film.genre_film}</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Produser</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right">{film.produser}</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Sutradara</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right">{film.sutradara_film}</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Produksi</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right">{film.produksi}</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Casts</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right">{film.casts}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Synopsis Section */}
              <div className="space-y-4">
                <h3 className="ttext-xl md:text-2xl font-bold text-gray-900 dark:text-white">Sinopsis</h3>
                <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">{film.sinopsis}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex gap-8">
                {/* <Link
                    href={route("jadwal", film.slug)}
                    className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition-colors duration-200 h-12 w-full text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    Lihat Trailer
                  </Link> */}
                <button
                  onClick={() => setShowTrailer(true)}
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition-colors duration-200 h-12 w-full text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  Lihat Trailer
                </button>
                {film.tayang ? (
                  <Link
                    href={route("jadwal", film.slug)}
                    className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition-colors duration-200 h-12 w-full text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    Lihat Jadwal
                  </Link>
                ):(
                  null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full max-w-3xl relative">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                // src="https://www.youtube.com/embed/-E3lMRx7HRQ?si=xB1bz_C3BLftdTMc"
                src={film.trailer_film}
                title="Trailer"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
}
