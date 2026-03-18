<script setup lang="ts">
import { ref } from 'vue'
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { durationTokens, easingTokens } from '@/components/Designer/DesignProcess/designTokens'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// Which easing card is selected
const activeIndex = ref(0)
// Which index is currently mid-animation (null when idle)
const animatingIndex = ref<number | null>(null)

function triggerPreview(index: number) {
  activeIndex.value = index
  // Reset first so re-clicking the same card re-runs the animation
  animatingIndex.value = null
  // rAF ensures the reset paint happens before we start again
  requestAnimationFrame(() => {
    animatingIndex.value = index
    setTimeout(() => {
      animatingIndex.value = null
    }, easingTokens[index].duration + 50)
  })
}

// The ball is positioned with `left`. It starts at 4px (the gap from track edge)
// and ends at calc(100% - 2.25rem) — track width minus ball width minus gap.
// Using `left` avoids the translateX(100%) pitfall where 100% = the element's
// own width rather than the parent's width.
function ballStyle(index: number) {
  const isActive = animatingIndex.value === index
  const easing = easingTokens[index]

  return {
    backgroundColor: personaStore.theme.primary,
    left: isActive ? 'calc(100% - 2.25rem)' : '4px',
    transition: isActive
      ? `left ${easing.duration}ms ${easing.css}`
      : 'none',
  }
}
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Motion &amp; Easing</BaseSubtitle>
      <p class="text-gray-400">
        Purposeful motion creates personality without distraction. Defined curves and durations
        keep animations consistent across the whole interface.
      </p>
    </div>

    <div class="grid gap-12 lg:grid-cols-2">
      <!-- ── Easing Curves ── -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Easing Curves
        </h4>

        <div class="space-y-3">
          <button
            v-for="(easing, index) in easingTokens"
            :key="easing.name"
            type="button"
            class="group flex w-full cursor-pointer items-center gap-4 rounded-lg border
                   px-4 py-3 text-left transition-colors duration-200"
            :class="activeIndex === index
              ? 'border-purple-500/40 bg-purple-500/10'
              : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/5'"
            @click="triggerPreview(index)"
          >
            <div class="flex-1">
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

        <!-- Preview track -->
        <!--
          Ball uses `left` instead of `translateX` because inside an absolute-positioned child,
          translateX(100%) refers to the child's own width (32px), not the parent track's width.
          With `left`, calc(100% - 2.25rem) correctly references the parent's width.
        -->
        <div
          v-for="(easing, index) in easingTokens"
          :key="`track-${easing.name}`"
          class="relative mt-3 h-10 overflow-hidden rounded-full bg-white/5"
          :class="activeIndex !== index ? 'hidden' : ''"
        >
          <div
            class="absolute top-1 size-8 rounded-full"
            :style="ballStyle(index)"
          />
        </div>

        <p class="text-center text-xs text-gray-500">
          Click an easing curve to preview · click again to replay
        </p>
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
            class="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
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
              <!-- Visual bar proportional to duration value -->
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
      </div>
    </div>
  </section>
</template>
