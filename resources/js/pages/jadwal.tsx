// import AppLayout from '@/layouts/app/main-layout';

// export default function Jadwal({film}:any){
//     return(
//         <AppLayout >
//             {film.schedules.map((schedule: any) => (   
//                 <div key={schedule.id}>
//                     <h1>{schedule.jam_tayang}</h1>
//                     <br />
//                     <h1>{schedule.theater.nama_bioskop}</h1>
//                 </div>
//             ))}
//         </AppLayout>
//     )
// }

import React from 'react';
import AppLayout from '@/layouts/app/main-layout';
import { Head, Link } from '@inertiajs/react';

type Theater = {
    id: number;
    nama_bioskop: string;
    lokasi_bioskop: string;
};

type Schedule = {
    id: number;
    tanggal_tayang: string;
    jam_tayang: string;
    theater: Theater;
};

type Film = {
    id: number;
    nama_film: string;
    slug: string;
    schedules: Schedule[];
};

type Props = {
    film: Film;
};

export default function Jadwal({ film }: Props) {
    // Group schedules by theater name
    const groupedSchedules: Record<string, Schedule[]> = film.schedules.reduce((acc, schedule) => {
        const theaterName = schedule.theater?.nama_bioskop ?? 'Unknown Theater';
        if (!acc[theaterName]) {
            acc[theaterName] = [];
        }
        acc[theaterName].push(schedule);
        return acc;
    }, {} as Record<string, Schedule[]>);

    return (
        <AppLayout>
            <Head title='Schedule'></Head>
            <h1 className="text-2xl font-bold mb-6">{film.nama_film}</h1>

            {Object.entries(groupedSchedules).map(([theaterName, schedules]) => (
                <div key={theaterName} className="mb-8">
                    <h2 className="text-xl font-semibold">{theaterName}</h2>
                    <ul className="ml-4 mt-2 list-disc">
                        {schedules.map((schedule) => (
                            <li key={schedule.id}>
                                <Link href={route('pembayaran', [film.slug,schedule.id])}>
                                    {schedule.tanggal_tayang} - {schedule.jam_tayang}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </AppLayout>
    );
}
