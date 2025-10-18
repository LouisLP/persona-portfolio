<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import CodeBlock from '@/components/Developer/CodeBlock.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <div class="container mx-auto space-y-20 px-6 py-16">
    <!-- Blurb & Timeline -->
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
      <!-- Blurb Section -->
      <div class="space-y-6 md:col-span-3">
        <h2
          class="text-3xl font-bold md:text-4xl"
          :class="`font-${personaStore.currentPersona}`"
          :style="{ color: personaStore.theme.accent }"
        >
          My Designing Journey
        </h2>

        <div class="space-y-4 text-lg leading-relaxed" :style="{ color: personaStore.theme.text }">
          <p>
            As a developer, my journey has been marked by continuous learning and adaptation. What
            started as curiosity about how things work has evolved into a passion for building
            user-centric applications.
          </p>

          <p>
            My background in creative fields gives me a unique perspective on development – I don't
            just write code, I craft experiences. Every line of code serves a purpose in creating
            something meaningful for users.
          </p>

          <p>
            Currently working as a Software Engineer at Agile Robots, I'm focused on building
            intuitive interfaces for complex robotics systems using Vue.js, TypeScript, and modern
            web technologies.
          </p>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="md:col-span-2">
        <CareerTimeline />
      </div>
    </section>

    <!-- Photo showcase -->
    <PolaroidPhoto />
  </div>
</template>
