<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ([
            'superadmin',
            'student',
            'doctor',
            'employee',
            'professor',
            'supervisor',
            'employee',
        ] as $role) {
            Role::firstOrCreate([
                'name' => $role,
            ],[
                'name' => $role,
            ]);
        }
    }
}
