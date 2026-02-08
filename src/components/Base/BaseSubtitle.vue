<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <h3
    class="text-2xl font-bold md:text-3xl line-clamp-1"
    :class="`font-${personaStore.currentPersona}`"
    :style="{ color: personaStore.theme.accent }"
  >
    <slot />
  </h3>
</template>
