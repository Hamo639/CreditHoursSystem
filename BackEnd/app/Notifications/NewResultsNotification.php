<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class NewResultsNotification extends Notification
{
    use Queueable;

    public $teacherName;
    public $subjectName;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($teacherName, $subjectName)
    {
        $this->teacherName = $teacherName;
        $this->subjectName = $subjectName;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
            'message' => "قام د.".$this->teacherName." بتحديث نتائج مادة ".$this->subjectName,
        ];
    }
}
