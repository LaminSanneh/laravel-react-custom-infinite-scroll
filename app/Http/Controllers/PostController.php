<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Services\Post\PostService;
use Illuminate\Support\Facades\Input;

class PostController extends Controller
{
    /** @var PostService */
    private $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function index()
    {
        return $this->postService->getAll(Input::get('limit'), Input::get('pageNumber'));
    }
}
