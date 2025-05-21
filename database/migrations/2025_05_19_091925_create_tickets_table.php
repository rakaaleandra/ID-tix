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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('schedule_id')->constrained(
                table: 'schedules',
                indexName: 'tickets_schedule_id_foreign'
            );
            $table->foreignId('pemesanan_id')->constrained(
                table: 'pemesanans',
                indexName: 'tickets_pemesanan_id_foreign'
            )->nullable();
            $table->boolean('status_booking')->default(false);
            $table->string('nomor_kursi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
