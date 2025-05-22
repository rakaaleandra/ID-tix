import AppLayout from '@/layouts/app/main-layout';
import Cinema from '@/assets/cinema.png'
import { Head, Link } from '@inertiajs/react';


interface Theater {
    id: number;
    nama_bioskop: string;
    nama_lokasi: string;
}

interface Props {
    theaters: Theater[];
}

export default function Theater({theaters} : Props){
    return(
        <AppLayout>
            <Head title='Theater'></Head>
            <div className='p-8 dark:bg-main flex justify-center w-full'>
                <div className='w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {theaters.map(theater => (
                        <Link href={route('theater.show', theater.id)} className='flex flex-col items-center gap-5'>
                            <img src={Cinema} alt="" className='rounded-3xl' />
                            <h1 className='font-bold text-xl'>{theater.nama_bioskop}</h1>
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}