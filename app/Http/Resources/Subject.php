<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Classroom as ClassroomResource;
use App\Http\Resources\Curricullum as CurricullumResource;
use App\Http\Resources\SectionCollection as SectionResource;

use App\Classroom;
use App\Curricullum;
use App\Section;


class Subject extends JsonResource
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
            'display_name' => $this->display_name,

            'slug' => $this->slug,
            'isActive' => $this->isActive,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            "thumbnail" =>  $this->thumbnail,
            "short_description" => $this->short_description,
            "description" => $this->description,
            'classroom' => new ClassroomResource(Classroom::find($this->classroom_id)->first()),
            'curricullum' => new CurricullumResource(Curricullum::find($this->curricullum_id)->first()),
            'sections' => new SectionResource(Section::where('subject_id', $this->id)->orderBy('order')->with('lessons')->get()),


            // 'curricullum' => new CurricullumResource($this->curricullum_id),
            "preview_url" => $this->preview_url,
            "meta_tags" => $this->meta_tags,
            "meta_description" => $this->meta_description,


        ];
    }
}
