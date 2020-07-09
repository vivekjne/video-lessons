<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Course;
use Faker\Generator as Faker;

$factory->define(Course::class, function (Faker $faker) {
    return [
        'name'=>$faker->word,
        'description'=>$faker->sentences($nb = 3,$asText=true),
    
        'slug'=>Str::slug($faker->sentence($nbWords = 6, $variableNbWords = true),'-'),
        'category_id'=>factory(App\Category::class)
    ];
});
