<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { colorScales } from '@/components/Designer/DesignProcess/designTokens'

/** Returns black or white depending on perceived luminance of a hex color. */
function contrastColor(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  // Perceived luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? '#000000' : '#ffffff'
}
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Colour Palette</BaseSubtitle>
      <p class="text-gray-400">
        A deliberate palette built from a primary scale, neutrals, and semantic colours
        for feedback states. Hover a swatch to inspect its hex value.
      </p>
    </div>

    <div class="space-y-8">
      <div
        v-for="scale in colorScales"
        :key="scale.name"
        class="space-y-3"
      >
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {{ scale.name }}
        </h4>

        <div class="flex gap-1 overflow-hidden rounded-xl">
          <div
            v-for="(color, i) in scale.colors"
            :key="i"
            class="group relative h-16 flex-1 cursor-default transition-all duration-200 hover:flex-2"
            :style="{ backgroundColor: color }"
          >
            <span
              class="absolute inset-x-0 bottom-0 px-1 py-0.5 text-center text-[10px] font-medium
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              :style="{ color: contrastColor(color) }"
            >
              {{ color }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
