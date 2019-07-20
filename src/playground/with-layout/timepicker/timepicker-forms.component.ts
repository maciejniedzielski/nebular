import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-timepicker-forms',
  template: `
    <nb-card>
      <nb-card-body>
        <input nbInput type="text">
      </nb-card-body>
    </nb-card>
  `,
  styleUrls: ['./timepicker-example.scss'],
})
export class TimepickerFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
