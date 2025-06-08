import React from 'react';
import AppLayout from '@/layouts/app/main-layout';
import { Head, Link } from '@inertiajs/react';

type Theater = {
  id: number
  nama_bioskop: string
  lokasi_bioskop: string
}

type Schedule = {
  id: number
  tanggal_tayang: string
  jam_tayang: string
  theater: Theater
}

type Film = {
  id: number
  nama_film: string
  slug: string
  schedules: Schedule[]
}

// type Props = {
//   film: Film
// }

// export default function Jadwal({ film }: Props) {
//   // Group schedules by theater name
//   const groupedSchedules: Record<string, Schedule[]> = film.schedules.reduce(
//     (acc, schedule) => {
//       const theaterName = schedule.theater?.nama_bioskop ?? "Unknown Theater"
//       if (!acc[theaterName]) {
//         acc[theaterName] = []
//       }
//       acc[theaterName].push(schedule)
//       return acc
//     },
//     {} as Record<string, Schedule[]>,
//   )

//   return (
//     <AppLayout>
//       <Head title="Schedule" />
//       <div className="min-h-screen bg-gray-50 dark:bg-main">
//         <div className="container mx-auto px-4 py-8 max-w-4xl">
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
//             <header className="mb-8">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{film.nama_film}</h1>
//               <p className="text-gray-600 dark:text-gray-300 mt-2">Pilih jadwal tayang yang tersedia</p>
//             </header>

//             <div className="space-y-6">
//               {Object.entries(groupedSchedules).map(([theaterName, schedules]) => (
//                 <div key={theaterName} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
//                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                       <path
//                         fillRule="evenodd"
//                         d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h8z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {theaterName}
//                   </h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                     {schedules.map((schedule) => (
//                       <Link
//                         key={schedule.id}
//                         href={route("pembayaran", [film.slug, schedule.id])}
//                         className="block bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 rounded-lg p-4 transition-all duration-200 group"
//                       >
//                         <div className="text-center">
//                           <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
//                             {schedule.tanggal_tayang}
//                           </div>
//                           <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
//                             {schedule.jam_tayang}
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   )
// }

type Props = {
  film: Film
  allDates: string[]
  currentDate: string
}

export default function Jadwal({ film, allDates, currentDate }: Props) {
  const groupedSchedules: Record<string, Schedule[]> = film.schedules.reduce(
    (acc, schedule) => {
      const theaterName = schedule.theater?.nama_bioskop ?? "Unknown Theater"
      if (!acc[theaterName]) {
        acc[theaterName] = []
      }
      acc[theaterName].push(schedule)
      return acc
    },
    {} as Record<string, Schedule[]>,
  )

  return (
    <AppLayout>
      <Head title={`${film.nama_film} Schedules`} />
      <div className="min-h-screen bg-gray-50 dark:bg-main">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {film.nama_film}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Pilih jadwal tayang berdasarkan tanggal</p>
            </header>

            {/* Tanggal Pagination */}
            <div className="flex flex-wrap gap-2 mb-6">
              {allDates.map((date) => (
                <Link
                  key={date}
                  href={route('jadwal', [film.slug]) + `?tanggal=${date}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-200 ${
                    currentDate === date
                      ? 'bg-orange-500 text-white border-orange-600'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-orange-100 dark:hover:bg-orange-800 hover:border-orange-500'
                  }`}
                >
                  {date}
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              {Object.entries(groupedSchedules).map(([theaterName, schedules]) => (
                <div key={theaterName} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2h8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {theaterName}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {schedules.map((schedule) => (
                      <Link
                        key={schedule.id}
                        href={route("pembayaran", [film.slug, schedule.id])}
                        className="block bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/20 border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 rounded-lg p-4 transition-all duration-200 group"
                      >
                        <div className="text-center">
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                            {schedule.tanggal_tayang}
                          </div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                            {schedule.jam_tayang}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}