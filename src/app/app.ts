import { Component, signal, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { Nav, DemoEntry } from './nav/nav';
import { ScrollSnap } from './demos/scroll-snap/scroll-snap';
import { ContainerQueries } from './demos/container-queries/container-queries';

@Component({
  imports: [Nav, NgComponentOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly demos: DemoEntry[] = [
    { id: 'scroll-snap', label: 'Scroll Snap', cssProperty: 'scroll-snap-type' },
    { id: 'container-queries', label: 'Container Queries', cssProperty: 'container-name' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly components: Record<string, Type<any>> = {
    'scroll-snap': ScrollSnap,
    'container-queries': ContainerQueries,
  };

  activeId = signal(this.demos[0].id);

  get activeComponent() {
    return this.components[this.activeId()];
  }
}
