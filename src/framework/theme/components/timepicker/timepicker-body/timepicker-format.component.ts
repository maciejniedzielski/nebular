import { Component } from '@angular/core';

@Component({
  selector: 'nb-timepicker-format',
  template: `
    <button nbButton size="small" appearance="filled" class="format-button">AM</button>
    <button nbButton size="small" appearance="filled" class="format-button">PM</button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto 0.5rem;
    }

    .format-button {
      margin: 0.25rem auto;
    }
  `],
})
export class NbTimepickerFormatComponent {
}
