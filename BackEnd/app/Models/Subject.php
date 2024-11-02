<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'score',
        'user_id',
        'specialty_id',
        'created_at',
        'updated_at',
    ];

    public function doctor()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class, 'specialty_id');
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'user_subjects', 'subject_id', 'user_id')->withTimestamps();
    }
}
