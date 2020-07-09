<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurricullumClassroomSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curricullum_classroom_subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('curricullum_classroom_id')->constrained('curricullum_classrooms')->onDelete('cascade');
            $table->foreignId('subject_id')->constrained('subjects')->onDelete('cascade');
            $table->string('short_description',200);
            $table->text('description',200);
            $table->string('name')->nullable();
            $table->boolean('isActive')->default(false);

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
        Schema::dropIfExists('curricullum_classroom_subjects');
    }
}
