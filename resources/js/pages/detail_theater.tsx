import AppLayout from '@/layouts/app/main-layout';

export default function Detail_Theater({theater}:any){
    return(
        <AppLayout >
            <div>
                {theater.nama_bioskop}
                {theater.lokasi_bioskop}
            </div>
        </AppLayout>
    )
}