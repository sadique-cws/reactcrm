<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   
    public function index()
    {
        return Category::all();
    }

   
   
    public function store(Request $request)
    {
        $cat = new Category();
        $cat->cat_title = $request->cat_title;
        $cat->cat_description = $request->cat_description;
        $cat->save();
        return ['response' => 'data inserted successfully'];
    }

   
    public function show(Category $category)
    {
        ['category' => $category];
    }

   
    public function update(Request $request, Category $cat)
    {
        $cat->cat_title = $request->cat_title;
        $cat->cat_description = $request->cat_description;
        $cat->save();
        return ['response' => 'data updated successfully'];
    }

  
    public function destroy(Category $category)
    {
        $data = $category;
        $data->delete();
        return ['response' => 'data deleted successfully'];
    }
}
