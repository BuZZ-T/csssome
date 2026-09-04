import { Component, signal, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Nav, DemoEntry } from './nav/nav';
import { AspectRatioDemo } from './demos/aspect-ratio/aspect-ratio';
import { BaseSelectDemo } from './demos/base-select/base-select';
import { FontVariantNumericDemo } from './demos/font-variant-numeric/font-variant-numeric';
import { HyphensDemo } from './demos/hyphens/hyphens';
import { LightDarkDemo } from './demos/light-dark/light-dark';
import { ScrollSnap } from './demos/scroll-snap/scroll-snap';
import { ScrollStateDemo } from './demos/scroll-state/scroll-state';
import { ShapeOutsideDemo } from './demos/mask-wrap/shape-outside';
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
    { id: 'aspect-ratio', label: 'Aspect Ratio', cssProperty: 'aspect-ratio' },
    { id: 'base-select', label: 'Base Select', cssProperty: 'appearance: base-select' },
    { id: 'container-queries', label: 'Container Queries', cssProperty: 'container-name' },
    { id: 'font-variant-numeric', label: 'Font Variant Numeric', cssProperty: 'font-variant-numeric' },
    { id: 'hyphens', label: 'Hyphens', cssProperty: 'hyphens' },
    { id: 'light-dark', label: 'Light Dark', cssProperty: 'light-dark()' },
    { id: 'scroll-snap', label: 'Scroll Snap', cssProperty: 'scroll-snap-type' },
    { id: 'scroll-state', label: 'Scroll State', cssProperty: '@container scroll-state()' },
    { id: 'shape-outside', label: 'Shape Outside', cssProperty: 'shape-outside' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly components: Record<string, Type<any>> = {
    'animation-timeline': AnimationTimeline,
    'aspect-ratio': AspectRatioDemo,
    'base-select': BaseSelectDemo,
    'container-queries': ContainerQueries,
    'font-variant-numeric': FontVariantNumericDemo,
    hyphens: HyphensDemo,
    'light-dark': LightDarkDemo,
    'scroll-snap': ScrollSnap,
    'scroll-state': ScrollStateDemo,
    'shape-outside': ShapeOutsideDemo,
  };

  activeId = signal(this.demos[0].id);

  get activeComponent() {
    return this.components[this.activeId()];
  }
}
