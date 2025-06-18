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
            $table->string('nama_film');
            $table->string('nama_bioskop');
            $table->string('jadwal_tayang');
            $table->string('kursi');
            $table->integer('jumlah_kursi');
            $table->string('tanggal_pemesanan');
            $table->enum('status_pemesanan', ['berhasil', 'gagal', 'masalah', 'null'])->default('null');
            $table->string('feedback')->nullable();
            $table->integer('total_bayar');
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
