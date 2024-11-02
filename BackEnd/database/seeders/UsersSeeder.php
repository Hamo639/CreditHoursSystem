<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::firstOrCreate([
            'email'       => 'superadmin@email.com',
            'national_id' => '123456789'
        ],[
            'name'              => 'Super Admin',
            'email'             => 'superadmin@email.com',
            'national_id'       => '123456789',
            'password'          => 'password',
            'email_verified_at' => now()
        ]);

        $user->assignRole('superadmin');
    }
}
