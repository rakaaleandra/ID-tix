<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('apppemesanans', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->integer('filmId');
            $table->string('namaFilm');
            $table->integer('filmPoster');
            $table->string('namaBioskop');
            $table->string('jadwalTayang');
            $table->string('kursi');
            $table->integer('jumlahKursi');
            $table->string('tanggalPemesanan');
            $table->enum('statusPemesanan', ['berhasil', 'gagal', 'masalah', 'null'])->default('null');
            $table->string('feedback')->nullable();
            $table->integer('totalBayar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apppemesanans');
    }
};
