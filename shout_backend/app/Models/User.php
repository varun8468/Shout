<?php

namespace App\Models;

use App\Models\Presenters\UserPresenter;
use App\Models\Traits\HasHashedMediaTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $fillable = [
        'name',
        'email',
        'dob',
        'password',
        'gender',
        'city',
        'authenticated'
    ];



    public function getPosts(){
        return $this->hasMany('App\Models\Post');
    }

    // public function friends(){
    //     return $this->belongsToMany('App\Models\User',table: 'friends', foreignPivotKey: 'user_id', relatedPivotKey: 'friend_id');
    // }

    public function friends(){
        return $this->hasMany(FriendUser::class);
    }



}


