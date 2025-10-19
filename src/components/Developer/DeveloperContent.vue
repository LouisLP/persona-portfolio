<script setup lang="ts">
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
import CodeBlock from '@/components/Developer/CodeBlock.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Developer Journey"
    description="I'm a full-stack developer with a focus toward frontend work, where I can bridge creative and technical thinking to build experiences that feel intuitive for both users and developers. I'm passionate about crafting interfaces that are thoughtful to use and maintainable to build."
  />

  <!-- Code intro -->
  <section class="flex justify-center">
    <CodeBlock />
  </section>
</template>
