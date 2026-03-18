<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { durationTokens } from '@/components/Designer/DesignProcess/designTokens'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

/**
 * Each row showcases one easing curve via a dedicated CSS animation name.
 * The animations are defined in the <style> block below and loop infinitely,
 * so there's no JS state or click handling needed.
 */
const easingShowcase = [
  {
    name: 'ease-out',
    css: 'cubic-bezier(0, 0, 0.2, 1)',
    description: 'Decelerating: enters fast, settles smoothly',
    animationClass: 'animate-ease-out',
  },
  {
    name: 'ease-in-out',
    css: 'cubic-bezier(0.4, 0, 0.2, 1)',
    description: 'Balanced: natural and unhurried',
    animationClass: 'animate-ease-in-out',
  },
]
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Motion &amp; Easing</BaseSubtitle>
      <p class="text-gray-400">
        Purposeful motion creates personality without distraction. Each curve below
        loops continuously so you can feel how it moves — not just read about it.
      </p>
    </div>

    <div class="grid gap-12 lg:grid-cols-2">
      <!-- ── Easing Showcase ── -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Easing Curves
        </h4>

        <div class="space-y-4">
          <div
            v-for="easing in easingShowcase"
            :key="easing.name"
            class="rounded-lg border border-white/5 bg-white/2 px-4 py-3 space-y-3"
          >
            <!-- Label row -->
            <div class="flex items-baseline justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-white">
                  {{ easing.name }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ easing.description }}
                </p>
              </div>
              <code class="hidden shrink-0 text-xs text-gray-600 lg:block">{{ easing.css }}</code>
            </div>

            <!-- Track -->
            <!--
              Ball travels left: 4px → calc(100% - 1.75rem) via @keyframes slide-across.
              Each class applies the same keyframes with a different timing-function.
              `alternate` direction reverses cleanly; animation-delay offsets the three
              balls so they're never perfectly in sync, which looks more natural.
            -->
            <div class="relative h-8 overflow-hidden rounded-full bg-white/5">
              <div
                class="absolute top-1 size-6 rounded-full"
                :class="easing.animationClass"
                :style="{ backgroundColor: personaStore.theme.primary }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ── Duration Tokens ── -->
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
            <div class="flex items-center gap-3">
              <!-- Bar length proportional to duration — 500ms maps to ~125px -->
              <div
                class="h-2 rounded-full"
                :style="{
                  width: `${parseInt(dur.value) / 4}px`,
                  backgroundColor: personaStore.theme.accent,
                }"
              />
              <code class="w-14 text-right text-xs text-gray-600">{{ dur.value }}</code>
            </div>
          </div>
        </div>

        <!-- Pulse demo — illustrates the "normal" 300ms token in context -->
        <div class="mt-6 space-y-2">
          <p class="text-xs font-semibold uppercase tracking-widest text-gray-600">
            Live pulse · 300ms
          </p>
          <div class="flex items-center gap-3">
            <div
              class="size-3 rounded-full animate-pulse-dot"
              :style="{ backgroundColor: personaStore.theme.accent }"
            />
            <span class="text-xs text-gray-500">Typical loading / presence indicator</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  All three tracks share one keyframe definition. The timing-function is what
  differs — it's set per class so the perceived character of each curve is clear.
  `alternate` reverses at the end of each cycle instead of jumping back to start.
  `both` fill-mode keeps the ball at the `from` position before the first frame.
*/

@keyframes slide-across {
  from { left: 4px; }
  to   { left: calc(100% - 1.75rem); }
}

.animate-ease-out {
  animation: slide-across 700ms cubic-bezier(0, 0, 0.2, 1) infinite alternate both;
}

.animate-ease-in-out {
  animation: slide-across 700ms cubic-bezier(0.4, 0, 0.2, 1) infinite alternate both;
  animation-delay: -350ms;
}

.animate-spring {
  animation: slide-across 900ms cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate both;
  animation-delay: -200ms;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1;    transform: scale(1); }
  50%       { opacity: 0.35; transform: scale(0.7); }
}

.animate-pulse-dot {
  animation: pulse-dot 300ms ease-in-out infinite;
}
</style>
