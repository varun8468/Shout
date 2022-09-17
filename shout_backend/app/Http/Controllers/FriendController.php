<?php

namespace App\Http\Controllers;

use App\Models\FriendUser;
use Illuminate\Http\Request;
use App\Models\User;
class FriendController extends Controller
{
    public function index()
    {
        return FriendUser::all();
    }

    /**
     * Store newly created resource in storage
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @param \Illuminate\Http\Response
     */

    public function store(Request $request, User $user)
    {
        // auth()->user()->add_friend($user->id);
        // dd('1');
    }


    public function destroy($id)
    {
        return FriendUser::where('friend_id',$id)->delete();
    }
    public function show($id)
    {
        return FriendUser::find($id);
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
        $friend = FriendUser::find($id);
        $friend->update($request->all());
        return $friend;
    }


    // search for a name
    public function search($name){
        return FriendUser::where('name', 'like', '%'.$name.'%')->get();
    }

    // public function getFriends(){
    //     $user->friends()->get();
    //     return $user;
    // }

}
