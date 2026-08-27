import { Component, signal, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Nav, DemoEntry } from './nav/nav';
import { AspectRatioDemo } from './demos/aspect-ratio/aspect-ratio';
import { ScrollSnap } from './demos/scroll-snap/scroll-snap';
import { ContainerQueries } from './demos/container-queries/container-queries';
import { AnimationTimeline } from './demos/animation-timeline/animation-timeline';

@Component({
  imports: [Nav, NgComponentOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Keep this list alphabetically sorted by label.
  readonly demos: DemoEntry[] = [
    { id: 'aspect-ratio', label: 'AspectRatio', cssProperty: 'aspect-ratio' },
    { id: 'animation-timeline', label: 'Animation Timeline', cssProperty: 'animation-timeline' },
    { id: 'container-queries', label: 'Container Queries', cssProperty: 'container-name' },
    { id: 'scroll-snap', label: 'Scroll Snap', cssProperty: 'scroll-snap-type' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly components: Record<string, Type<any>> = {
    'aspect-ratio': AspectRatioDemo,
    'scroll-snap': ScrollSnap,
    'container-queries': ContainerQueries,
    'animation-timeline': AnimationTimeline,
  };

  activeId = signal(this.demos[0].id);

  get activeComponent() {
    return this.components[this.activeId()];
  }
}
