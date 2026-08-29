import { Component } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

@Component({
  selector: 'app-aspect-ratio-demo',
  imports: [SupportBoxComponent],
  templateUrl: './aspect-ratio.html',
  styleUrl: './aspect-ratio.scss',
})
export class AspectRatioDemo {
  readonly examples = [
    {
      title: 'Square card',
      ratio: '1 / 1',
      description: 'Useful for avatars, cover tiles, and balanced icon cards.',
      accent: '#7c6af7',
    },
    {
      title: 'Wide banner',
      ratio: '16 / 9',
      description: 'Great for media previews and hero banners.',
      accent: '#4ad6ff',
    },
    {
      title: 'Classic photo',
      ratio: '4 / 3',
      description: 'A familiar ratio for galleries and editorial layouts.',
      accent: '#6af79c',
    },
    {
      title: 'Tall poster',
      ratio: '3 / 4',
      description: 'Works well for posters, promos, and portrait-oriented cards.',
      accent: '#f7c56a',
    },
  ];
}
