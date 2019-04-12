<?php

namespace App\Services\Post;

use App\Models\Post;

class PostService {

    /**
     * @param integer $limit
     * @return Post[]
     */
    public function getAll ($limit = 10)
    {
        return Post::limit($limit)->get();
    }
}
