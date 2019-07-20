import {
  Component, ComponentFactoryResolver, ComponentRef, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type, ViewChild, ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';

import { NbCalendarComponent } from '../calendar/calendar.component';
import { NbBasePicker } from '../datepicker/datepicker.component';
import { NbTimepickerBodyComponent } from './timepicker-body/timepicker-body.component';
import { NbComponentPortal, NbOverlayRef } from '../cdk/overlay/mapping';
import { NbDatepickerContainerComponent } from '../datepicker/datepicker-container.component';
import { NbTimepickerContainerComponent } from './timepicker-container/timepicker-container.component';
import { NbTimepicker } from './timepicker.directive';
import { NbOverlayService } from '../cdk/overlay/overlay-service';
import {
  NbAdjustableConnectedPositionStrategy,
  NbAdjustment,
  NbPosition,
  NbPositionBuilderService
} from '../cdk/overlay/overlay-position';
import { NbTrigger, NbTriggerStrategy, NbTriggerStrategyBuilderService } from '../cdk/overlay/overlay-trigger';

@Component({
  selector: 'nb-timepicker',
  template: `
    <template #dynamicComponentContainer></template>
  `,
})
export class NbTimepickerComponent<D> implements OnInit {
  @ViewChild('dynamicComponentContainer', { static: false, read: ViewContainerRef }) dynamicComponentContainer;

  protected container: ComponentRef<NbTimepickerContainerComponent>;
  protected pickerRef: ComponentRef<any>;
  protected ref: NbOverlayRef;
  protected positionStrategy: NbAdjustableConnectedPositionStrategy;
  protected pickerClass: Type<NbTimepickerBodyComponent<D>> = NbTimepickerBodyComponent;
  protected triggerStrategy: NbTriggerStrategy;

  constructor(private cfr: ComponentFactoryResolver,
              protected overlay: NbOverlayService,
              protected positionBuilder: NbPositionBuilderService,
              protected triggerStrategyBuilder: NbTriggerStrategyBuilderService,
              protected hostRef: ElementRef) { }

  protected instantiatePicker() {
    this.pickerRef = this.container.instance.attach(new NbComponentPortal(this.pickerClass, null, null, this.cfr));
  }
  ngOnInit(): void {
    this.triggerStrategy = this.createTriggerStrategy()
    this.triggerStrategy.hide$.subscribe(() => {
      this.hide();
    });
  }

  protected createTriggerStrategy(): NbTriggerStrategy {
    return this.triggerStrategyBuilder
      .trigger(NbTrigger.FOCUS)
      .host(this.hostRef.nativeElement)
      .container(() => this.container)
      .build();
  }

  public show() {
    this.positionStrategy = this.createPositionStrategy();
    this.ref = this.overlay.create({
      positionStrategy: this.positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.container = this.ref.attach(new NbComponentPortal(NbTimepickerContainerComponent, null, null, this.cfr));
    this.instantiatePicker();
  }

  /**
   * Returns html input element.
   * */
  get input(): HTMLInputElement {
    return this.hostRef.nativeElement;
  }

  /**
   * Returns picker instance.
   * */
  get picker(): any {
    return this.pickerRef && this.pickerRef.instance;
  }

  hide() {
    if (this.ref) {
      this.ref.detach();
    }

    // save current value if picker was rendered
    if (this.picker) {
      this.pickerRef.destroy();
      this.pickerRef = null;
      this.container = null;
    }
  }

  protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy {
    return this.positionBuilder
      .connectedTo(this.hostRef)
      .position(NbPosition.BOTTOM)
      .adjustment(NbAdjustment.COUNTERCLOCKWISE);
  }
}
