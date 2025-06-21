import AppLayout from "@/layouts/app/main-layout"
import QR from "@/assets/qr.jpg"

interface Film {
  id: number;
  nama_film: string;
}

interface Theater {
  id: number;
  nama_bioskop: string;
  lokasi_bioskop: string;
}

interface Schedule {
  id: number;
  tanggal_tayang: string;
  jam_tayang: string;
  film: Film;
  theater: Theater;
}

interface Pemesanan {
    id: number;
    schedule: Schedule;
    status_pemesanan:'berhasil' | 'gagal' | 'masalah' | null
    feedback: string;
    total_bayar: number;
    created_at: string;
    code_pemesanan: string;
}

interface Ticket {
  nomor_kursi: string;
}

interface Props {
  pemesanan: Pemesanan;
  tickets: Ticket[];
  qr?: string;
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
    default:
      return {
        label: "Pending",
        bg: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      }
  }
}

export default function Detail_Ticket({ pemesanan, tickets, qr }: Props) {
  return (
    <AppLayout>
      <div className="w-full min-h-screen flex justify-center bg-gray-100 dark:bg-main">
        <div className="flex flex-col gap-8 mx-8 my-12 container max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ticket</h1>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-12 shadow-lg">
            <div className="w-full flex justify-center border-b border-gray-300 dark:border-gray-600 pb-8">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <img src={qr} alt="QR Code" className="size-64" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">{pemesanan.schedule.film.nama_film}</h1>
              <div className="w-full h-full flex flex-col gap-5">
                {/* <div className="w-full flex justify-between">
                  <h1 className="text-gray-400">Total Bayar</h1>
                  <h1 className="text-white">Rp{Number(pemesanan.total_bayar).toLocaleString()}</h1>
                </div>

                <div className="w-full flex justify-between">
                  <h1 className="text-gray-400">Cinema</h1>
                  <h1 className="text-white">{pemesanan.schedule.theater.nama_bioskop}</h1>
                </div>

                <div className="w-full flex justify-between">
                  <h1 className="text-gray-400">Nomor Kursi</h1>
                  <h1 className="text-white">
                    {tickets.map((ticket: Ticket) => ticket.nomor_kursi).join(", ")}
                  </h1>
                </div> */}
                <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6">
                <table className="w-full text-sm md:text-base">
                  <tbody className="space-y-3">
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Code</td>
                      <td className="py-2 text-right dark:text-white">{pemesanan.code_pemesanan}</td>
                    </tr>
                    <tr className="border-b border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Bioskop</td>
                      <td className="py-2 text-right dark:text-white">{pemesanan.schedule.theater.nama_bioskop}</td>
                    </tr>

                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Tanggal Tayang</td>
                      <td className="py-2 text-right text-gray-900 dark:text-white">{pemesanan.schedule.tanggal_tayang} / {pemesanan.schedule.jam_tayang}</td>
                    </tr>

                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Kursi</td>
                      <td className="py-2 text-right text-gray-900 dark:text-white">
                        {tickets.map((ticket: Ticket) => ticket.nomor_kursi).join(", ")}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Total Bayar</td>
                      <td className="py-2 text-right text-gray-900 dark:text-white">{pemesanan.total_bayar}</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                      <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Status</td>
                      <td className="py-2 text-right text-gray-900 dark:text-white">
                        {(() => {
                          const { label, bg } = getStatusBadge(pemesanan.status_pemesanan)
                          return (
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bg}`}>
                              {label}
                            </span>
                          )
                        })()}
                      </td>
                    </tr>
                      {(() => {
                        if (pemesanan.status_pemesanan === 'gagal' || pemesanan.status_pemesanan === 'masalah') {
                          return (
                          <tr className="border-b border-gray-300 dark:border-gray-700 last:border-b-0">
                            <td className="py-2 text-gray-600 dark:text-gray-300 font-medium">Fail or Problem feedback</td>
                            <td className="py-2 text-right text-gray-900 dark:text-white">
                              <span className={"inline-flex items-center px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 max-w-96 text-sm text-gray-800 dark:text-gray-100"}>
                                {pemesanan.feedback || 'No feedback provided'}
                              </span>
                            </td>
                          </tr>
                          )
                        }
                        else {
                          return null
                        }
                      })()}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
