<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Rawilk\Settings\Facades\Settings;

class SettingsController extends Controller
{
    public function index()
    {
        return $this->ok([
            'current_season_id' => settings()->get('current_season_id'),
            'enroll_subjects' => settings()->get('enroll_subjects'),
            'update_results' => settings()->get('update_results'),
            'enroll_subjects_count' => settings()->get('enroll_subjects_count'),
        ]);
    }

    public function update(Request $request)
    {
        settings()->set('current_season_id', $request->current_season_id);
        settings()->set('enroll_subjects', $request->enroll_subjects);
        settings()->set('update_results', $request->update_results);
        settings()->set('enroll_subjects_count', $request->enroll_subjects_count);
    }
}
