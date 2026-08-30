import { Component } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

@Component({
  selector: 'app-base-select-demo',
  imports: [SupportBoxComponent],
  templateUrl: './base-select.html',
  styleUrl: './base-select.scss',
})
export class BaseSelectDemo {
  readonly options = [
    'Aurora Purple',
    'Polar Cyan',
    'Sunset Coral',
    'Moss Green',
    'Midnight Blue',
  ];

  readonly notes = [
    'appearance: base-select enables styling on the native select control.',
    'Use ::picker(select) to style the opened dropdown picker as well.',
    'The element keeps native semantics and keyboard behavior.',
  ];
}
