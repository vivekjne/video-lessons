<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
$factory->define(Category::class, function (Faker $faker) {
    return [
        'name'=>$faker->word,
        'description'=>$faker->sentences($nb = 3,$asText=true),
    
        'slug'=>Str::slug($faker->sentence($nbWords = 6, $variableNbWords = true),'-')

    ];
});
