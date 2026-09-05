import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SupportBoxComponent } from '../../support-box/support-box';

@Component({
  selector: 'app-view-transition-demo',
  imports: [SupportBoxComponent],
  templateUrl: './view-transition.html',
  styleUrl: './view-transition.scss',
})
export class ViewTransitionDemo {
  readonly iframeSrc: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.iframeSrc = sanitizer.bypassSecurityTrustResourceUrl('view-transition-demo/page-a.html');
  }
}
