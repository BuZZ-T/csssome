import { Component, input } from '@angular/core';

@Component({
  selector: 'app-support-box',
  templateUrl: './support-box.html',
})
export class SupportBoxComponent {
  title = input('Browser support (first version)');
  chromeVersion = input.required<string>();
  edgeVersion = input.required<string>();
  firefoxVersion = input.required<string>();
  safariVersion = input.required<string>();
  baseline = input.required<string>();
  caniuseUrl = input.required<string>();
  mdnUrl = input.required<string>();
}
