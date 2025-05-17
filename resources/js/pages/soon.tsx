import AppLayout from '@/layouts/app/main-layout';
import Film from '@/assets/film1.jpg';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Dashboard from './dashboard';
import { useRoute } from 'vendor/tightenco/ziggy';

interface Film {
    id: number | string;
    nama_film: string;
    durasi_film: number;
    sutradara_film: string;
    genre_film: string;
    prosedur: string;
    produksi: string;
    casts: string;
    sinopsis: string;
    tayang: boolean;
}

interface Props {
    films: Film[];
}

export default function index({ films } : Props){
    return(
        <AppLayout>
            <main className='w-full flex justify-center p-8 dark:bg-main'>
                <div className='w-7xl h-full flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>Comming Soon</h1>
                    <div className=' h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {films.map(film => (
                            <div key={film.id}>
                                <Link href={route('detail_films.show',  film.id )} className='flex flex-col w-full'>
                                    <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                                    <div className=' h-20 flex justify-center items-center text-xl font-semibold text-center'>{film.nama_film}</div>
                                </Link>
                            </div>
                        ))}
                        {/* <Link href={`/detail_film/${film.id}`} className='flex flex-col w-full'> */}
                        {/* <Link href={route('detail_films.show', film)} className='flex flex-col w-full'> */}
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}