import { Component } from '@angular/core';

@Component({
  selector: 'app-light-dark-demo',
  templateUrl: './light-dark.html',
  styleUrl: './light-dark.scss',
})
export class LightDarkDemo {
  readonly examples = [
    {
      label: 'Surface',
      snippet: 'background: light-dark(#f7f8fc, #171722);',
      note: 'The main preview panel follows the active color scheme.',
    },
    {
      label: 'Text',
      snippet: 'color: light-dark(#19212d, #f5f7fb);',
      note: 'Readable text switches automatically with the scheme.',
    },
    {
      label: 'Border',
      snippet: 'border-color: light-dark(#d5dbea, #303244);',
      note: 'Borders stay subtle in both themes.',
    },
    {
      label: 'Accent',
      snippet: 'accent-color: light-dark(#644dff, #9d91ff);',
      note: 'Use it for buttons, controls, and focus states.',
    },
  ];

  readonly tips = [
    {
      browser: 'Chrome',
      text: 'Open DevTools, open More tools > Rendering, then set “Emulate CSS media feature prefers-color-scheme” to light or dark.',
    },
    {
      browser: 'Firefox',
      text: 'Open DevTools Settings and use the color scheme / prefers-color-scheme simulation to force light or dark mode.',
    },
  ];
}
