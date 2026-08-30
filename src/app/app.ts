import { Component, signal, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Nav, DemoEntry } from './nav/nav';
import { AspectRatioDemo } from './demos/aspect-ratio/aspect-ratio';
import { BaseSelectDemo } from './demos/base-select/base-select';
import { LightDarkDemo } from './demos/light-dark/light-dark';
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
    { id: 'animation-timeline', label: 'Animation Timeline', cssProperty: 'animation-timeline' },
    { id: 'aspect-ratio', label: 'AspectRatio', cssProperty: 'aspect-ratio' },
    { id: 'base-select', label: 'BaseSelect', cssProperty: 'appearance: base-select' },
    { id: 'container-queries', label: 'Container Queries', cssProperty: 'container-name' },
    { id: 'light-dark', label: 'LightDark', cssProperty: 'light-dark()' },
    { id: 'scroll-snap', label: 'Scroll Snap', cssProperty: 'scroll-snap-type' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly components: Record<string, Type<any>> = {
    'animation-timeline': AnimationTimeline,
    'aspect-ratio': AspectRatioDemo,
    'base-select': BaseSelectDemo,
    'container-queries': ContainerQueries,
    'light-dark': LightDarkDemo,
    'scroll-snap': ScrollSnap,
  };

  activeId = signal(this.demos[0].id);

  get activeComponent() {
    return this.components[this.activeId()];
  }
}
