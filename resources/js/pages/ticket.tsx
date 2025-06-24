import AppLayout from "@/layouts/app/main-layout"
import type React from "react"
import { Head, Link, usePage } from "@inertiajs/react"
import { MapPin, Calendar, Clock, Users } from "lucide-react"

interface Film {
  id: number
  nama_film: string
  poster_film: string
}

interface Theater {
  id: number
  nama_bioskop: string
  lokasi_bioskop: string
}

interface Schedule {
  id: number
  tanggal_tayang: string
  jam_tayang: string
  film: Film
  theater: Theater
}

interface Pemesanan {
  id: number
  schedule: Schedule
  status_pemesanan:'berhasil' | 'gagal' | 'masalah' | 'kadaluarsa' | null
  created_at: string
  code_pemesanan: string
}

interface PageProps {
  pemesanan: Pemesanan[]
  [key: string]: unknown
}

const getStatusBadge = (status: Pemesanan["status_pemesanan"]) => {
  switch (status) {
    case "berhasil":
      return {
        label: "Success",
        bg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      }
    case "gagal":
      return {
        label: "Fail",
        bg: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      }
    case "masalah":
      return {
        label: "Trouble",
        bg: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      }
    case "kadaluarsa":
      return {
        label: "Expired",
        bg: "bg-blue-100 text-gray-800 dark:bg-blue-900 dark:text-gray-200",
      }
    default:
      return {
        label: "Pending",
        bg: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      }
  }
}

const PesananIndex: React.FC = () => {
  const { pemesanan } = usePage<PageProps>().props

  return (
    <AppLayout>
      <Head title="Tickets" />
      <main className="w-full min-h-screen bg-gray-50 dark:bg-main flex justify-center">
        <div className="container mx-8 my-12 max-w-4xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Tickets</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your movie bookings</p>
          </div>

          {/* Tickets List */}
          <div className="space-y-4">
            {pemesanan.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No tickets found</h3>
                <p className="text-gray-500 dark:text-gray-400">You haven't booked any movies yet.</p>
              </div>
            ) : (
              pemesanan.map((pesanan) => (
                <Link key={pesanan.id} href={route("detail_ticket", pesanan.id)} className="block">
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 duration-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                    <div className="flex w-full">
                      <div className="flex-shrink-0 bg-gray-200 dark:bg-gray-800 rounded-lg mr-4">
                        <img
                        src={`/storage/FilmPoster/${pesanan.schedule.film.poster_film}`}
                        alt={pesanan.schedule.film.nama_film}
                        className="h-44"
                      />
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {pesanan.schedule.film.nama_film}
                            </h3>

                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span className="text-sm">{pesanan.schedule.theater.nama_bioskop}</span>
                            </div>

                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">{pesanan.schedule.tanggal_tayang}</span>
                            </div>

                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <Clock className="w-4 h-4 mr-2" />
                              <span className="text-sm">{pesanan.schedule.jam_tayang}</span>
                            </div>
                          </div>

                          <div className="text-right">
                            {(() => {
                              const { label, bg } = getStatusBadge(pesanan.status_pemesanan)
                              return (
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg}`}>
                                  {label}
                                </span>
                              )
                            })()}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                              Booked: {new Date(pesanan.created_at).toLocaleDateString("id-ID")}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                          {pesanan.status_pemesanan === 'berhasil' ? (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Ticket ID: #{pesanan.code_pemesanan}</span>
                              <span className="text-orange-700 dark:text-orange-300 text-sm font-medium">View Details →</span>
                            </div>
                          ) : (
                            <div className="flex justify-end items-center">
                              <span className="text-orange-700 dark:text-orange-300 text-sm font-medium">View Details →</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
    </AppLayout>
  )
}

export default PesananIndex
