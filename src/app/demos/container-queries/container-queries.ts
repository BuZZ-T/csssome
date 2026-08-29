import { Component } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

@Component({
  selector: 'app-container-queries',
  imports: [SupportBoxComponent],
  templateUrl: './container-queries.html',
  styleUrl: './container-queries.scss',
})
export class ContainerQueries {
  readonly stats = [
    { value: '92%', label: 'Responsive fit' },
    { value: '2', label: 'Layout states' },
    { value: '1', label: 'Named container' },
  ];

  readonly bullets = [
    'Add container-name to the element you want to query.',
    'Use @container to adapt descendants to the available space.',
    'Resize the panel to see the cards reflow automatically.',
  ];
}
