/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { TimepickerFormsComponent } from './timepicker-forms.component';

const routes: Route[] = [
  {
    path: 'timepicker-forms.component',
    component: TimepickerFormsComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class TimepickerRoutingModule {}
