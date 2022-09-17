<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Dotenv\Validator;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\PostDec;

class PostController extends Controller
{
    //
    public function index()
    {
        return Post::all();
    }
    public function create(){
        $photos = Post::all();
        return view('view',compact('photos'));
    }
    public function store(Request $request)
    {
        $image =time() . "_" . $request->file('image')->getClientOriginalName();
        $request->file('image')->move('public/images/',$image);
        $photo = new Post();
        $photo->user_id=$request->user_id;
        $photo->description=$request->description;
        $photo->image=$image;
        $photo->save();
        return response()->json([
            "successs"=>true,
            "message"=>"file uploaded",
            "image"=>$image
        ]);
        return Post::create($request->all());
       return $name;

            // $post = new Post;
            // if($request->hasFile('image')){
            //     $completeFileName = $request->file('image')->getClientOriginalName();
            //     $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
            //     $extension = $request->file('image')->getClientOriginalExtension();
            //     $compPic = str_replace(' ', '_', $fileNameOnly).'-'.rand() . '_'.time(). '.'.$extension;
            //     $path = $request->file('image')->storeAs('public/images', $compPic);
            // }
    }



    public function destroy($id)
    {
        return Post::destroy($id);
    }
    public function show($id)
    {
        return Post::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->update($request->all());
        return $post;
    }

    // search for a name
    public function search($name){
        return Post::where('name', 'like', '%'.$name.'%')->get();
    }
    public function getImages($id){
        $path='/home/varunpa/major_project/shout_backend/public/public/images/';
        // $post = DB::table('posts')
        // ->select('image','description')
        // ->get();
        //return $post;
        $post = Post::find($id);
        $image=$post->image;
        return response()->download($path.$image);

    }

    public function getReports($id){
        return Post::find($id)->reports->get();
    }





}
