// ─── Types ───────────────────────────────────────────────────────────────────

export interface ColorSwatch {
  /** The oklch() string used directly in CSS */
  oklch: string
}

export interface ColorScale {
  name: string
  description: string
  colors: ColorSwatch[]
}

// ─── Colour Scales ───────────────────────────────────────────────────────────

export const colorScales: ColorScale[] = [
  {
    name: 'Violet',
    description: 'I\'m using a different colour for each "persona" on this portfolio, and violet is the design one',
    colors: [
      { oklch: 'oklch(97% 0.03 290)' },
      { oklch: 'oklch(92% 0.07 290)' },
      { oklch: 'oklch(84% 0.12 290)' },
      { oklch: 'oklch(74% 0.17 290)' },
      { oklch: 'oklch(63% 0.22 290)' },
      { oklch: 'oklch(52% 0.22 290)' },
      { oklch: 'oklch(42% 0.20 290)' },
      { oklch: 'oklch(32% 0.16 290)' },
      { oklch: 'oklch(22% 0.10 290)' },
    ],
  },
  {
    name: 'Slate',
    description: 'Cool neutral, Tailwind\'s colour system has some good inspiration',
    colors: [
      { oklch: 'oklch(98% 0.005 250)' },
      { oklch: 'oklch(93% 0.01  250)' },
      { oklch: 'oklch(85% 0.015 250)' },
      { oklch: 'oklch(72% 0.02  250)' },
      { oklch: 'oklch(58% 0.02  250)' },
      { oklch: 'oklch(44% 0.018 250)' },
      { oklch: 'oklch(33% 0.015 250)' },
      { oklch: 'oklch(22% 0.01  250)' },
      { oklch: 'oklch(13% 0.005 250)' },
    ],
  },
  {
    name: 'Teal',
    description: 'Secondary accent that\'s a bit more distinct than a regular blue',
    colors: [
      { oklch: 'oklch(96% 0.04 190)' },
      { oklch: 'oklch(89% 0.09 190)' },
      { oklch: 'oklch(80% 0.14 190)' },
      { oklch: 'oklch(70% 0.18 190)' },
      { oklch: 'oklch(60% 0.20 190)' },
      { oklch: 'oklch(50% 0.19 190)' },
      { oklch: 'oklch(40% 0.16 190)' },
      { oklch: 'oklch(30% 0.12 190)' },
      { oklch: 'oklch(20% 0.07 190)' },
    ],
  },
  {
    name: 'Semantic',
    description: 'Status colours — each at oklch L≈60% so they read as equally prominent',
    colors: [
      { oklch: 'oklch(60% 0.20 145)' }, // success green
      { oklch: 'oklch(60% 0.18  85)' }, // warning amber
      { oklch: 'oklch(60% 0.22  25)' }, // error red
      { oklch: 'oklch(60% 0.18 250)' }, // info blue
      { oklch: 'oklch(60% 0.20 190)' }, // teal
      { oklch: 'oklch(60% 0.22  50)' }, // orange
      { oklch: 'oklch(60% 0.22 340)' }, // pink
      { oklch: 'oklch(60% 0.22 290)' }, // violet (matches primary)
      { oklch: 'oklch(60% 0.18 170)' }, // mint
    ],
  },
]

// ─── Typography ──────────────────────────────────────────────────────────────

export const typeScale = [
  { name: 'Display', size: '3.5rem', weight: '900', tracking: '-0.02em', sample: 'Design System' },
  { name: 'Heading 1', size: '2.25rem', weight: '700', tracking: '-0.015em', sample: 'Page Heading' },
  { name: 'Heading 2', size: '1.875rem', weight: '700', tracking: '-0.01em', sample: 'Section Title' },
  { name: 'Heading 3', size: '1.5rem', weight: '600', tracking: '0', sample: 'Subsection' },
  { name: 'Body Large', size: '1.125rem', weight: '400', tracking: '0', sample: 'Body text for emphasis and lead paragraphs.' },
  { name: 'Body', size: '1rem', weight: '400', tracking: '0', sample: 'Standard body text for readability.' },
  { name: 'Caption', size: '0.875rem', weight: '500', tracking: '0.01em', sample: 'Small labels and metadata' },
  { name: 'Overline', size: '0.75rem', weight: '600', tracking: '0.08em', sample: 'OVERLINE TEXT', uppercase: true },
]

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const spacingTokens = [
  { name: '4', value: '4px' },
  { name: '8', value: '8px' },
  { name: '12', value: '12px' },
  { name: '16', value: '16px' },
  { name: '24', value: '24px' },
  { name: '32', value: '32px' },
  { name: '48', value: '48px' },
  { name: '64', value: '64px' },
]

// ─── Border Radius ────────────────────────────────────────────────────────────

export const radiusTokens = [
  { name: 'none', value: '0px' },
  { name: 'sm', value: '4px' },
  { name: 'md', value: '8px' },
  { name: 'lg', value: '12px' },
  { name: 'xl', value: '16px' },
  { name: '2xl', value: '24px' },
  { name: 'full', value: '9999px' },
]

// ─── Elevation / Shadow ───────────────────────────────────────────────────────

export const shadowTokens = [
  {
    name: 'sm',
    value: '0 1px 3px rgba(0,0,0,0.4)',
    label: 'Subtle lift',
    description: 'Cards, inputs',
  },
  {
    name: 'md',
    value: '0 4px 12px rgba(0,0,0,0.5)',
    label: 'Moderate depth',
    description: 'Dropdowns, popovers',
  },
  {
    name: 'lg',
    value: '0 8px 32px rgba(0,0,0,0.6)',
    label: 'Strong separation',
    description: 'Modals, drawers',
  },
  {
    name: 'glow',
    value: '0 0 20px oklch(63% 0.22 290 / 0.4)',
    label: 'Accent glow',
    description: 'Focus rings, CTAs',
  },
]

// ─── Motion ───────────────────────────────────────────────────────────────────

export const easingTokens = [
  {
    name: 'ease-out',
    css: 'cubic-bezier(0, 0, 0.2, 1)',
    description: 'Decelerating: enters fast, settles smoothly',
    duration: 600,
  },
  {
    name: 'ease-in-out',
    css: 'cubic-bezier(0.4, 0, 0.2, 1)',
    description: 'Balanced: natural and unhurried',
    duration: 600,
  },
]

export const durationTokens = [
  { name: 'fast', value: '200ms', label: 'Hover states, toggles' },
  { name: 'normal', value: '300ms', label: 'Page transitions' },
  { name: 'slow', value: '500ms', label: 'Complex animations' },
]
