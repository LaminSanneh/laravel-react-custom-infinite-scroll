<?php

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (Post::count() === 0) {
            factory(Post::class, 80)->create();
        }
    }
}
