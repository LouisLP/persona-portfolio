<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <h2
    class="text-3xl font-bold md:text-4xl border-b-4 border-dotted line-clamp-1"
    :class="`font-${personaStore.currentPersona}`"
    :style="{ color: personaStore.theme.accent }"
  >
    <slot />
  </h2>
</template>
