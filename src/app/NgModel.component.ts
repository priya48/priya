
import { Component } from '@angular/core';
@Component ({

 selector: 'shift', //CSS Selector
 template: `

 <h2> NG Model Example </h2>
 Keep on check<input type="checkbox" ng-Model="myvar">

 <div ng-if="myvar">
 <p> Welcome to new concept</p>
 </div>
 `
})
export class NModelComponent{


}
