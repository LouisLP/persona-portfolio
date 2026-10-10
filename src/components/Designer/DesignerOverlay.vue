<template>
  <!-- Designer: Grid overlay -->
  <aside aria-hidden="true" class="design-grid pointer-events-none absolute inset-0" />
</template>

<style scoped>
.design-grid {
  opacity: 0.06;
  background-image:
    linear-gradient(var(--ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--ink) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
