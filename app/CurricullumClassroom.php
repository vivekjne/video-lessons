<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CurricullumClassroom extends Model
{
    //

    protected $fillable = ['classroom_id','curricullum_id'];

    public function subjects(){
        return $this->belongsToMany(Subject::class,'curricullum_classroom_subjects');

    }

   

    public function students(){
        return $this->hasMany(Student::class);

    }
}
