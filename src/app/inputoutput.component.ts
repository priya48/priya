import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component ({

selector:'inPutoutPut',
template:`<p (click)="onClick.emit('Second String')"> This is the Input Output Component.

I receved a sting '{{InputString}}' from the app component .
Click me...!!!</p>
`

})

export class InputOutputComponent
{

  @Input() InputString:string;

  @Output() onClick = new EventEmitter()

}
