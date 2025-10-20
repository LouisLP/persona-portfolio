<script setup lang="ts">
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
import { usePersonaStore } from '@/stores/persona'
import { useAssetPath } from '@/composables/useAssetPath'

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
  <PersonaGalleryTimeline
    title="My Editing Journey"
    description="I've been editing since I was 10, starting with YouTube guides and eventually transitioning into professional video and motion design work for major esports organizations. That long history of creative storytelling through video gives me a deep intuition for pacing, narrative, and visual impact."
  />

  <!-- Motion Graphics Gallery -->
  <section>
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
            :src="useAssetPath(`/motion_graphics_gifs/${item.filename}`)"
            :alt="item.title"
            class="size-full object-cover transition-transform duration-100 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- WIP -->
  <section class="py-12 text-center">
    <p class="text-lg italic opacity-80 md:text-xl">This is a work in progress.</p>
    <p class="text-base italic opacity-40 md:text-lg">
      More editor content coming soon! Stay tuned.
    </p>
  </section>
</template>
