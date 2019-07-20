import { Component, OnInit } from '@angular/core';

export type TimeFormatType = TimeFormatEnum.TWELVE | TimeFormatEnum.TWENTY_FOUR;
export enum TimeFormatEnum {
  TWELVE = 12,
  TWENTY_FOUR = 24,
}

@Component({
  selector: 'nb-timepicker-body',
  template: `
    <nb-card>
      <nb-timepicker-input
        [max]="format === TimeFormat.TWELVE ? TimeFormat.TWELVE : TimeFormat.TWENTY_FOUR - 1"
      ></nb-timepicker-input>
      :
      <nb-timepicker-input
        [max]="59"
      ></nb-timepicker-input>
      <ng-container *ngIf="format === TimeFormat.TWELVE">
        <nb-timepicker-format></nb-timepicker-format>
      </ng-container>
    </nb-card>
  `,
  styles: [`
   nb-card {
     display: flex;
     flex-direction: row;
     padding: 1rem 2rem;
     align-items: center;
   }
  `],
})
export class NbTimepickerBodyComponent<D> implements OnInit {
  public format: TimeFormatType = 12;
  public TimeFormat = TimeFormatEnum;

  constructor() { }

  ngOnInit() {
    if (this.format !== TimeFormatEnum.TWELVE && this.format !== TimeFormatEnum.TWENTY_FOUR) {
      throw new Error(`Unexpected time format.`);
    }
  }

}
