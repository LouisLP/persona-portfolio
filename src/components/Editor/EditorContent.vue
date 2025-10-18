<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// Motion graphics gallery items
const motionGraphics = [
  {
    title: 'Brand Animation',
    filename: 'Alienware_Hotseat_Proxyfox.gif',
    description: 'Dynamic brand identity motion graphics',
  },
  {
    title: 'Logo Reveal',
    filename: 'Clash_Team_Announcement.gif',
    description: 'Cinematic logo animation sequence',
  },
  {
    title: 'Motion Graphics',
    filename: 'Zipchair_Hotseat_Karayan.gif',
    description: 'Creative motion design elements',
  },
  {
    title: 'Typography Motion',
    filename: 'Pep_and_Pup.gif',
    description: 'Animated typography and text effects',
  },
  {
    title: 'Transition Effects',
    filename: 'CLG_Overwatch_Intro.gif',
    description: 'Smooth transition animations for video content',
  },
  {
    title: 'Visual Effects',
    filename: 'Yas_or_Nah.gif',
    description: 'Complex visual effects and compositing',
  },
]
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
          My Editing Journey
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

    <!-- Motion Graphics Gallery -->
    <section>
      <h3 class="mb-8 text-center text-2xl font-bold" :style="{ color: personaStore.theme.accent }">
        Motion Graphics Showcase
      </h3>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in motionGraphics"
          :key="item.filename"
          class="group relative overflow-hidden rounded-lg bg-black/50 transition-all duration-100 hover:scale-105 hover:transform"
          :style="{ borderColor: personaStore.theme.accent + '30' }"
        >
          <!-- GIF Container -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="`/motion_graphics_gifs/${item.filename}`"
              :alt="item.title"
              class="size-full object-cover transition-transform duration-100 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
