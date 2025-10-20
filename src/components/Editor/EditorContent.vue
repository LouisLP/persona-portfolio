<script setup lang="ts">
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
import { usePersonaStore } from '@/stores/persona'
import { useAssetPath } from '@/composables/useAssetPath'

const personaStore = usePersonaStore()

// Motion graphics gallery items
const motionGraphics = [
  {
    title: 'Alienware Hotseat: Proxyfox',
    filename: 'Alienware_Hotseat_Proxyfox.gif',
    description: 'Custom Alienware Hotseat intro',
  },
  {
    title: 'Clash Team Reveal',
    filename: 'Clash_Team_Announcement.gif',
    description: 'Misfits Gaming Clash team reveal',
  },
  {
    title: 'Zipchair Hotseat: Karayan',
    filename: 'Zipchair_Hotseat_Karayan.gif',
    description: 'Assets used throughout the Zipchair Hotseat',
  },
  {
    title: 'Pep & Pup',
    filename: 'Pep_and_Pup.gif',
    description: 'Local pet brand promotional intro',
  },
  {
    title: 'CLG Overwatch Intro',
    filename: 'CLG_Overwatch_Intro.gif',
    description: "Intro motion graphic for CLG's Overwatch team",
  },
  {
    title: 'Yas or Nah',
    filename: 'Yas_or_Nah.gif',
    description: 'Series intro for fun YouTube content',
  },
]

// YouTube videos
const youtubeVideos = [
  {
    title: 'Misfit Story: Sceptic',
    videoId: '9XBLhulJE8s', // Replace with actual video ID
    description: 'Misfits Gaming documentary for Fortnite player Sceptic',
  },
  {
    title: 'Misfits Story: Clix',
    videoId: 'HSJfp8HW7Q0', // Replace with actual video ID
    description: 'Misfits Gaming documentary for Fortnite player Clix',
  },
]
</script>

<template>
  <PersonaGalleryTimeline
    title="My Editing Journey"
    description="I've been editing since I was 10, starting with YouTube guides and eventually transitioning into professional video and motion design work for major esports organizations. That long history of creative storytelling through video gives me a deep intuition for pacing, narrative, and visual impact."
  />

  <div class="container mx-auto space-y-20 px-6 py-16">
    <!-- Motion Graphics Gallery -->
    <section>
      <h3
        class="mb-8 text-2xl font-bold"
        :class="`font-${personaStore.currentPersona}`"
        :style="{ color: personaStore.theme.accent }"
      >
        Motion Graphics
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
              :src="useAssetPath(`/motion_graphics_gifs/${item.filename}`)"
              :alt="item.title"
              class="size-full object-cover transition-transform duration-100 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Title overlay on hover -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div class="p-4 text-center">
              <h4 class="mb-2 text-lg font-semibold" :style="{ color: personaStore.theme.text }">
                {{ item.title }}
              </h4>
              <p class="text-sm opacity-90" :style="{ color: personaStore.theme.text }">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- YouTube Videos Section -->
    <section>
      <h3
        class="mb-8 text-2xl font-bold"
        :class="`font-${personaStore.currentPersona}`"
        :style="{ color: personaStore.theme.accent }"
      >
        Video Edits
      </h3>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="video in youtubeVideos"
          :key="video.videoId"
          class="group relative overflow-hidden rounded-lg bg-black/50"
          :style="{ borderColor: personaStore.theme.accent + '30' }"
        >
          <!-- YouTube Embed Container -->
          <div class="relative aspect-video overflow-hidden">
            <iframe
              :src="`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`"
              :title="video.title"
              class="size-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            />
          </div>

          <!-- Video Info -->
          <div class="border-t p-4" :style="{ borderColor: personaStore.theme.accent + '30' }">
            <h4 class="mb-2 font-semibold" :style="{ color: personaStore.theme.text }">
              {{ video.title }}
            </h4>
            <p class="text-sm opacity-75" :style="{ color: personaStore.theme.text }">
              {{ video.description }}
            </p>
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
  </div>
</template>
