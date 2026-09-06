import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, forkJoin, of } from 'rxjs';

export interface BrowserVersions {
  chrome: string;
  edge: string;
  firefox: string;
  safari: string;
}

type BcdBrowserId = 'chrome' | 'edge' | 'firefox' | 'safari';

interface BcdRelease {
  status?: string;
}

interface BcdBrowserFile {
  browsers: Record<BcdBrowserId, { releases: Record<string, BcdRelease> }>;
}

const BCD_URL = (browser: BcdBrowserId) =>
  `https://cdn.jsdelivr.net/gh/mdn/browser-compat-data@main/browsers/${browser}.json`;

/**
 * Fetches and caches the current (stable, released) version of each major
 * browser from MDN's browser-compat-data, so every demo's support-box can
 * show a live "Current Version" row without each component fetching it
 * itself.
 */
@Injectable({ providedIn: 'root' })
export class BrowserVersionsService {
  private readonly http = inject(HttpClient);

  private readonly versionsSignal = signal<BrowserVersions | null>(null);
  private readonly loadingSignal = signal(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly versions = this.versionsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly loaded = computed(() => this.versionsSignal() !== null);

  constructor() {
    this.load();
  }

  private load(): void {
    this.loadingSignal.set(true);

    const browsers: BcdBrowserId[] = ['chrome', 'edge', 'firefox', 'safari'];
    const requests = browsers.map((browser) =>
      this.http.get<BcdBrowserFile>(BCD_URL(browser)).pipe(
        catchError(() => of(null)),
      ),
    );

    forkJoin(requests).subscribe((results) => {
      const versions = {} as BrowserVersions;

      browsers.forEach((browser, index) => {
        const file = results[index];
        versions[browser] = this.extractCurrentVersion(file, browser) ?? '—';
      });

      this.versionsSignal.set(versions);
      this.loadingSignal.set(false);

      if (results.some((result) => result === null)) {
        this.errorSignal.set('Some current browser versions could not be fetched.');
      }
    });
  }

  private extractCurrentVersion(file: BcdBrowserFile | null, browser: BcdBrowserId): string | null {
    if (!file) {
      return null;
    }

    const releases = file.browsers?.[browser]?.releases ?? {};
    const currentEntry = Object.entries(releases).find(([, release]) => release.status === 'current');

    return currentEntry?.[0] ?? null;
  }
}
