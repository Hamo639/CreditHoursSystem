<?php

namespace Database\Seeders;

use App\Models\Year;
use Illuminate\Database\Seeder;

class YearsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Year::create([
            'id' => 1,
            'name' => 'السنة الأولي',
            'min_hours' => 90,
            'hours' => 100,
        ]);
        Year::create([
            'id' => 2,
            'name' => 'السنة الثانية',
            'min_hours' => 90*2,
            'hours' => 100*2,
        ]);
        Year::create([
            'id' => 3,
            'name' => 'السنة الثالثة',
            'min_hours' => 90*3,
            'hours' => 100*3,
        ]);
        Year::create([
            'id' => 4,
            'name' => 'السنة الرابعة',
            'min_hours' => 100*4,
            'hours' => 100*4,
        ]);
    }
}
