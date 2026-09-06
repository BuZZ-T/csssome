import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type ContentVisibilityMode = {
  id: 'visible' | 'auto' | 'hidden';
  description: string;
};

@Component({
  selector: 'app-content-visibility-demo',
  imports: [SupportBoxComponent],
  templateUrl: './content-visibility.html',
  styleUrl: './content-visibility.scss',
})
export class ContentVisibilityDemo {
  readonly modes: ContentVisibilityMode[] = [
    {
      id: 'visible',
      description:
        'The default. The element is rendered and laid out normally, exactly as if the property were not set at all.',
    },
    {
      id: 'auto',
      description:
        'The browser skips layout and paint for the content while it is off-screen, but still keeps it in the accessibility tree and searchable/focusable. Rendering is restored automatically once it scrolls into view.',
    },
    {
      id: 'hidden',
      description:
        'The content is unconditionally skipped, similar to display: none, but the internal rendering state (layout, paint) is cached, so showing it again later is much cheaper than rendering it from scratch.',
    },
  ];

  selectedMode = signal<ContentVisibilityMode>(this.modes[1]);

  selectMode(mode: ContentVisibilityMode) {
    this.selectedMode.set(mode);
  }
}
