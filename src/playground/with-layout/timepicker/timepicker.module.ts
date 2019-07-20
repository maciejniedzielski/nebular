import { NgModule } from '@angular/core';
import { TimepickerRoutingModule } from './timepicker-routing.module';
import { TimepickerFormsComponent } from './timepicker-forms.component';
import {
  NbTimepickerModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
} from '@nebular/theme';

@NgModule({
  declarations: [
    TimepickerFormsComponent,
  ],
  imports: [
    TimepickerRoutingModule,
    NbInputModule,
    NbCardModule,
    NbTimepickerModule,
    NbButtonModule,
    NbIconModule,
  ],
})
export class TimepickerModule { }
