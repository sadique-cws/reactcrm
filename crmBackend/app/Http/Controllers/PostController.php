<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
   
    public function index()
    {
        return Post::with('category')->get();
    }

    public function store(Request $request)
    {
        $p = new Post();
        $p->title = $request->title;
        $p->author = $request->author;
        $p->content = $request->content;
        $p->category_id = $request->category_id;
        $p->image = $request->image->store('public/image');
        $p->save();
        return ['msg'=>"data inserted successfully"];
    }
    public function show(Post $post)
    {
        return $post;
    }   
    
    public function update(Request $request, Post $post)
    {
        $p = $post;
        $p->title = $request->title;
        $p->author = $request->author;
        $p->content = $request->content;
        $p->category_id = $request->category_id;
        $p->save();
        return ['msg'=>"record updated successfully"];
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return ['msg'=>"data deleted successfully"];
    }
}
