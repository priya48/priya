
import { Component} from '@angular/core';
@Component({

selector:"pipe",
template:`

<h3> Pipes concept </h3>
{{details.title | uppercase}}<br/>
{{details.rating|number:'1.2-2'}}<br/>
{{details.student|number}}<br/>
{{details.fees|currency}}<br/>
{{details.subjectDate|date :'shortDate'}}<br/>
{{details.subjectDate| date :'fullDate'}}<br/>
{{details.subjectDate|date : 'mediumDate'}}<br/>
<h4> Coustome pipes</h4>
{{text|short:7}}
`
})

export class PipeComponent{
details={

  title:"Angular JS",
  rating:6.3554,
  students:35157,
  fees:3000,
  subjectDate:new Date (2019,9,10)


}
text ="Hi Everyone !!!! you are learning Angular ...Hope u r enjoying ";
}
