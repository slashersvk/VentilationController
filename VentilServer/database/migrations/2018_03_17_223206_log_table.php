<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class LogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id');
            //teploty
            $table->string('gInputAI_1_Sup');
            $table->string('gInputAI_2_Exh');
            $table->string('gInputAI_2_Room');
            //spotreba motorov
            $table->string('sensor_motor_1');
            $table->string('sensor_motor_2');
            //vlhkost
            $table->string('sensor_moisture');
    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logs');
    }
}
