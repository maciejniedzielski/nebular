import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'nb-timepicker-input',
  template: `
    <button nbButton size="tiny" appearance="ghost" tabIndex="-1" (click)="increment()">
      <nb-icon icon="arrow-ios-upward-outline"></nb-icon>
    </button>
    <input nbInput
      type="text"
      maxlength="2"
      tabIndex="1"
      (wheel)="$event.deltaY < 0 ? increment($event) : decrement($event)"
      (keydown)="onKeydown($event)"
      (blur)="onBlur()"
      [(ngModel)]="value"
      class="input"
      #input>
    <button nbButton size="tiny" appearance="ghost" tabIndex="-1" (click)="decrement()">
      <nb-icon icon="arrow-ios-downward-outline"></nb-icon>
    </button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto 0.5rem;
    }

    .input {
      width: 3.5rem;
      margin: 0.5rem auto;
      text-align: center;
    }

    .input::-webkit-outer-spin-button,
    .input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .input[type=number] {
      -moz-appearance:textfield;
    }
  `],
  providers: [DecimalPipe],
})
export class NbTimepickerInputComponent {
  @Input() max;
  public value = '00';
  public min = 0;

  constructor (private numberPipe: DecimalPipe) {}

  increment(event?) {
    if (event) {
      event.preventDefault();
    }

    const val: number = (+this.value < this.max)
      ? +this.value + 1
      : this.min;

    this.value = this.numberPipe.transform(val, '2.0-0');
  }

  decrement(event?) {
    if (event) {
      event.preventDefault();
    }

    const val: number = (+this.value > this.min)
      ? +this.value - 1
      : this.max;

    this.value = this.numberPipe.transform(val, '2.0-0');
  }

  isDigit(e: KeyboardEvent) {
    // Allow: backspace, delete, tab, escape, enter
    if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
      // Allow: Ctrl/cmd+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+C
      (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: Ctrl/cmd+X
      (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, up, down
      (e.keyCode >= 35 && e.keyCode <= 40)) {

      return true;
    }
    return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.isDigit(event)) {
      event.preventDefault();
    }
  }

  onBlur() {
    const val = (this.value === '') ? this.min : this.value;
    this.value = this.numberPipe.transform(val, '2.0-0')
  }
}
