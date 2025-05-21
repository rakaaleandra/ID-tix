import AppLayout from "@/layouts/app/main-layout";

export default function Pembayaran({film, schedule}:any){
    console.log(film,schedule)
    return(
        <AppLayout>
            <main className="w-full flex justify-center p-8">
                <div className="w-7xl">
                    <h1>{film.nama_film}</h1>
                    <h1>{schedule.tanggal_tayang}</h1>
                    <h1>{schedule.jam_tayang}</h1>
                    <form action="">
                        <input type="image" src="" alt="" />
                        <button className="bg-amber-800 px-5 py-3 rounded-xl hover:bg-white hover:text-black" type="submit">bayar</button>
                    </form>
                </div>
            </main>
        </AppLayout>
    )
}