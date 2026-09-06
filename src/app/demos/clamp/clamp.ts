import { Component, computed, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type ClampMode = {
  id: 'width' | 'font-size' | 'padding';
  label: string;
  property: string;
  value: string;
  description: string;
};

@Component({
  selector: 'app-clamp-demo',
  imports: [SupportBoxComponent],
  templateUrl: './clamp.html',
  styleUrl: './clamp.scss',
})
export class ClampDemo {
  readonly modes: ClampMode[] = [
    {
      id: 'width',
      label: 'width',
      property: 'width',
      value: 'clamp(16rem, 60%, 40rem)',
      description:
        'The box never gets narrower than 16rem and never wider than 40rem. In between it fluidly takes 60% of the available space — no media query needed.',
    },
    {
      id: 'font-size',
      label: 'font-size',
      property: 'font-size',
      value: 'clamp(1rem, 2.5vw, 2rem)',
      description:
        'Fluid typography: the font size scales with the viewport width, but stays readable between 1rem and 2rem at the extremes. Because it is based on vw, resize the browser window to see it change — the container buttons below have no effect here.',
    },
    {
      id: 'padding',
      label: 'padding',
      property: 'padding',
      value: 'clamp(0.5rem, 4%, 3rem)',
      description:
        'Fluid spacing: the padding grows with the box, but is bounded so it never collapses or becomes excessive.',
    },
  ];

  readonly widths = [
    { id: 'narrow', label: 'Narrow', size: '320px' },
    { id: 'medium', label: 'Medium', size: '640px' },
    { id: 'wide', label: 'Wide', size: '100%' },
  ];

  selectedMode = signal<ClampMode>(this.modes[0]);
  selectedWidth = signal(this.widths[2]);

  readonly boxWidth = computed(() =>
    this.selectedMode().id === 'width' ? this.selectedMode().value : null,
  );
  readonly boxFontSize = computed(() =>
    this.selectedMode().id === 'font-size' ? this.selectedMode().value : null,
  );
  readonly boxPadding = computed(() =>
    this.selectedMode().id === 'padding' ? this.selectedMode().value : null,
  );

  selectMode(mode: ClampMode) {
    this.selectedMode.set(mode);
  }

  selectWidth(width: (typeof this.widths)[number]) {
    this.selectedWidth.set(width);
  }
}
