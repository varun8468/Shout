<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    // const CREATED_AT = "created_at";
    // public $timestamps = false;
    protected $fillable = [
        'image',
        'user_id',
        'description'

    ];
    public function reports(){
        return $this->hasMany(Report::class);
    }
    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
