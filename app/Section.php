<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
