<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Post;
use App\Models\FriendUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }
    public function otherUsers($id)
    {
        return User::all()->except($id);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
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
        $user = User::find($id);
        $user->update($request->all());
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::destroy($id);
    }

    // search for a name
    public function search($name){
        return User::where('name', 'like', '%'.$name.'%')->get();
    }

    public function getPostsByUser($id){
        return User::find($id)->getPosts;
    }

    public function getFriendsByUser($id){
        return User::find($id)->getFriends;
        // $users =DB::table('users')
        // ->join('friends','friends.friend_id', '=', 'user.user_id')
        // ->where('user_id',$id)
        // ->where('friends.status', -> '1')
        // ->get();
    //     $posts = DB::table('posts')
    //     ->join('friends', 'friends.friend_id', '=', 'posts.user_id')
    //     ->join('users', 'friends.user_id', '=', 'users.id')
    //     ->where('users.id', '=', $id)
    //     ->get();

    // return $posts;
    }
    // friends



    public function getFriendsPosts($id){
        $friends = User::find($id)->friends;
        $user_friends_id = $friends->pluck('friend_id')->toArray();


        // $posts= User::find($id)->posts;

        //$user_id = $posts->pluck('user_id')->toArray();

        $posts = Post::whereIn('user_id',$user_friends_id)->get();
        $user_id = $posts->pluck('user_id')->toArray();
        // $user_id = $posts->pluck('user_id')->toArray();

        $usersDetails = DB::table('users')
        ->join('posts', 'users.id', '=', 'posts.user_id')// joining the contacts table , where user_id and contact_user_id are same
        ->select('users.name', 'users.city','users.dob','users.gender','posts.id','posts.user_id','posts.description','posts.image','posts.created_at')
        ->whereIn('posts.user_id', $user_id)
        ->get();
         return $usersDetails;



    }

    public function addFriend(Request $request){
        $user_id = $request->user_id;
        $friend_id = $request->friend_id;

        return FriendUser::create([
            'user_id' => $user_id,
            'friend_id' => $friend_id
        ]);

    }

    public function getFriendRequets($id){
        // return FriendUser::all()->where('friend_id', $id);
        $usersDetails = DB::table('users')
            ->join('friend_user', 'users.id', '=', 'friend_user.user_id')// joining the contacts table , where user_id and contact_user_id are same
            ->select('users.name', 'users.city','users.dob','users.gender', 'friend_user.status', 'friend_user.id', 'friend_user.user_id', 'friend_user.friend_id')
            ->where('friend_id', $id)
            ->get();

        return $usersDetails;
    }

    // public function getUserPosts($id){
    //     // return FriendUser::all()->where('friend_id', $id);
    //     $usersDetails = DB::table('users')
    //         ->join('posts', 'users.id', '=', 'posts.user_id')// joining the contacts table , where user_id and contact_user_id are same
    //         ->select('users.name', 'users.city','users.dob','users.gender', 'posts.*')
    //         ->where('users.id', $id)
    //         ->get();

    //     return $usersDetails;
    // }

    public function getAllFriendRequets(){
        return FriendUser::all();
    }

    public function deleteFromFriends($id)
    {
        return FriendUser::where('user_id',$id)->delete();;
    }

    public function acceptRequest($id, Request $request){
        // DB::table('friend_user')
        // ->where('id', $id)
        // ->update([
        //     'status'     => 1
        // ]);

        $friendUser = FriendUser::find($id);
        $friendUser->update($request->all());
        return $friendUser;
    }
}
