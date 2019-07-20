import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Type
} from '@angular/core';
import { NB_DATE_ADAPTER, NbDatepicker, NbDatepickerAdapter } from '../datepicker/datepicker.directive';
import { Observable } from 'rxjs';
import { NbTimepickerComponent } from './timepicker.component';
import { NbTimepickerBodyComponent } from './timepicker-body/timepicker-body.component';
import { NbTimepickerContainerComponent } from './timepicker-container/timepicker-container.component';
import { NbOverlayRef } from '../cdk/overlay/mapping';
import { NbAdjustableConnectedPositionStrategy } from '../cdk/overlay/overlay-position';
import { NB_DOCUMENT } from '../../theme.options';
import { NbDateService } from '../calendar-kit/services/date.service';

/**
 * Datepicker is an control that can pick any values anyway.
 * It has to be bound to the datepicker directive through nbDatepicker input.
 * */
export abstract class NbTimepicker<T> {
}

@Directive({
  selector: 'input[nbTimepicker]',
})
export class NbTimepickerDirective<D> {
  public picker: NbTimepickerComponent<D>;

  constructor (protected hostRef: ElementRef) {
    this.input.setAttribute('readonly', true);
  }

  /**
   * Provides timepicker component.
   * */
  @Input('nbTimepicker')
  set setPicker(picker: NbTimepickerComponent<D>) {
    this.picker = picker;
  }

  /**
   * Returns html input element.
   * */
  get input(): HTMLInputElement {
    return this.hostRef.nativeElement;
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.picker.show();
    this.input.value = '123'
  }
}
