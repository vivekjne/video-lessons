<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Curricullum as CurricullumResource;

class Classroom extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'isActive' => $this->isActive,
            // 'curricullums'=>CurricullumResource::collection($this->curricullums),
            'status' => true


        ];
    }
}
