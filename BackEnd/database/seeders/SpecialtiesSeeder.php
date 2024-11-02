<?php

namespace Database\Seeders;

use App\Models\Specialty;
use Illuminate\Database\Seeder;

class SpecialtiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ([
            'علوم الحاسب',
            'تكنولوجيا المعلومات'
        ] as $value)
            Specialty::create([
                'name' => $value,
            ]);
    }
}
