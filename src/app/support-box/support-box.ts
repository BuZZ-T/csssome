import { Component, inject, input } from '@angular/core';
import { BrowserVersionsService } from '../browser-versions/browser-versions';
import { BrowserDetectionService } from '../browser-versions/browser-detection';

@Component({
  selector: 'app-support-box',
  templateUrl: './support-box.html',
})
export class SupportBoxComponent {
  private readonly browserVersions = inject(BrowserVersionsService);
  private readonly browserDetection = inject(BrowserDetectionService);

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
  readonly detectedBrowser = this.browserDetection.current;

  /**
   * Whether the detected browser supports the feature, based on comparing its
   * version against the per-feature "first version" input for that browser.
   * Returns `null` when support cannot be determined (unknown browser, or a
   * non-numeric first-version value like "No" isn't reachable, only missing
   * version info is).
   */
  get isFeatureSupported(): boolean | null {
    const id = this.detectedBrowser.id;
    const detectedVersion = this.detectedBrowser.version;
    if (!id || !detectedVersion) {
      return null;
    }

    const firstVersionByBrowser: Record<string, string> = {
      chrome: this.chromeVersion(),
      edge: this.edgeVersion(),
      firefox: this.firefoxVersion(),
      safari: this.safariVersion(),
    };
    const firstVersion = firstVersionByBrowser[id];

    return this.compareVersions(detectedVersion, firstVersion);
  }

  /**
   * Compares the detected browser version against the feature's required
   * first version. Handles non-numeric markers ("No", "Preview", "149 (flag)")
   * by treating anything without a clean leading number as unsupported in a
   * stable release.
   */
  private compareVersions(detected: string, required: string): boolean | null {
    const requiredMatch = required.match(/^(\d+(?:\.\d+)?)/);
    if (!requiredMatch) {
      // "No" or similar means the feature is never supported.
      return false;
    }
    if (/flag|preview/i.test(required)) {
      // Only available behind a flag / in preview builds, not in a stable release.
      return false;
    }

    const requiredNumber = parseFloat(requiredMatch[1]);
    const detectedMatch = detected.match(/^(\d+(?:\.\d+)?)/);
    if (!detectedMatch) {
      return null;
    }
    const detectedNumber = parseFloat(detectedMatch[1]);

    return detectedNumber >= requiredNumber;
  }
}
