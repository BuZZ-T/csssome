import { Component, inject, input } from '@angular/core';
import { BrowserVersionsService } from '../browser-versions/browser-versions';

@Component({
  selector: 'app-support-box',
  templateUrl: './support-box.html',
})
export class SupportBoxComponent {
  private readonly browserVersions = inject(BrowserVersionsService);

  title = input('Browser support');
  chromeVersion = input.required<string>();
  edgeVersion = input.required<string>();
  firefoxVersion = input.required<string>();
  safariVersion = input.required<string>();
  baseline = input.required<string>();
  caniuseUrl = input.required<string>();
  mdnUrl = input.required<string>();

  readonly currentVersions = this.browserVersions.versions;
  readonly currentVersionsLoading = this.browserVersions.loading;
}
