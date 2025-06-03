import MainLayout from "@/layouts/app/main-layout"
import { Head, Link, usePage } from "@inertiajs/react"

interface Film {
  id: number | string
  nama_film: string
  durasi_film: number
  sutradara_film: string
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
  return (
    <MainLayout>
      <Head title={film.nama_film} />
      <div className="w-full min-h-screen bg-main">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <header className="mb-8">
            <h1 className="text-white text-3xl md:text-4xl font-bold">Now Showing</h1>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Poster Section */}
            <div className="w-full lg:w-2/5">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/storage/FilmPoster/${film.poster_film}`}
                  alt={film.nama_film}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-3/5 flex flex-col gap-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{film.nama_film}</h2>

              {/* Film Details Table */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <table className="w-full text-sm md:text-base">
                  <tbody className="space-y-3">
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-300 font-medium">Jenis Film</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right text-white">{film.genre_film}</td>
                    </tr>
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-300 font-medium">Produser</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right text-white">{film.produser}</td>
                    </tr>
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-300 font-medium">Sutradara</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right text-white">{film.sutradara_film}</td>
                    </tr>
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-300 font-medium">Produksi</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right text-white">{film.produksi}</td>
                    </tr>
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-300 font-medium">Casts</td>
                      {/* <td className="py-2 text-center text-gray-500">:</td> */}
                      <td className="py-2 text-right text-white">{film.casts}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Synopsis Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">Sinopsis</h3>
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{film.sinopsis}</p>
                </div>
              </div>

              {/* Action Button */}
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
    </MainLayout>
  )
}
