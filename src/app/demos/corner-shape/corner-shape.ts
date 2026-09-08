import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type CornerShapeValue = {
  id: 'round' | 'scoop' | 'bevel' | 'notch' | 'square' | 'squircle' | 'superellipse(0.5)';
  label: string;
  description: string;
};

type RadiusSize = {
  id: 'small' | 'medium' | 'large';
  label: string;
  value: string;
};

@Component({
  selector: 'app-corner-shape-demo',
  imports: [SupportBoxComponent],
  templateUrl: './corner-shape.html',
  styleUrl: './corner-shape.scss',
})
export class CornerShapeDemo {
  readonly values: CornerShapeValue[] = [
    {
      id: 'round',
      label: 'round',
      description:
        'The default. Corners are a regular circular arc, exactly like border-radius alone produces.',
    },
    {
      id: 'scoop',
      label: 'scoop',
      description:
        'A concave quarter-circle carved inward, as if a circle had been cut out of the corner.',
    },
    {
      id: 'bevel',
      label: 'bevel',
      description: 'A straight diagonal cut across the corner, like a chamfered edge.',
    },
    {
      id: 'notch',
      label: 'notch',
      description: 'A square step cut into the corner, forming an inward right angle.',
    },
    {
      id: 'square',
      label: 'square',
      description: 'No curvature at all — border-radius is ignored and the corner stays sharp.',
    },
    {
      id: 'squircle',
      label: 'squircle',
      description:
        'A superellipse-based curve between a circle and a square, giving a softer, more "squishy" rounded look than round.',
    },
    {
      id: 'superellipse(0.5)',
      label: 'superellipse(0.5)',
      description:
        'The general form behind round, scoop, bevel, notch and squircle. The parameter controls the curve exponent — negative values scoop inward, 0 is a bevel, 1 is round, and higher values approach square.',
    },
  ];

  selectedValue = signal<CornerShapeValue>(this.values[0]);

  selectValue(value: CornerShapeValue) {
    this.selectedValue.set(value);
  }

  readonly radiusSizes: RadiusSize[] = [
    { id: 'small', label: 'Small', value: '1rem' },
    { id: 'medium', label: 'Medium', value: '2.5rem' },
    { id: 'large', label: 'Large', value: '50%' },
  ];

  selectedRadius = signal<RadiusSize>(this.radiusSizes[1]);

  selectRadius(radius: RadiusSize) {
    this.selectedRadius.set(radius);
  }
}
