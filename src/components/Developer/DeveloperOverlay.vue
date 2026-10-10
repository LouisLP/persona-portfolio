<script setup lang="ts">
const LINE_COUNT = 50
</script>

<template>
  <!-- Developer: Code line numbers -->
  <aside
    aria-hidden="true"
    class="pointer-events-none absolute top-0 left-0 h-full w-16 select-none text-ink-subtle opacity-40"
  >
    <div class="flex h-full flex-col justify-start pt-8 font-mono text-xs leading-6">
      <div v-for="n in LINE_COUNT" :key="n" class="px-2">
        {{ n.toString().padStart(2, '0') }}
      </div>
    </div>
  </aside>
</template>
