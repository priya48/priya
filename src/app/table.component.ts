import { Component } from '@angular/core';
@Component ({

 selector: 'exam', //CSS Selector
 template: `
 <h2> Student data </h2>
 <table border="1">

 <tr>
 <th>Student Reg N0</th>
 <th>Student Name </th>
 <th>Student Attendence</th>
 </tr>

<tr *ngFor="let student of students"[ngStyle]="{'color':student.attend>75?'green':'red'}">
<td>{{student.reg}}</td>
<td>{{student.name}}</td>
<td>{{student.attend}}</td>
</tr>

 </table>
 `
})
export class ExComponent {

 students: any[]=[
 {
   "reg":"11705847",
   "name":"Priya",
   "attend":88,
 },

 {
   "reg":"11705946",
   "name":"Ram",
   "attend":80,
 },

 {
   "reg":"11702356",
   "name":"Sneha",
   "attend":90,
 },

 {
   "reg":"11705847",
   "name":"Surjeet",
   "attend":70,
 },

 {
   "reg":"11705847",
   "name":"Tushar",
   "attend":70,
 },


 ];


}
