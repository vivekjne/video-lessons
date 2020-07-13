<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('curricullum_id')->constrained();
            $table->foreignId('classroom_id')->constrained();
            $table->string('name', 255);
            $table->string('display_name', 255);
            $table->string('slug');
            $table->string('thumbnail')->default('https://via.placeholder.com/300');
            $table->string('short_description', 200)->nullable();
            $table->text('description')->nullable();
            $table->boolean('isActive')->default(true);
            $table->softDeletes('deleted_at', 0);
            $table->string('preview_url', 255)->nullable();
            $table->text('meta_tags')->nullable();
            $table->text('meta_description')->nullable();
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
        Schema::dropIfExists('subjects');
    }
}
