import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nb-timepicker-forms',
  template: `
    <nb-card>
      <nb-card-body>
        <!--[formControl]="formControl"-->
        <input nbInput placeholder="Pick Time" [nbTimepicker]="formcontrol">
        <nb-timepicker #formcontrol></nb-timepicker>
        <!--<nb-timepicker-body></nb-timepicker-body>-->
      </nb-card-body>
    </nb-card>
  `,
  styleUrls: ['./timepicker-example.scss'],
})
export class TimepickerFormsComponent {
  formControl = new FormControl(new Date());
}
