<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <h2
    class="px-6 text-3xl font-bold md:text-4xl"
    :class="`font-${personaStore.currentPersona}`"
    :style="{ color: personaStore.theme.accent }"
  >
    <slot />
  </h2>
</template>
