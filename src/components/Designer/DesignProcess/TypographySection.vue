<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { typeScale } from '@/components/Designer/DesignProcess/designTokens'
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Typography Scale</BaseSubtitle>
      <p class="text-gray-400">
        A modular type scale for hierarchy and readability. Each level has defined size, weight,
        and letter-spacing. Hover a row to highlight it.
      </p>
    </div>

    <div class="space-y-1">
      <div
        v-for="level in typeScale"
        :key="level.name"
        class="group flex flex-col gap-1 rounded-lg px-4 py-3 transition-colors duration-200
               hover:bg-white/5 md:flex-row md:items-baseline md:gap-6"
      >
        <!-- Meta column -->
        <div class="flex shrink-0 flex-col md:w-52">
          <span class="text-sm font-medium text-gray-400">{{ level.name }}</span>
          <span class="text-xs text-gray-600">
            {{ level.size }} / {{ level.weight }} / {{ level.tracking || '0' }}
          </span>
        </div>

        <!-- Sample -->
        <p
          class="truncate text-white transition-colors duration-200 group-hover:text-purple-200"
          :class="{ uppercase: level.uppercase }"
          :style="{
            fontSize: level.size,
            fontWeight: level.weight,
            letterSpacing: level.tracking,
            fontFamily: 'var(--font-designer)',
          }"
        >
          {{ level.sample }}
        </p>
      </div>
    </div>
  </section>
</template>
