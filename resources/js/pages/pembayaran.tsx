import AppLayout from "@/layouts/app/main-layout";
import { useForm } from "@inertiajs/react";

export default function Pembayaran({film, schedule}:any){
    const { data, setData, post, progress } = useForm({
        body: "",
        bukti_bayar: "",
        schedule_id: ""
    });

    function submit(e : any){
        e.preventDefault();
        post(route('pembayaran.store'));
    }

    // console.log(film,schedule)
    console.log(useForm())
    return(
        <AppLayout>
            <main className="w-full flex justify-center p-8">
                <div className="w-7xl">
                    <h1>{film.nama_film}</h1>
                    <h1>{schedule.tanggal_tayang}</h1>
                    <h1>{schedule.jam_tayang}</h1>
                    <form action="" onSubmit={submit}>
                        {/* <textarea name="" id="" value={data.body} onChange={(e) => setData('body', e.target.value)}></textarea> */}
                        <input type="file" onChange={e => setData('bukti_bayar', e.target.value)} src="" alt="" />
                        <input type="hidden" value={schedule.id} onChange={(e) => setData('schedule_id', e.target.value)} src="" alt="" />
                        <button className="bg-amber-800 px-5 py-3 rounded-xl hover:bg-white hover:text-black" type="submit">bayar</button>
                    </form>
                </div>
            </main>
        </AppLayout>
    )
}