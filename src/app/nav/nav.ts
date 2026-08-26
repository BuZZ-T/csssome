import { Component, input, output } from '@angular/core';

export interface DemoEntry {
  id: string;
  label: string;
  cssProperty: string;
}

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  entries = input.required<DemoEntry[]>();
  activeId = input.required<string>();
  select = output<string>();
}
