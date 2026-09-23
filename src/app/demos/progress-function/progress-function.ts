import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type RangeExample = {
  id: string;
  label: string;
  start: number;
  end: number;
  unit: string;
};

@Component({
  selector: 'app-progress-function-demo',
  imports: [SupportBoxComponent],
  templateUrl: './progress-function.html',
  styleUrl: './progress-function.scss',
})
export class ProgressFunctionDemo {
  readonly ranges: RangeExample[] = [
    { id: 'percent', label: '0 to 100', start: 0, end: 100, unit: '' },
    { id: 'temperature', label: '-20\u00b0C to 40\u00b0C', start: -20, end: 40, unit: '\u00b0C' },
    { id: 'zoom', label: '0.5x to 3x', start: 0.5, end: 3, unit: 'x' },
  ];

  selectedRange = signal<RangeExample>(this.ranges[0]);
  value = signal(30);

  selectRange(range: RangeExample) {
    this.selectedRange.set(range);
    this.value.set(range.start);
  }

  onValueChange(raw: string) {
    this.value.set(Number(raw));
  }

  get progress(): number {
    const range = this.selectedRange();
    const span = range.end - range.start;
    if (span === 0) {
      return 0;
    }
    return (this.value() - range.start) / span;
  }

  get progressPercent(): string {
    return `${(this.progress * 100).toFixed(1)}%`;
  }
}
