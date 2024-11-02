<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        settings()->set('current_season_id', null);
        settings()->set('enroll_subjects', true);
        settings()->set('enroll_subjects_count', 5);
        settings()->set('update_results', true);
    }
}
