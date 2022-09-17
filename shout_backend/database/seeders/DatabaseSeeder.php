<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Akshay",
            'email' => 'akshay@gmail.com',
            'dob' => '1997-01-01',
            'password' => 'varun1234',
            'gender' => 'male',
            'phone' => '5654757565',
            'city' => 'Nagpur'
        ]);
    }
}
