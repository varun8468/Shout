<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PhotoController extends Controller
{
    //
    public function index($image)
    {
        return Post::all($image);
    }
    public function store(Request $request){
       $name = $request->file('image')->getClientOriginalExtension(); // getting i
       $request->file('image')->move('public/images/',$name);
       $image = new Post();
       $image->save();
    }
    
    
    }

