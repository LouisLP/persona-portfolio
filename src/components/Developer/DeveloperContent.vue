<script setup lang="ts">
import BaseTitle from '@/components/Base/BaseTitle.vue'
import CodeBlocks from '@/components/Developer/CodeBlocks.vue'
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Dev Journey"
    description="I'm a full-stack developer with a focus toward frontend work, where I can bridge creative and technical thinking to build experiences that feel intuitive for both users and developers. I'm passionate about crafting interfaces that are thoughtful to use and maintainable to build."
  />

  <div class="mx-auto space-y-16 px-6 py-16 md:container md:px-16">
    <!-- Code Intro -->
    <section>
      <BaseTitle class="mb-8">
        "Code" Blocks
      </BaseTitle>

      <CodeBlocks />
    </section>

    <!-- Coding Tenets -->
    <section>
      <BaseTitle class="mb-8">
        Coding Tenets
      </BaseTitle>
    </section>
  </div>
</template>
