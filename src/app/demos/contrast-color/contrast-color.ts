import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type SwatchColor = {
  id: string;
  label: string;
  value: string;
};

@Component({
  selector: 'app-contrast-color-demo',
  imports: [SupportBoxComponent],
  templateUrl: './contrast-color.html',
  styleUrl: './contrast-color.scss',
})
export class ContrastColorDemo {
  readonly swatches: SwatchColor[] = [
    { id: 'yellow', label: 'Yellow', value: '#ffd166' },
    { id: 'navy', label: 'Navy', value: '#12213b' },
    { id: 'crimson', label: 'Crimson', value: '#c62368' },
    { id: 'mint', label: 'Mint', value: '#8fe3c0' },
    { id: 'slate', label: 'Slate', value: '#4a5568' },
    { id: 'white', label: 'White', value: '#ffffff' },
    { id: 'purple', label: 'Purple', value: '#7c6af7' },
    { id: 'orange', label: 'Orange', value: '#f4713d' },
  ];

  selectedSwatch = signal<SwatchColor>(this.swatches[0]);
  customColor = signal('#3fa9f5');

  selectSwatch(swatch: SwatchColor) {
    this.selectedSwatch.set(swatch);
  }

  onCustomColorChange(value: string) {
    this.customColor.set(value);
  }
}
