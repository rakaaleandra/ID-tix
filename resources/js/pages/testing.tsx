import AppLayout from '@/layouts/app/main-layout';


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

export default function Testing({ films } : Props) {
    return(
        <>
        <AppLayout />
        <div className='w-full flex justify-center p-8 bg-main'>
            <div className='w-7xl text-center'>
                { films && films.map( (film) => (
                    <div key={film.id}>
                        <h1>{film.nama_film}</h1>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}