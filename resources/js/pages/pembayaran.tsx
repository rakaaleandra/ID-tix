// import AppLayout from "@/layouts/app/main-layout";
// import { useForm } from "@inertiajs/react";

// export default function Pembayaran({film, schedule}:any){
//     const { data, setData, post, progress } = useForm<{
//         schedule_id: number;
//         bukti_bayar: File | null;
//       }>({
//         schedule_id: schedule.id,
//         bukti_bayar: null
//       });

//     function submit(e : React.FormEvent<HTMLFormElement>){
//         e.preventDefault();
//         post(route('membayar'));
//     }
//     console.log(useForm())
//     return(
//         <AppLayout>
//             <main className="w-full flex justify-center p-8">
//                 <div className="w-7xl">
//                     <h1>{film.nama_film}</h1>
//                     <h1>{schedule.tanggal_tayang}</h1>
//                     <h1>{schedule.jam_tayang}</h1>
//                     <form action="" onSubmit={submit}>
//                         {/* <input type="file" onChange={e => setData('bukti_bayar', e.target.files[0])} src="" alt="" /> */}
//                         <input type="file" onChange={e => {
//                                 if (e.target.files && e.target.files[0]) {
//                                 setData('bukti_bayar', e.target.files[0]);
//                                 }
//                             }}
//                         />
//                         <button className="bg-amber-800 px-5 py-3 rounded-xl hover:bg-white hover:text-black" type="submit">bayar</button>
//                     </form>
//                 </div>
//             </main>
//         </AppLayout>
//     )
// }

import AppLayout from "@/layouts/app/main-layout";
import { useForm } from "@inertiajs/react";
import React from "react";

interface Props {
  film: {
    nama_film: string;
  };
  schedule: {
    id: number;
    tanggal_tayang: string;
    jam_tayang: string;
  };
}

export default function Pembayaran({ film, schedule }: Props) {
  const { data, setData, post, progress } = useForm<{
    schedule_id: number;
    bukti_bayar: File | null;
  }>({
    schedule_id: schedule.id,
    bukti_bayar: null,
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route("membayar"));
  }

  return (
    <AppLayout>
      <main className="w-full flex justify-center p-8">
        <div className="w-7xl">
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
      </main>
    </AppLayout>
  );
}
