
import {CoursesServices} from './courses.services';
import {Component} from '@angular/core';
@Component({

selector:'dir',
template:`

<ul>
<li *ngFor="let course of courses">
{{course}}
</li>
</ul>

`

})

export class DirComponent{
//courses=["HTML","CSS","PHP","AJS"];
courses;
constructor(service:CoursesServices ){//dependency innjetion
  this.courses=service.getcourses();
}


}
