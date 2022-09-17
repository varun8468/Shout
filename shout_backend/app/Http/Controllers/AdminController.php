<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use App\Models\Report;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{


     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $userCount = User::count();
        $users = User::all();
        $posts = Post::all();
        $reportCount = Report::count();
        $postCount = Post::count();
        return view('admin1', compact('users','posts', 'userCount', 'postCount','reportCount'));

    }
    public function index2()
    {
        $userCount = User::count();
        $reportCount = Report::count();
        $posts = DB::table('posts')
        ->join('users', 'posts.user_id', '=', 'users.id')// joining the contacts table , where user_id and contact_user_id are same
        ->select('users.name', 'posts.id','posts.description', 'posts.created_at')
        ->get();
        $postCount = Post::count();
        return view('post', compact('posts', 'userCount', 'postCount','reportCount'));

    }
    // public function index3()
    // {
    //     $userCount = User::count();
    
    //     $reports = Report::all();
    //     $postCount = Post::count();
    //     return view('report', compact('reports', 'userCount', 'postCount'));

    // }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::delete('delete from users where id = ?',[$id]);
        return redirect('/user');
    }

    public function destroy1($id)
    {
        DB::delete('delete from posts where id = ?',[$id]);
        return redirect('/post');
    }

    public function destroy2($id)
    {
        DB::delete('delete from reports where id = ?',[$id]);
        return redirect('/report');
    }

    public function update(Request $request, $id)
    {

       DB::table('users')->where('id',$id)
        ->update(['authenticated' => 1 ]);

        return redirect('/user');

    }




}
