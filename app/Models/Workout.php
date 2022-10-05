<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'load',
        'reps'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
