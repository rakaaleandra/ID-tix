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
        Schema::create('pemesanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(
                table: 'users',
                indexName: 'pemesanans_user_id_foreign'
            )->onDelete('cascade');
            $table->foreignId('schedule_id')->constrained(
                table: 'schedules',
                indexName: 'pemesanans_schedule_id_foreign'
            )->onDelete('cascade');
            $table->string('code_pemesanan')->unique();
            $table->string('bukti_bayar');
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
        Schema::dropIfExists('pemesanans');
    }
};
