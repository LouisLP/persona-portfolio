export const colorScales = [
  {
    name: 'Primary',
    colors: ['#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'],
  },
  {
    name: 'Neutral',
    colors: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626'],
  },
  {
    name: 'Semantic',
    colors: ['#22c55e', '#eab308', '#ef4444', '#3b82f6', '#06b6d4', '#f97316', '#ec4899', '#8b5cf6', '#14b8a6'],
  },
]

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

export const radiusTokens = [
  { name: 'none', value: '0px' },
  { name: 'sm', value: '4px' },
  { name: 'md', value: '8px' },
  { name: 'lg', value: '12px' },
  { name: 'xl', value: '16px' },
  { name: '2xl', value: '24px' },
  { name: 'full', value: '9999px' },
]

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
    value: '0 0 20px rgba(139,92,246,0.4)',
    label: 'Accent glow',
    description: 'Focus rings, CTAs',
  },
]

export const easingTokens = [
  {
    name: 'ease-out',
    css: 'cubic-bezier(0, 0, 0.2, 1)',
    description: 'Decelerating — enters fast, exits slow',
    duration: 600,
  },
  {
    name: 'ease-in-out',
    css: 'cubic-bezier(0.4, 0, 0.2, 1)',
    description: 'Smooth — natural and balanced',
    duration: 600,
  },
  {
    name: 'spring',
    css: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    description: 'Bouncy — playful overshoot',
    duration: 800,
  },
]

export const durationTokens = [
  { name: 'instant', value: '100ms', label: 'Micro interactions' },
  { name: 'fast', value: '200ms', label: 'Hover states, toggles' },
  { name: 'normal', value: '300ms', label: 'Page transitions' },
  { name: 'slow', value: '500ms', label: 'Complex animations' },
]
