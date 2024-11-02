<?php

namespace App\Http\Controllers\Api;

use App\Models\Year;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\YearResource;

class YearController extends Controller
{
    public function index()
    {
        $years = Year::get();

        return response()->json(YearResource::collection($years), 200);
    }

    public function update(Request $request)
    {
        $years = json_decode($request->years, true);
        foreach ($years as $year) {
            $record = Year::find($year['id']);

            $record->update([
                'min_hours' => $year['min_hours'],
                'hours' => $year['hours'],
            ]);
        }
    }
}
