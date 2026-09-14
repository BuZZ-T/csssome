import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type PaintOrderValue = {
  id: string;
  label: string;
  description: string;
};

@Component({
  selector: 'app-paint-order-demo',
  imports: [SupportBoxComponent],
  templateUrl: './paint-order.html',
  styleUrl: './paint-order.scss',
})
export class PaintOrderDemo {
  readonly values: PaintOrderValue[] = [
    {
      id: 'normal',
      label: 'normal',
      description:
        'The default painting order: fill, then stroke. With a thick stroke, it can cover part of the fill underneath.',
    },
    {
      id: 'fill stroke',
      label: 'fill stroke',
      description: 'Equivalent to normal, spelled out explicitly: fill first, stroke painted on top.',
    },
    {
      id: 'stroke fill',
      label: 'stroke fill',
      description:
        'The stroke is painted first and the fill on top of it, so a thick stroke no longer covers the fill \u2014 useful for outlined text or shapes.',
    },
  ];

  selectedValue = signal<PaintOrderValue>(this.values[0]);

  selectValue(value: PaintOrderValue) {
    this.selectedValue.set(value);
  }
}
