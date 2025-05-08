import AppLayout from '@/layouts/app/main-layout';
import Film from '@/assets/film1.jpg';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

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
// function Body({ films } : Props){
//     return(
//         <>
        
//         </>
//     )
// }

export default function Index({ films } : Props){
    return(
        <>
        <AppLayout />
        {/* <Body /> */}
        <Head title="ID-tix" />
        <div className='w-full h-96 bg-[url("@/assets/film1.jpg")] bg-center bg-cover flex justify-end'>
            {/* <img src={film} alt="dontol" className='w-full h-96 bg-cover' /> */}
            <div className='w-48 h-full flex justify-center items-center'>
                <h1 className='text-white'>dongo</h1>
            </div>
        </div>
        <main className='w-full flex justify-center p-8 dark:bg-main'>
            <div className='w-7xl h-full flex flex-col gap-4'>
                <h1 className='text-4xl font-bold'>Now Showing</h1>
                <div className=' h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {films && films.map((film) => (
                        <div key={film.id} className='flex flex-col w-full'>
                            <a href={route('detail_film')}><div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div></a>
                            <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>{film.nama_film}</div>
                        </div>
                    ))}
                    {/* <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='bg-amber-800 h-96 w-full bg-[url("@/assets/film2.jpg")] bg-cover'></div>
                        <div className=' h-12 flex justify-center items-center text-2xl font-semibold'>hanntu</div>
                    </div> */}
                </div>
            </div>
        </main>
        </>
    )
}