<script setup lang="ts">
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
import CodeBlock from '@/components/Developer/CodeBlock.vue'
import TechStack from '@/components/Developer/TechStack.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Developer Journey"
    description="I'm a full-stack developer with a focus toward frontend work, where I can bridge creative and technical thinking to build experiences that feel intuitive for both users and developers. I'm passionate about crafting interfaces that are thoughtful to use and maintainable to build."
  />

  <!-- Content container -->
  <div class="container space-y-12">
    <!-- Code intro -->
    <section class="flex justify-center">
      <CodeBlock />
    </section>

    <!-- Preferred tech stack (Vue, TypeScript, Vite, Node, Tailwind) -->
    <section class="text-center">
      <TechStack />
    </section>

    <!-- WIP -->
    <section class="py-12 text-center">
      <p class="text-lg italic opacity-80 md:text-xl">This is a work in progress.</p>
      <p class="text-base italic opacity-40 md:text-lg">
        More developer content coming soon! Stay tuned.
      </p>
    </section>
  </div>
</template>
