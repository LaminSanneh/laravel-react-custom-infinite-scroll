<?php

namespace App\Services\Post;

use App\Models\Post;

class PostService {

    /**
     * @param integer $limit
     * @return Post[]
     */
    public function getAll ($limit, $pageNumber)
    {
        return Post
            ::offset(($pageNumber - 1) * $limit)
            ->limit($limit)
            ->get();
    }
}
