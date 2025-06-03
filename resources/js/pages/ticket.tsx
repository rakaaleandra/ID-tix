// import AppLayout from "@/layouts/app/main-layout"
// import { Link } from "@inertiajs/react";

// interface Prop{
//     id: number | string;
    
// }

// export default function Ticket({pemesanan}:any){
//     return(
//         <AppLayout>
//             <div>
//             <h1 className="text-xl font-bold mb-4">Daftar Pesanan Saya</h1>
//             <table className="table-auto w-full border">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border px-4 py-2">No</th>
//                         <th className="border px-4 py-2">Nama Film</th>
//                         <th className="border px-4 py-2">Jadwal Tayang</th>
//                         <th className="border px-4 py-2">Waktu Dipesan</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pesanans.map((pesanan, index) => (
//                         <tr key={pesanan.id}>
//                             <td className="border px-4 py-2">{index + 1}</td>
//                             <td className="border px-4 py-2">{pesanan.schedule.film.nama}</td>
//                             <td className="border px-4 py-2">{pesanan.schedule.jadwal_tayang}</td>
//                             <td className="border px-4 py-2">{new Date(pesanan.created_at).toLocaleString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div>
//         </AppLayout>
//     );
// }

import AppLayout from "@/layouts/app/main-layout"
import React from 'react';
import { Link, usePage } from '@inertiajs/react';

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
  created_at: string;
}

interface PageProps {
    pemesanan: Pemesanan[];
  [key: string]: unknown;
}

const PesananIndex: React.FC = () => {
    const { pemesanan } = usePage<PageProps>().props;

  return (
      <AppLayout>
          <h1 className="text-2xl font-semibold mb-4">Daftar Pesanan Saya</h1>
          <table className="table-auto w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Nama Film</th>
                <th className="border px-4 py-2">Jadwal Tayang</th>
                <th className="border px-4 py-2">Lokasi</th>
                <th className="border px-4 py-2">Tanggal Dipesan</th>
              </tr>
            </thead>
            <tbody>
              {pemesanan.map((pesanan, index) => (
                <tr key={pesanan.id}>
                  <Link href={route('detail_ticket', pesanan.id)}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{pesanan.schedule.film.nama_film}</td>
                    <td className="border px-4 py-2">{pesanan.schedule.jam_tayang }</td>
                    <td className="border px-4 py-2">{pesanan.schedule.theater.nama_bioskop }</td>
                    <td className="border px-4 py-2">
                      {new Date(pesanan.created_at).toLocaleString('id-ID')}
                    </td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
      </AppLayout>
  );
};

export default PesananIndex;