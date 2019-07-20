/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, ComponentFactoryResolver, ComponentRef, ViewChild } from '@angular/core';
import { NbOverlayContainerComponent, NbPositionedContainer } from '../../cdk/overlay/overlay-container';
import { NbComponentPortal } from '../../cdk/overlay/mapping';

@Component({
  selector: 'nb-timepicker-container',
  styles: [''],
  template: `
    <span class="arrow"></span>
    <nb-overlay-container></nb-overlay-container>
  `,
})
export class NbTimepickerContainerComponent extends NbPositionedContainer {
  // TODO static must be false as of Angular 9.0.0, issues/1514
  @ViewChild(NbOverlayContainerComponent, { static: true }) overlayContainer: NbOverlayContainerComponent;

  attach<T>(portal: NbComponentPortal<T>): ComponentRef<T> {
    return this.overlayContainer.attachComponentPortal(portal);
  }
}
