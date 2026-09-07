import { Routes } from '@angular/router';
import { Type } from '@angular/core';
import { DemoEntry } from './nav/nav';
import { AnimationTimeline } from './demos/animation-timeline/animation-timeline';
import { AspectRatioDemo } from './demos/aspect-ratio/aspect-ratio';
import { BaseSelectDemo } from './demos/base-select/base-select';
import { ClampDemo } from './demos/clamp/clamp';
import { ContainerQueries } from './demos/container-queries/container-queries';
import { ContentVisibilityDemo } from './demos/content-visibility/content-visibility';
import { FontVariantNumericDemo } from './demos/font-variant-numeric/font-variant-numeric';
import { HighlightDemo } from './demos/highlight/highlight';
import { HyphensDemo } from './demos/hyphens/hyphens';
import { LightDarkDemo } from './demos/light-dark/light-dark';
import { ShapeOutsideDemo } from './demos/mask-wrap/shape-outside';
import { ScrollBehaviorDemo } from './demos/scroll-behavior/scroll-behavior';
import { ScrollSnap } from './demos/scroll-snap/scroll-snap';
import { ScrollStateDemo } from './demos/scroll-state/scroll-state';
import { ViewTransitionDemo } from './demos/view-transition/view-transition';

/**
 * Single source of truth for every feature: the nav entry, its URL path and
 * the component rendered for it. Keep this list alphabetically sorted by label.
 */
export interface DemoDefinition extends DemoEntry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: Type<any>;
}

export const DEMOS: DemoDefinition[] = [
  {
    id: 'animation-timeline',
    label: 'Animation Timeline',
    cssProperty: 'animation-timeline',
    component: AnimationTimeline,
  },
  {
    id: 'aspect-ratio',
    label: 'Aspect Ratio',
    cssProperty: 'aspect-ratio',
    component: AspectRatioDemo,
  },
  {
    id: 'base-select',
    label: 'Base Select',
    cssProperty: 'appearance: base-select',
    component: BaseSelectDemo,
  },
  {
    id: 'clamp',
    label: 'Clamp',
    cssProperty: 'clamp()',
    component: ClampDemo,
  },
  {
    id: 'container-queries',
    label: 'Container Queries',
    cssProperty: 'container-name',
    component: ContainerQueries,
  },
  {
    id: 'content-visibility',
    label: 'Content Visibility',
    cssProperty: 'content-visibility',
    component: ContentVisibilityDemo,
  },
  {
    id: 'font-variant-numeric',
    label: 'Font Variant Numeric',
    cssProperty: 'font-variant-numeric',
    component: FontVariantNumericDemo,
  },
  {
    id: 'highlight',
    label: 'Highlight',
    cssProperty: '::highlight()',
    component: HighlightDemo,
  },
  {
    id: 'hyphens',
    label: 'Hyphens',
    cssProperty: 'hyphens',
    component: HyphensDemo,
  },
  {
    id: 'light-dark',
    label: 'Light Dark',
    cssProperty: 'light-dark()',
    component: LightDarkDemo,
  },
  {
    id: 'scroll-behavior',
    label: 'Scroll Behavior',
    cssProperty: 'scroll-behavior',
    component: ScrollBehaviorDemo,
  },
  {
    id: 'scroll-snap',
    label: 'Scroll Snap',
    cssProperty: 'scroll-snap-type',
    component: ScrollSnap,
  },
  {
    id: 'scroll-state',
    label: 'Scroll State',
    cssProperty: '@container scroll-state()',
    component: ScrollStateDemo,
  },
  {
    id: 'shape-outside',
    label: 'Shape Outside',
    cssProperty: 'shape-outside',
    component: ShapeOutsideDemo,
  },
  {
    id: 'view-transition',
    label: 'View Transition',
    cssProperty: '@view-transition',
    component: ViewTransitionDemo,
  },
];

export const routes: Routes = [
  ...DEMOS.map((demo) => ({
    path: demo.id,
    component: demo.component,
    title: `${demo.label} · CSSsome`,
  })),
  { path: '', pathMatch: 'full' as const, redirectTo: DEMOS[0].id },
  { path: '**', redirectTo: DEMOS[0].id },
];
