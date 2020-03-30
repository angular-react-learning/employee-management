import { Directive, Input} from '@angular/core';

@Directive({
  selector: '[alert]',
  host : {
    '(click)' : 'onClick()'
  }
})
export class AlertDirective {


  @Input("alert") text : String 

  onClick()
    {
      alert(this.text);
    }

  constructor() { }

}
