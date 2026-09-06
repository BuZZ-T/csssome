import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

type HighlightTerm = {
  id: 'keyword' | 'warning' | 'success';
  label: string;
};

@Component({
  selector: 'app-highlight-demo',
  imports: [SupportBoxComponent],
  templateUrl: './highlight.html',
  styleUrl: './highlight.scss',
})
export class HighlightDemo implements AfterViewInit {
  readonly textRef = viewChild.required<ElementRef<HTMLElement>>('text');

  readonly terms: HighlightTerm[] = [
    { id: 'keyword', label: 'keyword' },
    { id: 'warning', label: 'warning' },
    { id: 'success', label: 'success' },
  ];

  selectedTerm = signal<HighlightTerm>(this.terms[0]);

  private supportsHighlightApi = typeof CSS !== 'undefined' && 'highlights' in CSS;

  ngAfterViewInit(): void {
    this.applyHighlights();
  }

  selectTerm(term: HighlightTerm) {
    this.selectedTerm.set(term);
    this.applyHighlights();
  }

  private applyHighlights(): void {
    if (!this.supportsHighlightApi) {
      return;
    }

    const words: Record<HighlightTerm['id'], string[]> = {
      keyword: ['CSS', 'Custom', 'Highlight', 'API', '::highlight()'],
      warning: ['without', 'any', 'markup'],
      success: ['ranges', 'JavaScript', 'style'],
    };

    // Clear all previously registered custom highlights, then register only
    // the one matching the currently selected term.
    CSS.highlights.clear();

    const root = this.textRef().nativeElement;
    const targets = words[this.selectedTerm().id];
    const ranges = this.findRanges(root, targets);

    if (ranges.length > 0) {
      CSS.highlights.set(`demo-highlight-${this.selectedTerm().id}`, new Highlight(...ranges));
    }
  }

  private findRanges(root: HTMLElement, targets: string[]): Range[] {
    const ranges: Range[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node: Node | null;

    // eslint-disable-next-line no-cond-assign
    while ((node = walker.nextNode())) {
      const text = node.textContent ?? '';
      for (const target of targets) {
        let fromIndex = 0;
        let index: number;
        // eslint-disable-next-line no-cond-assign
        while ((index = text.indexOf(target, fromIndex)) !== -1) {
          const range = new Range();
          range.setStart(node, index);
          range.setEnd(node, index + target.length);
          ranges.push(range);
          fromIndex = index + target.length;
        }
      }
    }

    return ranges;
  }
}
