import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerRoutingModule } from './timepicker-routing.module';
import { TimepickerFormsComponent } from './timepicker-forms.component';
import { NbInputModule } from '../../../framework/theme/components/input/input.module';
import { NbCardModule } from '../../../framework/theme/components/card/card.module';

@NgModule({
  declarations: [
    TimepickerFormsComponent,
  ],
  imports: [
    CommonModule,
    TimepickerRoutingModule,
    NbInputModule,
    NbCardModule,
  ],
})
export class TimepickerModule { }
