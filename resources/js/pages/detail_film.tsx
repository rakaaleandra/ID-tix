import MainLayout from "@/layouts/app/main-layout";
import poster from '@/assets/film2.jpg'
import { usePage } from "@inertiajs/react";

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
    film: Film;
  }

export default function Detail_film({ film } : any) {
    return(
        console.log(film),
        <MainLayout>
            <div className='w-full flex justify-center p-8 bg-main'>
                <main className='w-7xl h-full  flex flex-col gap-10'>
                    <h1 className='text-white text-4xl font-bold '>
                        Now Showing
                    </h1>
                    <div className='flex justify-between gap-20'>
                        <div className='w-2/5'>
                            <img src={poster} alt="" className='object-contain' />
                        </div>
                        <div className=' w-3/5 h-full flex flex-col gap-6 text-white'>
                            <h1 className='text-2xl font-bold'>{film.nama_film}</h1>
                            <div className="flex flex-col gap-2">
                                <div className='flex justify-between font-semibold text-gray-400 w-full'>
                                    <h1>Jenis Film</h1>
                                    <h1>:</h1>
                                    <h1>{film.genre_film}</h1>
                                </div>
                                <div className='flex justify-between font-semibold text-gray-400'>
                                    <h1>Prosedur</h1>
                                    <h1>:</h1>
                                    <h1>Comedy</h1>
                                </div>
                                <div className='flex justify-between font-semibold text-gray-400'>
                                    <h1>Sutradara</h1>
                                    <h1>:</h1>
                                    <h1>{film.sutradara_film}</h1>
                                </div>
                                <div className='flex justify-between font-semibold text-gray-400'>
                                    <h1>Produksi</h1>
                                    <h1>:</h1>
                                    <h1>Comedy</h1>
                                </div>
                                <div className='flex justify-between font-semibold text-gray-400'>
                                    <h1>Casts</h1>
                                    <h1>:</h1>
                                    <h1>Comedy</h1>
                                </div>
                            </div>
                            <h1 className='text-2xl font-bold'>Sinopsis</h1>
                            <div className='text-gray-400 font-semibold'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed deserunt aliquid ipsa, officia earum quibusdam maxime maiores perferendis omnis excepturi. Exercitationem alias excepturi dolor qui assumenda eveniet quae doloribus?
                                </p>
                            </div>
                            <button className='bg-orange-500 hover:bg-main hover:border hover:border-orange-500 h-12 w-full text-white rounded-2xl font-bold'>
                                Lihat Jadwal
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    )
}