import { Injectable } from '@angular/core';

export type DetectedBrowserId = 'chrome' | 'edge' | 'firefox' | 'safari' | null;

export interface DetectedBrowser {
  id: DetectedBrowserId;
  name: string;
  version: string | null;
}

/**
 * Best-effort detection of the current browser and its version from
 * navigator.userAgent, so the support-box can highlight "your browser" in the
 * compatibility table. User-agent sniffing is inherently fuzzy (e.g. Edge and
 * Opera both include "Chrome" in their UA string), so this only recognizes
 * the four browsers shown in the table and falls back to `null` otherwise.
 */
@Injectable({ providedIn: 'root' })
export class BrowserDetectionService {
  readonly current: DetectedBrowser = this.detect(
    typeof navigator === 'undefined' ? '' : navigator.userAgent,
  );

  private detect(ua: string): DetectedBrowser {
    // Order matters: Edge and Opera UA strings also contain "Chrome"/"Safari",
    // so the more specific tokens must be checked first.
    const checks: { id: Exclude<DetectedBrowserId, null>; name: string; pattern: RegExp }[] = [
      { id: 'edge', name: 'Edge', pattern: /Edg\/([\d.]+)/ },
      { id: 'firefox', name: 'Firefox', pattern: /Firefox\/([\d.]+)/ },
      { id: 'chrome', name: 'Chrome', pattern: /Chrome\/([\d.]+)/ },
      { id: 'safari', name: 'Safari', pattern: /Version\/([\d.]+).*Safari\// },
    ];

    for (const check of checks) {
      const match = ua.match(check.pattern);
      if (match) {
        return { id: check.id, name: check.name, version: match[1] };
      }
    }

    return { id: null, name: 'your browser', version: null };
  }
}
