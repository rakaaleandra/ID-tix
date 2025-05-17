import AppLayout from '@/layouts/app/main-layout';

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
        <>
        <AppLayout />
        <div className='p-8 dark:bg-main flex justify-center w-full'>
            <div className='w-7xl flex flex-col gap-8'>
                {
                    theaters.map(theater => (
                        <div key={theater.id} className='flex justify-between font-semibold'>
                            <h1>{theater.nama_bioskop}</h1>
                            <h1>{theater.nama_lokasi}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}