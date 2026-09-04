import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type StuckEdge = 'top' | 'bottom';

@Component({
  selector: 'app-scroll-state-demo',
  imports: [SupportBoxComponent],
  templateUrl: './scroll-state.html',
  styleUrl: './scroll-state.scss',
})
export class ScrollStateDemo {
  readonly edges: StuckEdge[] = ['top', 'bottom'];

  selectedEdge = signal<StuckEdge>('top');

  readonly explanations: Record<StuckEdge, string> = {
    top: 'Every group header is its own scroll-state container that sticks to the top edge. While a header is pinned, it highlights itself and reveals a shadow, so you always know which group you are reading.',
    bottom:
      'The summary bar sticks to the bottom edge of the scroll port. While it is pinned it stays raised and shows a hint; scroll all the way down and it settles into the flow, dropping the shadow.',
  };

  readonly groups = [
    { letter: 'A', entries: ['Aphex Twin', 'Arcade Fire', 'Autechre', 'Air', 'Alt-J'] },
    { letter: 'B', entries: ['Boards of Canada', 'Björk', 'Blur', 'Burial', 'Beach House'] },
    { letter: 'C', entries: ['Caribou', 'Chromatics', 'Clark', 'Cocteau Twins', 'Chvrches'] },
    { letter: 'D', entries: ['Daft Punk', 'Deerhunter', 'Death Grips', 'DJ Shadow', 'Disclosure'] },
    { letter: 'E', entries: ['Explosions in the Sky', 'Eels', 'Elbow', 'Emeralds', 'Empire of the Sun'] },
  ];

  selectEdge(edge: StuckEdge) {
    this.selectedEdge.set(edge);
  }
}
