import { Component, signal } from '@angular/core';

type TimelineMode = 'view' | 'scroll';

@Component({
  selector: 'app-animation-timeline',
  templateUrl: './animation-timeline.html',
  styleUrl: './animation-timeline.scss',
})
export class AnimationTimeline {
  readonly modes: Array<{ id: TimelineMode; label: string; title: string }> = [
    { id: 'view', label: 'view()', title: 'View timeline' },
    { id: 'scroll', label: 'scroll()', title: 'Scroll timeline' },
  ];

  selectedMode = signal<TimelineMode>('view');

  readonly viewCards = Array.from({ length: 12 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const titles = [
      'Animate when it enters view',
      'Use a view timeline',
      'Control the range',
      'Long-form content',
    ];
    const bodies = [
      'Each card fades and slides in as it moves through the viewport.',
      'animation-timeline: view() ties progress to the element’s visibility.',
      'animation-range lets you define how much of the element should drive the animation.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed turpis at neque mollis tristique.',
    ];
    const accents = ['#7c6af7', '#4ad6ff', '#6af79c', '#f7c56a', '#f7706a'];

    return {
      eyebrow: number,
      title: `${titles[index % titles.length]} ${index > 3 ? `(${number})` : ''}`.trim(),
      body: `${bodies[index % bodies.length]} ${index > 3 ? 'Praesent luctus, lectus nec hendrerit gravida, mi urna laoreet elit.' : ''}`.trim(),
      accent: accents[index % accents.length],
    };
  });

  readonly scrollCards = Array.from({ length: 12 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const titles = [
      'Scroll-driven animation',
      'Use a scroll timeline',
      'Perfect for narratives',
      'Scroll space',
    ];
    const bodies = [
      'The progress bar grows with the scroll position of the page section.',
      'animation-timeline: scroll() links motion to the page’s own scroll container.',
      'Great for onboarding, storytelling layouts, and step-by-step demos.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
    ];
    const accents = ['#f7706a', '#f7c56a', '#7c6af7', '#4ad6ff', '#6af79c'];

    return {
      eyebrow: number,
      title: `${titles[index % titles.length]} ${index > 3 ? `(${number})` : ''}`.trim(),
      body: `${bodies[index % bodies.length]} ${index > 3 ? 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' : ''}`.trim(),
      accent: accents[index % accents.length],
    };
  });

  selectMode(mode: TimelineMode) {
    this.selectedMode.set(mode);
  }
}
