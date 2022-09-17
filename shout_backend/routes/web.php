<?php

use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/user', function () {
//     return view('view');
// });
// Route::get('/post', function () {
//     return view('posts');
Route::get('/', function () {
    return redirect('/user');
});

// Route::get('/', [AdminController::class, 'index']);

Route::get('/delete/{id}', [AdminController::class, 'destroy']);
Route::get('/delete1/{id}', [AdminController::class, 'destroy1']);
Route::get('/delete2/{id}', [AdminController::class, 'destroy2']);
Route::put('/users/{id}', [AdminController::class, 'update']);
Route::get('/post', [AdminController::class, 'index2']);

Route::get('/reports', [ReportController::class, 'index']);
Route::get('/delete/{id}', [ReportController::class, 'destroy']);
Route::resource('user',AdminController::class);
// Route::resource('post',AdminController::class);
// Route::resource('report',AdminController::class);

Route::get('/reports{id}', function () {
    return view('welcome');
});
Route::get('/reports-on-post/{id}', [PostController::class, 'getReports']);

// Route::resource('post', AdminController::class);


Route::get('/users-count', [AdminController::class, 'countUser']);
Route::put('/auth/{id}', [AdminController::class, 'authUser']);
