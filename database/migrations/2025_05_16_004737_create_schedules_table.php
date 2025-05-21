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
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('film_id')->constrained(
                table: 'films',
                indexName: 'schedules_film_id_foreign'
            );
            $table->foreignId('theater_id')->constrained(
                table: 'theaters',
                indexName: 'schedules_theater_id_foreign'
            );
            $table->date('tanggal_tayang');
            $table->time('jam_tayang');
            $table->integer('harga_tiket');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
