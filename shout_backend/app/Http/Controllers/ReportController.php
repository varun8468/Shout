<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Post;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    public function index()
    {
        $userCount = User::count();
        $postCount = Post::count();
        $reportCount = Report::count();
        $reports = DB::table('reports')
        ->join('users', 'reports.reporter_user', '=', 'users.id')// joining the contacts table , where user_id and contact_user_id are same
        ->select('users.name', 'reports.id','reports.issue', 'reports.reported_user', 'reports.post_id')
        ->get();
         return view('report', compact('reports','userCount','postCount','reportCount'));
    }

    public function destroy($id)
    {
        DB::delete('delete from reports where id = ?',[$id]);
        return redirect('/reports');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Report::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Report::find($id);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    
}
