<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\LoginRequest;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('national_id', $request->national_id)->first();

        if(!$user)
            return $this->error('الرقم القومي غير مسجل لدينا.');

        if(!Hash::check($request->password, $user->password))
            return $this->error('كلمة السر خطأ.');

        $token = $user->createToken('auth')->plainTextToken;

        return $this->success('تم تسجيل الدخول بنجاح.', [
            'user' => new UserResource($user),
            'role' => $user->getRoleNames()->first(),
            'token' => $token,
        ]);
    }

    public function me()
    {
        $user = auth()->user();

        return $this->success('بيانات المستخدم.', [
            'user' => new UserResource($user)
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return $this->success('تم تسجيل الخروج بنجاح.');
    }
}
