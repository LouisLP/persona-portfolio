<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { colorScales } from '@/components/Designer/DesignProcess/designTokens'

/**
 * Returns black or white for readable tooltip text against any swatch.
 * Works for both hex and oklch strings by rendering to a canvas pixel.
 * Falls back to white if the environment doesn't support canvas (SSR).
 */
function contrastColor(color: string): string {
  if (typeof document === 'undefined')
    return '#ffffff'

  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return '#ffffff'

  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)

  const data = ctx.getImageData(0, 0, 1, 1).data
  const r = data[0] ?? 0
  const g = data[1] ?? 0
  const b = data[2] ?? 0
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.55 ? '#000000' : '#ffffff'
}
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Colour Palette</BaseSubtitle>
      <p class="text-gray-400 leading-relaxed">
        These palettes are defined in <code class="text-purple-300">oklch</code>, which separates lightness, chroma, and hue.
        Unlike HSL, two colours at the same <code class="text-purple-300">L</code> value will
        actually read as the same brightness regardless of hue, which makes building consistent
        scales and accessible contrast ratios much more predictable on web design. Hover any swatch to see
        its value.
      </p>
    </div>

    <div class="space-y-8">
      <div
        v-for="scale in colorScales"
        :key="scale.name"
        class="space-y-3"
      >
        <div class="flex items-baseline gap-3">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {{ scale.name }}
          </h4>
          <span class="text-xs text-gray-700">{{ scale.description }}</span>
        </div>

        <div class="flex gap-1 overflow-hidden rounded-xl">
          <div
            v-for="(swatch, i) in scale.colors"
            :key="i"
            class="group relative h-8 flex-1 cursor-default transition-all duration-200 hover:flex-2"
            :style="{ backgroundColor: swatch.oklch }"
          >
            <span
              class="absolute inset-x-0 bottom-0 px-1 py-0.5 text-center text-[10px] font-medium
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100 leading-tight"
              :style="{ color: contrastColor(swatch.oklch) }"
            >
              {{ swatch.oklch }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
