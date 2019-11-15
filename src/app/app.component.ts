import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  fs='First String'
  result=''

  upCase(st:string):void {
    this.result="This is app component. I received a string '"+st
    +"'from the InputOutput component"+"and i Capitalize it here"+st.toUpperCase()

  }
}
