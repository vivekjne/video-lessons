<?php

use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i=0;$i<5;$i++){
            factory(App\Course::class,3)->create(['category_id'=>rand(1,15)]);

        }
       


    }
}
