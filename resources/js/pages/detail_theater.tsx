import AppLayout from "@/layouts/app/main-layout"
import { Head } from "@inertiajs/react"
import { MapPin, Phone, Clock, Ticket } from "lucide-react"

interface Theater {
  id: number
  nama_bioskop: string
  lokasi_bioskop: string
  spesifik_lokasi_bioskop: string
  map_bioskop: string
  deskripsi_bioskop : string
  no_telp_bioskop: string
}

interface Props {
  theater: Theater
}

export default function DetailTheater({ theater }: Props) {
  return (
    <AppLayout>
      <Head title={theater.nama_bioskop} />
      <div className="min-h-screen bg-gray-50 dark:bg-main flex justify-center">
        <div className="container mx-8 my-12 max-w-7xl">
          {/* Theater Info Card */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              {/* Theater Info */}
              <div className="p-8 md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{theater.nama_bioskop}</h1>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{theater.spesifik_lokasi_bioskop}</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{theater.no_telp_bioskop}</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">10:00 - 22:00 (Senin - Minggu)</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Ticket className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Regular: Rp50.000</p>
                      <p className="text-gray-600 dark:text-gray-300">Premium: Rp75.000</p>
                      <p className="text-gray-600 dark:text-gray-300">VIP: Rp100.000</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fasilitas</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                      Parking
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                      Food Court
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                      Dolby Atmos
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                      IMAX
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                      Wheelchair Access
                    </span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="md:w-1/2 h-[300px] md:h-auto">
                <iframe
                  src={theater.map_bioskop}
                  className="w-full h-full border border-gray-300 rounded-xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map location for ${theater.nama_bioskop}`}
                ></iframe>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About {theater.nama_bioskop}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {/* {theater.nama_bioskop} is a premier cinema destination located in {theater.lokasi_bioskop}. Featuring
              state-of-the-art projection and sound systems, comfortable seating, and a wide selection of concessions,
              we provide an unparalleled movie-going experience. Our theater is equipped with the latest technology
              including Dolby Atmos sound systems and IMAX screens for the ultimate cinematic experience. */}
              {theater.deskripsi_bioskop}
            </p>
          </div>

          {/* Nearby Amenities */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nearby Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Restaurants</h3>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Food Court (Level 1)</li>
                  <li>• Starbucks Coffee</li>
                  <li>• Pizza Hut</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Shopping</h3>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Mall Shopping Center</li>
                  <li>• Department Store</li>
                  <li>• Bookstore</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white">Parking</h3>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>• Basement Parking</li>
                  <li>• Outdoor Parking</li>
                  <li>• Valet Service Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
