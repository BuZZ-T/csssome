import { Component, signal } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type HyphensMode = {
  id: 'none' | 'manual' | 'auto';
  description: string;
};

@Component({
  selector: 'app-hyphens-demo',
  imports: [SupportBoxComponent],
  templateUrl: './hyphens.html',
  styleUrl: './hyphens.scss',
})
export class HyphensDemo {
  readonly modes: HyphensMode[] = [
    {
      id: 'none',
      description:
        'Words are never hyphenated, not even at a soft hyphen (&shy;). Long words simply overflow or push the line.',
    },
    {
      id: 'manual',
      description:
        'Words break only where you allow it with a soft hyphen (&shy;) or a hyphen character. This is the default value.',
    },
    {
      id: 'auto',
      description:
        'The browser hyphenates automatically using the dictionary of the language set via the lang attribute. Soft hyphens still take precedence.',
    },
  ];

  selectedMode = signal<HyphensMode>(this.modes[1]);

  selectMode(mode: HyphensMode) {
    this.selectedMode.set(mode);
  }
}
