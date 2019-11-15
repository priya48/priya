

import { Component } from '@angular/core';
@Component ({

 selector: 'sw', //CSS Selector
 template: `

 <h2> Ng Switch</h2>

 <ul *ngFor = "let sam of same" [ngSwitch]="sam.country">
 <li *ngSwitchCase=" 'USA' " class="text-info"> {{sam.name}} {{sam.age}} </li>
 <li *ngSwitchCase="'Nepal' " class="text-danger"> {{sam.name}} {{sam.age}} </li>
 <li *ngSwitchCase="'Jalandhar'" class="text-warning"> {{sam.name}} {{sam.age}} </li>
 <li *ngSwitchCase="'Amritsar'"> {{sam.name}} {{sam.age}} </li>
 <li *ngSwitchDefault class="text-warning">{{ sam.name }} ({{ sam.country }})
 </ul>
 `
})
export class NswitchComponent{

 same: any[] = [
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

 {
 "name": "Sameer",
 "age":"34",
 "country":"Jalandhar",
 },

 {
 "name": "Arun",
 "age":"50",
 "country":"Amritsar",
 },


 ];

}
