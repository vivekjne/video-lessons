<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curricullum extends Model
{
    
    public function classrooms(){
        return $this->belongsToMany(Classroom::class);

    }
}
