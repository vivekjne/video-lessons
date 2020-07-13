<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Classroom as ClassroomResource;

class Curricullum extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [

            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'isActive' => $this->isActive,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

            // 'classrooms'=>ClassroomResource::collection($this->classrooms),

            'status' => true


        ];
    }
}
