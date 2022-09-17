<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reported_user');
            $table->unsignedBigInteger('reporter_user');
            $table->unsignedBigInteger('post_id');
            $table->string('issue');
            $table->timestamps();

            $table->foreign('reported_user')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('reporter_user')->references('id')->on('users')->onDelete('cascade');

            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
};
