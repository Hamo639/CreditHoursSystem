<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    public function index($role=null)
    {
        if($role)
            $users = User::role($role)->get();
        else
          $users = User::get();

        return UserResource::collection($users);
    }

    public function store(UserStoreRequest $request)
    {
        $user = User::create([
            'name'              => $request->name,
            'email'             => $request->email,
            'national_id'       => $request->national_id,
            'password'          => $request->password,
            'blocked'           => $request->blocked ?? false,
            'specialty_id'      => $request->specialty_id ?? null,
            'year_id'           => 1,
            'email_verified_at' => now()
        ]);

        $user->assignRole($request->role);

        return $this->success('تم الإضافة بنجاح.', new UserResource($user));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function update(UserUpdateRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->validated());

        return $this->success('تم التحديث بنجاح.', new UserResource($user));
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->forceDelete();

        return $this->success('تم الحذف بنجاح.');
    }
}
