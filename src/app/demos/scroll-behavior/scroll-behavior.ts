import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type ScrollBehaviorMode = {
  id: 'auto' | 'smooth';
  description: string;
};

@Component({
  selector: 'app-scroll-behavior-demo',
  imports: [SupportBoxComponent],
  templateUrl: './scroll-behavior.html',
  styleUrl: './scroll-behavior.scss',
})
export class ScrollBehaviorDemo {
  readonly modes: ScrollBehaviorMode[] = [
    {
      id: 'auto',
      description:
        'The default. Scrolling triggered by navigation or scrolling APIs happens instantly, with no animation.',
    },
    {
      id: 'smooth',
      description:
        'Scrolling triggered by navigation or scrolling APIs is animated smoothly, using a browser-defined easing and duration.',
    },
  ];

  selectedMode = signal<ScrollBehaviorMode>(this.modes[1]);

  private readonly scrollArea = viewChild.required<ElementRef<HTMLElement>>('scrollArea');

  selectMode(mode: ScrollBehaviorMode) {
    this.selectedMode.set(mode);
  }

  scrollToSection(index: number) {
    const container = this.scrollArea().nativeElement;
    const target = container.querySelector<HTMLElement>(`#sb-section-${index}`);
    target?.scrollIntoView({ block: 'start' });
  }
}
