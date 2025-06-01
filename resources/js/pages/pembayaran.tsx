import AppLayout from "@/layouts/app/main-layout";
import { useForm } from "@inertiajs/react";
import React from "react";

interface Seats {
  id: number;
  nomor_kursi: string;
  status_booking : boolean;
}
interface Props {
  film: {
    nama_film: string;
  };
  schedule: {
    id: number;
    tanggal_tayang: string;
    jam_tayang: string;
  };
  seats: Seats[];
}

export default function Pembayaran({ film, schedule, seats }: Props) {
  console.log(seats);
  const { data, setData, post, progress } = useForm<{
    schedule_id: number;
    bukti_bayar: File | null;
    nomor_kursi: string[];
  }>({
    schedule_id: schedule.id,
    bukti_bayar: null,
    nomor_kursi: [],
  });

  function toggleKursi(nomor: string) {
    if (data.nomor_kursi.includes(nomor)) {
      setData("nomor_kursi", data.nomor_kursi.filter(k => k !== nomor));
    } else {
      setData("nomor_kursi", [...data.nomor_kursi, nomor]);
    }
  }
  

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route("membayar"));
  }

  return (
    <AppLayout>
      <main className="w-full flex justify-center p-8">
        <div className="w-7xl flex flex-row-reverse">
          <div className="">
            <h1>{film.nama_film}</h1>
            <h1>{schedule.tanggal_tayang}</h1>
            <h1>{schedule.jam_tayang}</h1>
            <form onSubmit={submit}>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setData("bukti_bayar", e.target.files[0]);
                  }
                }}
              />
              <button
                className="bg-amber-800 px-5 py-3 rounded-xl hover:bg-white hover:text-black"
                type="submit"
              >
                Bayar
              </button>
            </form>

            {progress && (
              <progress value={progress.percentage} max={100}>
                {progress.percentage}%
              </progress>
            )}
          </div>
          <div className="bg-yellow-400">
            <div className="grid grid-cols-15">
                {/*<div className="bg-blue-500 w-10 h-10 rounded-lg border flex justify-center items-center text-black">1</div> */}
                {seats.map((seat) => {
                  const isSelected = data.nomor_kursi.includes(seat.nomor_kursi);
                  const isBooked = seat.status_booking;

                  return (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => !isBooked && toggleKursi(seat.nomor_kursi)}
                      className={`w-10 h-10 rounded-lg border text-sm font-semibold ${
                        isBooked
                          ? "bg-gray-400 cursor-not-allowed"
                          : isSelected
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white hover:bg-blue-700"
                      }`}
                    >
                      {seat.nomor_kursi}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
