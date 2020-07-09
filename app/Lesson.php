<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    //

    public function curricullumClassroomSubjects(){
        return $this->belongsTo(CurricullumClassroomSubject::class);
    }
}
