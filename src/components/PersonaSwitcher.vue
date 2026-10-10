<script setup lang="ts">
import { PERSONAS } from '@/stores/persona'
</script>

<template>
  <nav
    aria-label="Persona"
    class="fixed top-6 left-1/2 z-50 -translate-x-1/2 lg:top-8 lg:right-8 lg:left-auto lg:translate-x-0"
  >
    <ul class="flex gap-1 rounded-lg border border-line bg-canvas p-1">
      <li v-for="persona in PERSONAS" :key="persona">
        <RouterLink
          :to="`/${persona}`"
          class="block rounded-md px-3 py-1.5 text-sm font-medium capitalize text-ink-muted transition-colors duration-200 hover:bg-surface hover:text-ink lg:px-4"
          exact-active-class="bg-accent! text-canvas!"
        >
          {{ persona }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
