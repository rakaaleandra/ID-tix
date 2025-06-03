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
    total_bayar: number;
    created_at: string;
}

interface Ticket {
  nomor_kursi: string;
}

interface Props {
  pemesanan: Pemesanan;
  tickets: Ticket[];
}

export default function Detail_Ticket({ pemesanan, tickets }: Props) {
  return (
    <AppLayout>
      <div className="w-full h-dvh flex justify-center bg-black p-8">
        <div className="w-5xl h-full flex flex-col gap-10">
          <h1 className="text-white text-3xl font-semibold text-center">Ticket</h1>
          <div className="w-full flex justify-center">
            <img src={QR} alt="QR Code" className="size-96" />
          </div>
          <h1 className="text-white text-3xl font-semibold">Joker</h1>

          <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex justify-between">
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
                {/* {pemesanan.tickets?.map((t: any) => t.nomor_kursi).join(", ") || "-"} */}
                {tickets.map((ticket: Ticket) => ticket.nomor_kursi).join(", ")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
