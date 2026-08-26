import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-snap',
  templateUrl: './scroll-snap.html',
  styleUrl: './scroll-snap.scss',
})
export class ScrollSnap {
  readonly slides = [
    {
      label: '01',
      title: 'Scroll Snapping',
      body: 'The scroll-snap-type property defines how snap points are enforced on the scroll container. Try scrolling through these slides!',
      color: '#7c6af7',
    },
    {
      label: '02',
      title: 'mandatory vs proximity',
      body: 'mandatory always snaps to the nearest snap point after scrolling stops. proximity only snaps when close enough to a point.',
      color: '#f7706a',
    },
    {
      label: '03',
      title: 'scroll-snap-align',
      body: 'Each child declares where it should snap using scroll-snap-align: start | center | end. This slide uses "start".',
      color: '#6af79c',
    },
    {
      label: '04',
      title: 'scroll-snap-stop',
      body: 'scroll-snap-stop: always prevents the user from skipping over a snap point, great for step-by-step flows.',
      color: '#f7c56a',
    },
    {
      label: '05',
      title: 'Axis Control',
      body: 'scroll-snap-type accepts x, y, or both as the axis. This demo uses y (vertical) with mandatory snapping.',
      color: '#6ac9f7',
    },
  ];
}
