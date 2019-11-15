import {Component} from "@angular/core";

@Component ({

selector:"pra",
template:`

<h1> Ng Directives </h1>

<ul *ngFor="let tst of test">
<li [ngClass]="{'text-info':tst.country == 'india', 'text-danger':tst.country == 'Delhi'}">
{{tst.name}}
{{tst.age}}
{{tst.country}}
</li>


<li [ngStyle]="{'background-color' :tst.age>20 ? 'Green' : 'red','color':'yellow'}">
{{tst.name}}
{{tst.age}}
{{tst.country}}
</li>
</ul>

<ul *ngFor="let tst of test">
<li *ngIf="tst.age>20">
{{tst.name}}
{{tst.age}}
{{tst.country}}
</li>
</ul>

<ul *ngFor="let tst of test">
<li>
{{tst.name}}
{{tst.age}}
{{tst.country}}
</li>
</ul>



`



})

export class PracticeComponent{

  test: any[] = [


    {

      "name":"Priya",
      "age":"19",
      "country":"india"
    },


        {

          "name":"Sneha",
          "age":"23",
          "country":"Delhi"
        },


            {

              "name":"Gurleen",
              "age":"20",
              "country":"Mearth"
            },


                {

                  "name":"Surjeet",
                  "age":"22",
                  "country":"Ludhaina"
                }

  ];



}
