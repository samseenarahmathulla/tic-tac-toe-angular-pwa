import { Component, OnInit, Input } from '@angular/core';
// OnInit is a life cycle hook which allows you to run some code when the component is first initialized
// @Component is the component decorator (typescript decorators)
@Component({
  selector: 'app-square', //component name
  template: `
   <!-- <p>
        SQUARE COMPONENT - square works! {{ rando }}
      </p> -->
      <button nbButton *ngIf="!value"> {{ value }} </button>
      <button nbButton hero status="success" *ngIf="value == 'X'"> {{ value }} </button>
      <button nbButton hero status="info" *ngIf="value == 'O'"> {{ value }} </button>

    <!-- <button> Value is: {{ value }} </button> -->
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
// export class SquareComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   rando = Math.random();
// }
export class SquareComponent  {
  constructor() {
    //setInterval(() => this.rando = Math.random(), 1000);
  }
  @Input() value: 'X' | 'O';
}
