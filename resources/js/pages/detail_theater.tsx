import AppLayout from "@/layouts/app/main-layout"
import { Head } from "@inertiajs/react"

interface Theater {
  id: number
  nama_bioskop: string
  lokasi_bioskop: string
}

interface Props {
  theater: Theater
}

export default function DetailTheater({ theater }: Props) {
  return (
    <AppLayout>
      <Head title={theater.nama_bioskop} />
      <div className="min-h-screen bg-gray-50 dark:bg-main">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{theater.nama_bioskop}</h1>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg">{theater.lokasi_bioskop}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
