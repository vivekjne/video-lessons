<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    public function curricullums()
    {
        return $this->belongsToMany(Curricullum::class, 'classroom_curricullums');
    }
}
