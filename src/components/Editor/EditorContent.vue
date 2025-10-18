<script setup lang="ts">
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
    <!-- Editor Introduction -->
    <section class="mx-auto max-w-4xl text-center">
      <h2 class="font-editor mb-6 text-4xl font-bold" :style="{ color: personaStore.theme.accent }">
        Motion Graphics & Video Editing
      </h2>
      <p class="text-lg leading-relaxed opacity-90" :style="{ color: personaStore.theme.text }">
        From 2017-2021, I worked as a professional video editor and motion designer in the esports
        industry, creating content for premier teams across Los Angeles and Berlin. Here's a
        showcase of motion graphics work.
      </p>
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
