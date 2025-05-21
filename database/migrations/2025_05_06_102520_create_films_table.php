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
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->string('nama_film');
            $table->string('slug')->unique();
            $table->string('poster_film');
            $table->integer('durasi_film');
            $table->string('sutradara_film');
            $table->string('genre_film');
            $table->string('produser');
            $table->string('produksi');
            $table->string('casts');
            $table->text('sinopsis');
            $table->boolean('tayang')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('films');
    }
};
