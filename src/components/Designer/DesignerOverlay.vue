<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
</script>

<template>
  <!-- Designer: Grid overlay -->
  <aside
    class="pointer-events-none absolute inset-0 opacity-5"
    :style="{
      backgroundImage: `linear-gradient(${personaStore.theme.accent} 1px, transparent 1px), linear-gradient(90deg, ${personaStore.theme.accent} 1px, transparent 1px)`,
      backgroundSize: '60px 60px',
    }"
  />
</template>
