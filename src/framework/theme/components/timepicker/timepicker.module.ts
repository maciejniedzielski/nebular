import { ModuleWithProviders, NgModule } from '@angular/core';
import { NbTimepickerDirective } from './timepicker.directive';
import {  NbTimepickerComponent } from './timepicker.component';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbTimepickerInputComponent } from './timepicker-body/timepicker-input.component';
import { NbTimepickerContainerComponent } from './timepicker-container/timepicker-container.component';
import { NbTimepickerBodyComponent } from './timepicker-body/timepicker-body.component';
import { NbTimepickerFormatComponent } from './timepicker-body/timepicker-format.component';
import { NbSharedModule } from '../shared/shared.module';
import { NbCardModule } from '../card/card.module';
import { NbIconModule } from '../icon/icon.module';
import { NbButtonModule } from '../button/button.module';
import { NbInputModule } from '../input/input.module';

@NgModule({
  imports: [NbSharedModule, NbOverlayModule, NbInputModule, NbCardModule, NbIconModule, NbButtonModule],
  exports: [NbTimepickerDirective, NbTimepickerComponent],
  entryComponents: [NbTimepickerContainerComponent, NbTimepickerBodyComponent],
  declarations: [
    NbTimepickerDirective,
    NbTimepickerComponent,
    NbTimepickerContainerComponent,
    NbTimepickerBodyComponent,
    NbTimepickerInputComponent,
    NbTimepickerFormatComponent,
  ],
})
export class NbTimepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NbTimepickerModule,
      providers: [],
    };
  }
}
