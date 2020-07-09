<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    public function curricullumClassrooms(){
        return $this->belongsTo(CurricullumClassroom::class);

    }

    public function classrooms(){
        return $this->belongsTo(curricullumClassroom::class);
    }

    public function enrollments(){
        return $this->hasMany(StudentEnrollment::class);
    }

    public function lessons(){
        return $this->hasMany(StudentLessons::class);
    }
}
