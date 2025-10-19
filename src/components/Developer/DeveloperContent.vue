<script setup lang="ts">
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
import CodeBlock from '@/components/Developer/CodeBlock.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Developer Journey"
    description="As a developer, my journey has been marked by continuous learning and adaptation. What started as curiosity about how things work has evolved into a passion for building user-centric applications with clean, efficient code."
  />

  <!-- Code intro -->
  <section class="flex justify-center">
    <CodeBlock />
  </section>
</template>
