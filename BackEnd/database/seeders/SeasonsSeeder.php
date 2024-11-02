<?php

namespace Database\Seeders;

use App\Models\Season;
use Illuminate\Database\Seeder;

class SeasonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Season::create([
            'id'   => 1,
            'name' => 'التيرم الأول',
        ]);

        Season::create([
            'id'   => 2,
            'name' => 'التيرم الثاني',
        ]);
    }
}
