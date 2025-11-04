<script setup lang="ts">
import ComponentShowcase from '@/components/Designer/ComponentShowcase.vue'
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Design Journey"
    description="My foundation in Interactive Arts & Technology shaped how I approach design as a holistic process, which I deepened through years of video editing and motion design work. Now I use my design tools to think through the complete user journey, placing myself in the user's, viewer's, or client's shoes."
  />

  <ComponentShowcase />

  <!-- WIP -->
  <section class="py-12 text-center">
    <p class="text-lg italic opacity-80 md:text-xl">This is a work in progress.</p>
    <p class="text-base italic opacity-40 md:text-lg">
      More designer content coming soon! Stay tuned.
    </p>
  </section>
</template>
