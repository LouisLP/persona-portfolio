<script setup lang="ts">
import { ref } from 'vue'
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// Color palette data
const colorScales = [
  { name: 'Primary', colors: ['#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95'] },
  { name: 'Neutral', colors: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626'] },
  { name: 'Semantic', colors: ['#22c55e', '#eab308', '#ef4444', '#3b82f6', '#06b6d4', '#f97316', '#ec4899', '#8b5cf6', '#14b8a6'] },
]

// Typography scale
const typeScale = [
  { name: 'Display', size: '3.5rem', weight: '900', tracking: '-0.02em', sample: 'Design System' },
  { name: 'Heading 1', size: '2.25rem', weight: '700', tracking: '-0.015em', sample: 'Page Heading' },
  { name: 'Heading 2', size: '1.875rem', weight: '700', tracking: '-0.01em', sample: 'Section Title' },
  { name: 'Heading 3', size: '1.5rem', weight: '600', tracking: '0', sample: 'Subsection' },
  { name: 'Body Large', size: '1.125rem', weight: '400', tracking: '0', sample: 'Body text for emphasis and lead paragraphs.' },
  { name: 'Body', size: '1rem', weight: '400', tracking: '0', sample: 'Standard body text for readability.' },
  { name: 'Caption', size: '0.875rem', weight: '500', tracking: '0.01em', sample: 'Small labels and metadata' },
  { name: 'Overline', size: '0.75rem', weight: '600', tracking: '0.08em', sample: 'OVERLINE TEXT', uppercase: true },
]

// Spacing tokens
const spacingTokens = [
  { name: '4', value: '4px' },
  { name: '8', value: '8px' },
  { name: '12', value: '12px' },
  { name: '16', value: '16px' },
  { name: '24', value: '24px' },
  { name: '32', value: '32px' },
  { name: '48', value: '48px' },
  { name: '64', value: '64px' },
]

// Border radius tokens
const radiusTokens = [
  { name: 'none', value: '0px' },
  { name: 'sm', value: '4px' },
  { name: 'md', value: '8px' },
  { name: 'lg', value: '12px' },
  { name: 'xl', value: '16px' },
  { name: '2xl', value: '24px' },
  { name: 'full', value: '9999px' },
]

// Motion / easing tokens
const easingTokens = [
  { name: 'ease-out', css: 'cubic-bezier(0, 0, 0.2, 1)', description: 'Decelerating — enters fast, exits slow' },
  { name: 'ease-in-out', css: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth — natural and balanced' },
  { name: 'spring', css: 'cubic-bezier(0.34, 1.56, 0.64, 1)', description: 'Bouncy — playful overshoot' },
]

const durationTokens = [
  { name: 'instant', value: '100ms', label: 'Micro interactions' },
  { name: 'fast', value: '200ms', label: 'Hover states, toggles' },
  { name: 'normal', value: '300ms', label: 'Page transitions' },
  { name: 'slow', value: '500ms', label: 'Complex animations' },
]

// Animation preview state
const activeEasing = ref(0)
const animatingBalls = ref<Record<number, boolean>>({})

function triggerMotionPreview(index: number) {
  animatingBalls.value[index] = true
  const duration = index === 0 ? 600 : index === 1 ? 600 : 800
  setTimeout(() => {
    animatingBalls.value[index] = false
  }, duration)
}
</script>

<template>
  <div class="mx-auto space-y-20 px-6 py-16 md:container md:px-16">
    <!-- Section Intro -->
    <section class="space-y-4">
      <BaseTitle>Design Process</BaseTitle>
      <p class="text-lg leading-relaxed text-gray-300">
        Great interfaces start with a well-defined design system. The foundational building blocks usually start as a sketch or on Figma. However, this showcase is a bit of a unique case, so here's a visual representation of the tokens, scales, and principles that go into my design process.
      </p>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- DESIGN TOKENS -->
    <!-- ═══════════════════════════════════════ -->
    <section class="space-y-10">
      <div class="space-y-2">
        <BaseSubtitle>Design Tokens</BaseSubtitle>
        <p class="text-gray-400">
          The atomic values that keep a system consistent are spacing, sizing, and radii.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Spacing -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Spacing Scale
          </h4>
          <div class="space-y-3">
            <p class="text-gray-400">
              It's good practice to set things in <code>rem</code> values for scalability, but here are the pixel equivalents for reference (where the normal browser default has <code>1rem</code> equal to <code>16px</code>).
            </p>
            <div
              v-for="token in spacingTokens"
              :key="token.name"
              class="flex items-center gap-4"
            >
              <code class="w-16 shrink-0 text-sm text-gray-500">{{ token.value }}</code>
              <div
                class="h-3 rounded-sm transition-all duration-300"
                :style="{
                  width: token.value,
                  backgroundColor: personaStore.theme.primary,
                  opacity: 0.8,
                }"
              />
            </div>
          </div>
        </div>

        <!-- Border Radius -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Border Radius
          </h4>
          <div class="flex flex-wrap gap-4">
            <p class="text-gray-400">
              Here are some typical border radius tokens. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape" class="text-blue-500 hover:text-blue-400">Corner-shape</a> is a powerful tool in modern CSS, but unfortunately not yet available in my main browser (Firefox).
            </p>
            <div
              v-for="radius in radiusTokens"
              :key="radius.name"
              class="flex flex-col items-center gap-2"
            >
              <div
                class="size-16 border-2 transition-colors duration-300"
                :style="{
                  borderRadius: radius.value,
                  borderColor: personaStore.theme.accent,
                  backgroundColor: `${personaStore.theme.primary}1a`,
                }"
              />
              <div class="text-center">
                <p class="text-xs font-medium text-gray-300">
                  {{ radius.name }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ radius.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- COLOURS -->
    <!-- ═══════════════════════════════════════ -->
    <section class="space-y-10">
      <div class="space-y-2">
        <BaseSubtitle>Colour Palette</BaseSubtitle>
        <p class="text-gray-400">
          A deliberate palette built from a primary scale, neutrals, and semantic colours for feedback states.
        </p>
      </div>

      <div class="space-y-8">
        <div v-for="scale in colorScales" :key="scale.name" class="space-y-3">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {{ scale.name }}
          </h4>
          <div class="flex gap-1 overflow-hidden rounded-xl">
            <div
              v-for="(color, i) in scale.colors"
              :key="i"
              class="group relative h-16 flex-1 transition-all duration-200 hover:flex-2"
              :style="{ backgroundColor: color }"
            >
              <!-- Color code tooltip on hover -->
              <span
                class="absolute inset-x-0 bottom-0 bg-black/70 px-1 py-0.5 text-center text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                {{ color }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- TYPOGRAPHY -->
    <!-- ═══════════════════════════════════════ -->
    <section class="space-y-10">
      <div class="space-y-2">
        <BaseSubtitle>Typography Scale</BaseSubtitle>
        <p class="text-gray-400">
          A modular type scale for hierarchy and readability. Each level has defined size, weight, and tracking.
        </p>
      </div>

      <div class="space-y-1">
        <div
          v-for="level in typeScale"
          :key="level.name"
          class="group flex flex-col gap-2 rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-white/5 md:flex-row md:items-baseline md:gap-6"
        >
          <!-- Meta -->
          <div class="flex shrink-0 items-baseline gap-3 md:w-48">
            <span class="text-sm font-medium text-gray-400">{{ level.name }}</span>
            <span class="text-xs text-gray-600">{{ level.size }}</span>
          </div>
          <!-- Sample -->
          <p
            class="truncate text-white transition-colors duration-200 group-hover:text-purple-200"
            :class="{ uppercase: level.uppercase }"
            :style="{
              fontSize: level.size,
              fontWeight: level.weight,
              letterSpacing: level.tracking,
              fontFamily: `var(--font-designer)`,
            }"
          >
            {{ level.sample }}
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════ -->
    <!-- MOTION -->
    <!-- ═══════════════════════════════════════ -->
    <section class="space-y-10">
      <div class="space-y-2">
        <BaseSubtitle>Motion &amp; Easing</BaseSubtitle>
        <p class="text-gray-400">
          Purposeful motion creates personality without distraction. Defined curves and durations keep animations consistent.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Easing curves -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Easing Curves
          </h4>
          <div class="space-y-3">
            <button
              v-for="(easing, index) in easingTokens"
              :key="easing.name"
              class="group flex w-full cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 transition-colors duration-200"
              :class="activeEasing === index
                ? 'border-purple-500/40 bg-purple-500/10'
                : 'border-white/5 bg-white/2 hover:border-white/10 hover:bg-white/5'"
              @click="activeEasing = index; triggerMotionPreview(index)"
            >
              <div class="flex-1 text-left">
                <p class="text-sm font-medium text-white">
                  {{ easing.name }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ easing.description }}
                </p>
              </div>
              <code class="hidden text-xs text-gray-600 lg:block">{{ easing.css }}</code>
            </button>
          </div>

          <!-- Motion preview track -->
          <div class="relative mt-6 h-10 overflow-hidden rounded-full bg-white/5">
            <div
              class="absolute top-1 left-1 size-8 rounded-full"
              :style="{
                backgroundColor: personaStore.theme.primary,
                transform: animatingBalls[activeEasing] ? 'translateX(calc(100cqw - 2.5rem))' : 'translateX(0)',
                transition: animatingBalls[activeEasing]
                  ? `transform ${activeEasing === 2 ? '800ms' : '600ms'} ${easingTokens[activeEasing]?.css}`
                  : 'none',
                containerType: 'inline-size',
              }"
            />
          </div>
          <p class="text-center text-xs text-gray-500">
            Click an easing curve to preview
          </p>
        </div>

        <!-- Duration tokens -->
        <div class="space-y-4">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Duration Tokens
          </h4>
          <div class="space-y-3">
            <div
              v-for="dur in durationTokens"
              :key="dur.name"
              class="flex items-center gap-4 rounded-lg border border-white/5 bg-white/2 px-4 py-3"
            >
              <div class="flex-1">
                <p class="text-sm font-medium text-white">
                  {{ dur.name }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ dur.label }}
                </p>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="h-2 rounded-full"
                  :style="{
                    width: `${parseInt(dur.value) / 5}px`,
                    backgroundColor: personaStore.theme.accent,
                  }"
                />
                <code class="text-xs text-gray-600">{{ dur.value }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
