
import { Component } from '@angular/core';
@Component ({

 selector: 'direc', //CSS Selector
 template: `
 <ul>
 <li *ngFor="let person of details [ngclass]={'text-success':true}">
 {{person.name}} {{person.age}} {{person.country}}
 </li>
 </ul>

 <ul>
 <li *ngFor="let person of details" [ngStyle]="{'background-color' :person.age>30 ? 'Green' : 'red'}">
 {{person.name}}<br/> {{person.age}} <br/> {{person.country}}
 </li>
 </ul>
 `
})
export class DemoComponent{

 details: any[] = [
 {
 "name": "Ram",
 "age":"30",
 "country":"USA",
 },

 {
 "name": "Sam",
 "age":"33",
 "country":"Nepal",
 },


 ];

}
