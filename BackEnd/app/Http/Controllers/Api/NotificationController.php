<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Get the notifications for the authenticated user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getNotifications()
    {
        $notifications = auth()->user()->notifications;

        $formattedNotifications = $notifications->map(function ($notification) {
            return [
                'message' => $notification->data['message'],
            ];
        });

        return response()->json($formattedNotifications);
    }
}
