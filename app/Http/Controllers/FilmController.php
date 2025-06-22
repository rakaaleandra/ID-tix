<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Schedule;
use App\Models\Pemesanan;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Endroid\QrCode\Builder\Builder;
use Carbon\Carbon;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('index',[
            // 'films' => Film::all()
            'films' => Film::where('tayang', true)->get()
        ]);
    }

    public function index2(){
        
        return Inertia::render('soon',[
            'films' => Film::where('tayang', false)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'schedule_id' => 'required',
            'bukti_bayar' => 'required',
            'nomor_kursi' => 'required|array',
            'nomor_kursi.*' => 'string',
            'total_bayar' => 'required'
        ]);

        do {
            $code = Str::random(25);
        } while (Pemesanan::where('code_pemesanan', $code)->exists());

        $user = Auth::user();
        if($request->hasFile('bukti_bayar')){
            $file = $request->file('bukti_bayar');
            $filename = $user->name . '_' . time() . '.' . $file->getClientOriginalExtension();
            $bukti_bayar_path = $file->storeAs('bukti_bayar', $filename, 'public');

            $pemesanan = Pemesanan::create([
                'user_id' => $user->id,
                'schedule_id' => $request->schedule_id,
                // 'code_pemesanan' => 'PM-' . strtoupper(uniqid()),
                'code_pemesanan' => $code,
                'bukti_bayar' => $bukti_bayar_path ?? null,
                'total_bayar' => $request->total_bayar
            ]);
        }

        Ticket::where('schedule_id', $request->schedule_id)
        ->whereIn('nomor_kursi', $request->nomor_kursi)
        ->where('status_booking', false)
        ->update([
            'status_booking' => true,
            'pemesanan_id' => $pemesanan->id,
        ]);

        return redirect()->route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Film $film)
    {
        return Inertia::render('detail_film',[
            // 'film' => Film::find($film),
            'film' => $film
        ]);
    }

    public function show2(Film $film, Request $request){
        $tanggal = $request->query('tanggal');

        // Ambil semua tanggal unik
        // $allDates = $film->schedules()
        //     ->selectRaw('DISTINCT tanggal_tayang')
        //     ->orderBy('tanggal_tayang')
        //     ->pluck('tanggal_tayang')
        //     ->toArray();

        // Jika tidak ada tanggal di query, pakai yang paling awal
        // $currentDate = $tanggal ?? $allDates[0] ?? now()->toDateString();

        // ambil semua tanggal 2 minggu kedepan
        $startDate = Carbon::today();
        // $allDates = [];
        // for ($i = 0; $i < 14; $i++) {
        //     $allDates[] = $startDate->copy()->addDays($i)->toDateString();
        // }

        // Ambil tanggal tayang pertama dari schedules
        $earliestScheduleDate = $film->schedules()
            ->orderBy('tanggal_tayang')
            ->limit(1)
            ->value('tanggal_tayang');

        // Jika tidak ada jadwal, pakai hari ini sebagai fallback
        // $startDate = $earliestScheduleDate ? Carbon::parse($earliestScheduleDate) : Carbon::today();

        // Buat array tanggal selama 14 hari ke depan dari startDate
        $allDates = [];
        for ($i = 0; $i < 15; $i++) {
            $allDates[] = $startDate->copy()->addDays($i)->toDateString();
        }

        $availableDates = $film->schedules()
            ->selectRaw('DISTINCT tanggal_tayang')
            ->whereIn('tanggal_tayang', $allDates)
            ->pluck('tanggal_tayang')
            ->toArray();

        $currentDate = $tanggal ?? $allDates[0];

        $schedules = $film->schedules()
            ->with('theater')
            ->where('tanggal_tayang', $currentDate)
            ->get();

        return Inertia::render('jadwal', [
            'film' => [
                'id' => $film->id,
                'nama_film' => $film->nama_film,
                'slug' => $film->slug,
                'schedules' => $schedules,
            ],
            'allDates' => $allDates,
            'availableDates' => $availableDates,
            'currentDate' => $currentDate,
        ]);
    }

    public function show3(Film $film,Schedule $schedule){
        $seats = Ticket::where('schedule_id', $schedule->id)->get();
        return Inertia::render('pembayaran',[
            'film' => $film,
            'schedule' => $schedule,
            'seats' => $seats
        ]);
    }

    public function show4(){
        $user = Auth::user();
        $pesanans = Pemesanan::with(['schedule.film', 'schedule.theater'])
            ->where('user_id', $user->id)
            ->get();
        return Inertia::render('ticket',[
            'pemesanan' => $pesanans
        ]);
    }


    // return Inertia::render('detail_ticket', [
    //     'pemesanan' => $pemesanan->with(['schedule.film', 'schedule.theater']),
    //     'tickets' => Ticket::where('pemesanan_id', $pemesanan->id)->get()
    // ]);
    public function show5(Pemesanan $pemesanan){
        $pemesanan->load(['schedule.film', 'schedule.theater']);

        $qrCode = QrCode::format('svg')->size(200)->generate($pemesanan->code_pemesanan);
        $qrCodeImage = 'data:image/svg+xml;base64,' . base64_encode($qrCode);
        // $qrCode = Builder::create()
        //     ->data($pemesanan->code_pemesanan)
        //     ->size(200)
        //     ->build();
        // $qrCodeImage = 'data:image/svg+xml;base64,' . base64_encode($qrCode->getString());

        return Inertia::render('detail_ticket', [
            'pemesanan' => $pemesanan,
            'tickets' => Ticket::where('pemesanan_id', $pemesanan->id)->get(),
            'qr' => $qrCodeImage
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
