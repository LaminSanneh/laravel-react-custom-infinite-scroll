<?php

use Faker\Generator as Faker;

$range = range(4, 10);
$range2 = range(10, 20);
$factory->define(App\Models\Post::class, function (Faker $faker) use($range, $range2) {
    $titleNumberOfWords = $range[array_rand($range)];
    $bodyNumberOfWords = $range2[array_rand($range2)];

    return [
        'title' => $faker->sentence($titleNumberOfWords),
        'body' => $faker->sentence($bodyNumberOfWords)
    ];
});
