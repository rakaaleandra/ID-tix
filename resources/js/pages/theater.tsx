import AppLayout from '@/layouts/app/main-layout';
import Cinema from '@/assets/cinema.png'
import { Head, Link } from '@inertiajs/react';


interface Theater {
  id: number
  nama_bioskop: string
  lokasi_bioskop: string
}

interface Props {
  theaters: Theater[]
}

export default function Theater({ theaters }: Props) {
  return (
    <AppLayout>
      <Head title="Theater" />
      <div className="min-h-screen bg-gray-50 dark:bg-main flex justify-center">
        <div className="container mx-8 py-12 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Theaters</h1>
            <p className="text-gray-600 dark:text-gray-300">Find the perfect cinema location near you</p>
          </div>

          {/* Theater Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {theaters.map((theater) => (
              <div key={theater.id} className="group">
                <Link
                  href={route("theater.show", theater.id)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                    {/* Theater Image */}
                    <div className="overflow-hidden">
                      <img
                        src={Cinema}
                        alt={theater.nama_bioskop}
                      />
                    </div>

                    {/* Theater Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{theater.nama_bioskop}</h3>

                      <div className="mb-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                          {theater.nama_bioskop}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {theater.lokasi_bioskop}
                        </p>
                      </div>

                      {/* See Details Button */}
                      <span
                        // href={route("theater.show", theater.id)}
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-semibold text-sm transition-colors duration-200 group/link"
                      >
                        See Details
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {theaters.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No theaters available</h3>
              <p className="text-gray-600 dark:text-gray-300">Check back later for theater locations.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
