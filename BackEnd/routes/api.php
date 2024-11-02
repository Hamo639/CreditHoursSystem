<?php

use App\Models\Year;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\YearController;
use App\Http\Controllers\Api\ResultController;
use App\Http\Controllers\Api\SeasonController;
use App\Http\Controllers\Api\SubjectController;
use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\SpecialtyController;
use App\Http\Controllers\Api\NotificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Auth
Route::group(['prefix'=>'auth'], function(){
    Route::post('login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::get('logout', [AuthController::class, 'logout']);
    });
});

Route::middleware(['auth:sanctum'])->group(function () {
    // Users
    Route::get('/users/groups/{role}', [UserController::class, 'index']);
    Route::apiResource('users', UserController::class);

    // Seasons
    Route::apiResource('seasons', SeasonController::class);

    // Specialties
    Route::apiResource('specialties', SpecialtyController::class);

    // Subject
    Route::get('/subjects/student/registration', [SubjectController::class, 'RegistrationSubjectsList']);
    Route::get('/subjects/doctor', [SubjectController::class, 'doctor']);
    Route::get('/subjects/{subject_id}/students', [SubjectController::class, 'students']);
    Route::apiResource('subjects', SubjectController::class);
    Route::post('/students/subjects', [SubjectController::class, 'enrollSubject']);
    Route::get('/students/subjects', [SubjectController::class, 'showEnrolledSubjects']);
    Route::get('/students/subjects/years', [SubjectController::class, 'enrolledSubjectsYears']);
    Route::delete('/students/subjects/{subject}', [SubjectController::class, 'removeEnrolledSubject']);

    // Results
    Route::post('/results/submit', [ResultController::class, 'submit']);
    Route::post('/results/{subjectId}', [ResultController::class, 'store']);
    Route::get('/results/{seasonId}/{year}', [ResultController::class, 'show']);

    // Settings
    Route::get('/settings', [SettingsController::class, 'index']);
    Route::put('/settings', [SettingsController::class, 'update']);

    // Notifications
    Route::get('/notifications', [NotificationController::class, 'getNotifications']);

    // Years
    Route::get('/years', [YearController::class, 'index']);
    Route::put('/years', [YearController::class, 'update']);
});
