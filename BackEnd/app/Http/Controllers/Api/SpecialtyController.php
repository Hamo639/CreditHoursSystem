<?php

namespace App\Http\Controllers\Api;

use App\Models\Specialty;
use App\Http\Controllers\Controller;
use App\Http\Resources\SpecialtyResource;
use App\Http\Requests\SpecialtyRequest;

class SpecialtyController extends Controller
{
    public function index()
    {
        $specialties = Specialty::all();

        return SpecialtyResource::collection($specialties);
    }

    public function show(Specialty $specialty)
    {
        return new SpecialtyResource($specialty);
    }

    public function store(SpecialtyRequest $request)
    {
        $specialty = Specialty::create($request->validated());

        return new SpecialtyResource($specialty);
    }

    public function update(SpecialtyRequest $request, Specialty $specialty)
    {
        $specialty->update($request->validated());

        return new SpecialtyResource($specialty);
    }

    public function destroy(Specialty $specialty)
    {
        $specialty->delete();

        return response()->json(['message' => 'تم الحذف بنجاح.']);
    }
}
