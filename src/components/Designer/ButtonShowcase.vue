<script setup lang="ts">
import { ref, type Component } from 'vue'

interface Props {
  title: string
  description: string
  buttonComponent: Component
  gradientFrom: string
  gradientVia: string
  gradientTo: string
  variants?: string[]
  sizes?: string[]
  showStates?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variants: () => ['glass', 'solid', 'outline', 'ghost'],
  sizes: () => ['compact', 'normal', 'large'],
  showStates: true,
})

const loadingStates = ref<Record<string, boolean>>({})

// Initialize loading states for variants
props.variants.forEach((variant) => {
  loadingStates.value[variant] = false
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl px-6 py-12"
    :class="`bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-8 left-8 h-24 w-24 rounded-full bg-white/10 blur-xl"></div>
      <div class="absolute right-12 bottom-12 h-20 w-20 rounded-full bg-white/15 blur-lg"></div>
      <div
        class="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"
      ></div>
    </div>

    <!-- Button content -->
    <div class="relative space-y-10">
      <div>
        <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
        <p class="text-white/80">{{ description }}</p>
      </div>

      <!-- Button variants with responsive grid -->
      <div class="space-y-6">
        <!-- Grid that shows all variants in a row on large screens, 2x2 on smaller -->
        <div
          class="grid gap-3"
          :class="
            variants.length === 4
              ? 'grid-cols-2 lg:grid-cols-4'
              : variants.length === 3
                ? 'grid-cols-1 sm:grid-cols-3'
                : 'grid-cols-2'
          "
        >
          <component
            :is="buttonComponent"
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            :loading="loadingStates[variant]"
            class="w-full justify-center"
          >
            {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
          </component>
        </div>
      </div>
    </div>
  </div>
</template>
