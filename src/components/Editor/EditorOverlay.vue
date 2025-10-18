<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
</script>

<template>
  <!-- Editor: Film strip on sides -->

  <!-- Part 1: LEFT -->
  <aside class="pointer-events-none absolute inset-y-0 left-0 w-6 opacity-5 sm:w-8 md:w-12">
    <!-- Left film strip -->
    <div class="h-full w-full" :style="{ backgroundColor: personaStore.theme.accent }">
      <div
        class="h-full w-full"
        :style="{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 15px, ${personaStore.theme.background} 15px, ${personaStore.theme.background} 25px)`,
        }"
      />
    </div>
  </aside>

  <!-- Part 2: RIGHT -->
  <aside class="pointer-events-none absolute inset-y-0 right-0 w-6 opacity-5 sm:w-8 md:w-12">
    <!-- Right film strip -->
    <div class="h-full w-full" :style="{ backgroundColor: personaStore.theme.accent }">
      <div
        class="h-full w-full"
        :style="{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 15px, ${personaStore.theme.background} 15px, ${personaStore.theme.background} 25px)`,
        }"
      />
    </div>
  </aside>
</template>
