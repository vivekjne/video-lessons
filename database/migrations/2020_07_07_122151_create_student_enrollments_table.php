<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentEnrollmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_enrollments', function (Blueprint $table) {
            $table->id();
         

            $table->foreignId('curricullum_classroom_subject_id')->constrained('curricullum_classroom_subjects')->onDelete('cascade');
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade');
            $table->boolean('isActive')->default(false);
            $table->timestamps();
        });

        DB::update("ALTER TABLE student_enrollments AUTO_INCREMENT = 1000;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_enrollments');
    }
}
