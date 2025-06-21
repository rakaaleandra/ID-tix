import AppLayout from "@/layouts/app/main-layout";
import { Head, useForm } from "@inertiajs/react";
import React, { useMemo } from "react";

interface Seats {
  id: number;
  nomor_kursi: string;
  status_booking: boolean;
}
interface Props {
  film: {
    nama_film: string;
  };
  schedule: {
    id: number;
    tanggal_tayang: string;
    jam_tayang: string;
    harga_tiket: number;
  };
  seats: Seats[];
}

export default function Pembayaran({ film, schedule, seats }: Props) {
  const { data, setData, post, progress } = useForm<{
    schedule_id: number;
    bukti_bayar: File | null;
    nomor_kursi: string[];
    total_bayar: number;
  }>({
    schedule_id: schedule.id,
    bukti_bayar: null,
    nomor_kursi: [],
    total_bayar: 0
  });

  function toggleKursi(nomor: string) {
    if (data.nomor_kursi.includes(nomor)) {
      setData("nomor_kursi", data.nomor_kursi.filter((k) => k !== nomor));
    } else {
      setData("nomor_kursi", [...data.nomor_kursi, nomor]);
    }
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route("membayar"));
  }

  const totalHarga = useMemo(() => {
    const total =  data.nomor_kursi.length * schedule.harga_tiket;
    setData("total_bayar", total);
    return total;
  }, [data.nomor_kursi, schedule.harga_tiket]);

  return (
    <AppLayout>
      <Head title={`${film.nama_film} ${schedule.tanggal_tayang}`} />
      <main className="w-full flex justify-center p-8 bg-gray-100 dark:bg-main min-h-screen transition-colors">
        <div className="w-full max-w-7xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg dark:shadow-black/30 rounded-xl p-8 flex flex-col md:flex-row gap-10 transition-all">
          
          {/* Pilih Kursi */}
          <div className="md:w-2/3">
            <h2 className="text-xl font-bold mb-4">Pilih Kursi</h2>
            <div className="grid grid-cols-15 gap-3">
              <div className="col-span-full flex justify-center items-center text-xl font-bold h-10 bg-gray-300 dark:bg-main text-gray-900 dark:text-white">
                Layar
              </div>
              {seats.map((seat) => {
                const isSelected = data.nomor_kursi.includes(seat.nomor_kursi);
                const isBooked = seat.status_booking;
                return (
                  <button
                    key={seat.id}
                    type="button"
                    onClick={() => !isBooked && toggleKursi(seat.nomor_kursi)}
                    className={`w-12 h-12 rounded-lg border border-orange-400 font-semibold transition ${
                      isBooked
                        ? "bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-400 border-0 cursor-not-allowed"
                        : isSelected
                        ? "bg-orange-400 border-0"
                        : "bg-orange-500 text-white hover:bg-orange-600 hover:border-0"
                    }`}
                  >
                    {seat.nomor_kursi}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info & Form */}
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold mb-2">{film.nama_film}</h1>
            <p className="mb-1">Jadwal: {schedule.tanggal_tayang} - {schedule.jam_tayang}</p>
            <p className="mb-1">Harga Tiket: <strong>Rp{schedule.harga_tiket.toLocaleString()}</strong></p>
            <p className="mt-2 font-semibold">
              Kursi dipilih: {data.nomor_kursi.join(", ") || "-"}
            </p>
            <p className="text-lg mt-1 font-bold text-amber-700 dark:text-amber-400">
              Total Harga: Rp{totalHarga.toLocaleString()}
            </p>

            <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Upload Bukti Bayar</label>
                <input
                  type="file"
                  className="block w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setData("bukti_bayar", e.target.files[0]);
                    }
                  }}
                />
              </div>

              <button
                type="submit"
                className="bg-amber-700 text-white px-5 py-3 rounded-lg shadow hover:bg-amber-800 transition font-semibold"
              >
                Bayar Sekarang
              </button>

              {progress && (
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-500 h-4 transition-all"
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
