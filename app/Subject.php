<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    //

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function curricullum()
    {
        return $this->belongsTo(Curricullum::class);
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
