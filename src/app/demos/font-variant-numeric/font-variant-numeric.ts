import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type NumericVariant = {
  id: string;
  label: string;
  value: string;
  description: string;
};

@Component({
  selector: 'app-font-variant-numeric-demo',
  imports: [SupportBoxComponent],
  templateUrl: './font-variant-numeric.html',
  styleUrl: './font-variant-numeric.scss',
})
export class FontVariantNumericDemo {
  readonly variants: NumericVariant[] = [
    {
      id: 'normal',
      label: 'normal',
      value: 'normal',
      description: 'Default figure rendering without numeric alternates.',
    },
    {
      id: 'ordinal',
      label: 'ordinal',
      value: 'ordinal',
      description: 'Switches ordinal suffixes like 1st, 2nd, and 3rd into glyphs.',
    },
    {
      id: 'slashed-zero',
      label: 'slashed-zero',
      value: 'slashed-zero',
      description: 'Adds a slash to zeros so they are easier to distinguish from O.',
    },
    {
      id: 'lining-nums',
      label: 'lining-nums',
      value: 'lining-nums',
      description: 'Uses lining figures that align to the cap height.',
    },
    {
      id: 'oldstyle-nums',
      label: 'oldstyle-nums',
      value: 'oldstyle-nums',
      description: 'Uses text figures with ascenders and descenders.',
    },
    {
      id: 'proportional-nums',
      label: 'proportional-nums',
      value: 'proportional-nums',
      description: 'Lets each digit take its natural width.',
    },
    {
      id: 'tabular-nums',
      label: 'tabular-nums',
      value: 'tabular-nums',
      description: 'Keeps every digit the same width for aligned columns.',
    },
    {
      id: 'diagonal-fractions',
      label: 'diagonal-fractions',
      value: 'diagonal-fractions',
      description: 'Turns inline fractions into diagonal fraction glyphs.',
    },
    {
      id: 'stacked-fractions',
      label: 'stacked-fractions',
      value: 'stacked-fractions',
      description: 'Turns inline fractions into stacked fraction glyphs.',
    },
  ];

  selectedVariant = signal<NumericVariant>(this.variants[0]);

  readonly sampleRows = [
    { revenue: '$1,024.50', orders: '248', returnRate: '7/8', rank: '21st' },
    { revenue: '$542.75', orders: '1,503', returnRate: '3/16', rank: '2nd' },
    { revenue: '$9,301.20', orders: '42', returnRate: '15/32', rank: '143rd' },
  ];

  selectVariant(variant: NumericVariant) {
    this.selectedVariant.set(variant);
  }
}
