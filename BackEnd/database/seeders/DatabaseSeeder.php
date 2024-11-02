<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
            SpecialtiesSeeder::class,
            SeasonsSeeder::class,
            YearsSeeder::class,
            SettingsSeeder::class,
        ]);
    }
}
