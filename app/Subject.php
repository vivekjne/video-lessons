<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    
    public function curricullumClassrooms(){
        return $this->belongsToMany(CurricullumClassroom::class);

    }

    public function lessons(){
        return $this->hasMany(Lesson::class);
    }
}
