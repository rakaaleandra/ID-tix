import MainLayout from "@/layouts/app/main-layout";
import poster from '@/assets/film2.jpg'
import { Link, usePage } from "@inertiajs/react";

interface Film {
    id: number | string;
    nama_film: string;
    durasi_film: number;
    sutradara_film: string;
    genre_film: string;
    produser: string;
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
                            <table className='w-full font-semibold text-gray-400'>
                                <tr>
                                    <td className="w-1/3">Jenis Film</td>
                                    <td className="w-1/3 text-center">:</td>
                                    <td className="w-1/3 text-right">{film.genre_film}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3">Prosedur</td>
                                    <td className="w-1/3 text-center">:</td>
                                    <td className="w-1/3 text-right">{film.produser}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3">Sutradara</td>
                                    <td className="w-1/3 text-center">:</td>
                                    <td className="w-1/3 text-right">{film.sutradara_film}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3">Produksi</td>
                                    <td className="w-1/3 text-center">:</td>
                                    <td className="w-1/3 text-right">{film.produksi}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/3">Casts</td>
                                    <td className="w-1/3 text-center">:</td>
                                    <td className="w-1/3 text-right">{film.casts}</td>
                                </tr>
                            </table>
                            <h1 className='text-2xl font-bold'>Sinopsis</h1>
                            <div className='text-gray-400 font-semibold'>
                                <p>
                                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed deserunt aliquid ipsa, officia earum quibusdam maxime maiores perferendis omnis excepturi. Exercitationem alias excepturi dolor qui assumenda eveniet quae doloribus? */}
                                    {film.sinopsis}
                                </p>
                            </div>{film.tayang ? (
                                <Link href={route('jadwal', film.id )} className='bg-orange-500 hover:bg-main hover:border hover:border-orange-500 h-12 w-full text-white rounded-2xl font-bold'>Lihat Jadwal</Link>
                                // <button className='bg-orange-500 hover:bg-main hover:border hover:border-orange-500 h-12 w-full text-white rounded-2xl font-bold'>
                                ///* </button> */}
                            ): (
                                null
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    )
}