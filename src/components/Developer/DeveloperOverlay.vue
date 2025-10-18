<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
</script>

<template>
  <!-- Developer: Code line numbers -->
  <aside class="pointer-events-none absolute top-0 left-0 h-full w-16 opacity-20 select-none">
    <div
      class="flex h-full flex-col justify-start pt-8 font-mono text-xs leading-6"
      :style="{ color: personaStore.theme.accent }"
    >
      <div v-for="n in 50" :key="n" class="px-2">{{ n.toString().padStart(2, '0') }}</div>
    </div>
  </aside>
</template>
