<?php

namespace App\Http\Controllers\Api;

use App\Models\Season;
use App\Http\Controllers\Controller;
use App\Http\Resources\SeasonResource;
use App\Http\Requests\SeasonRequest;

class SeasonController extends Controller
{
    public function index()
    {
        $seasons = Season::all();

        return SeasonResource::collection($seasons);
    }

    public function show(Season $season)
    {
        return new SeasonResource($season);
    }

    public function store(SeasonRequest $request)
    {
        $season = Season::create($request->all());

        return new SeasonResource($season);
    }

    public function update(SeasonRequest $request, Season $season)
    {
        $season->update($request->all());

        return new SeasonResource($season);
    }

    public function destroy(Season $season)
    {
        $season->delete();

        return response()->json(['message' => 'تم الحذف بنجاح.']);
    }
}
