<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import PolaroidPhoto from '@/components/PolaroidPhoto.vue'
import { usePersonaStore } from '@/stores/persona'
import { computed } from 'vue'

interface Props {
  title: string
  description: string
}

defineProps<Props>()

const personaStore = usePersonaStore()

// Photo sets for each persona
const photoSets = {
  editor: [
    { imagePath: '/images/editor/video-edit-1.jpg', rotation: -4 },
    { imagePath: '/images/editor/motion-graphics-1.jpg', rotation: 2 },
    { imagePath: '/images/editor/color-grade-1.jpg', rotation: -1 },
    { imagePath: '/images/editor/final-cut-1.jpg', rotation: 3 },
  ],
  designer: [
    { imagePath: '/images/designer/ui-design-1.jpg', rotation: -4 },
    { imagePath: '/images/designer/brand-identity-1.jpg', rotation: 2 },
    { imagePath: '/images/designer/web-design-1.jpg', rotation: -1 },
    { imagePath: '/images/designer/logo-design-1.jpg', rotation: 3 },
  ],
  developer: [
    { imagePath: '/images/developer/code-screen-1.jpg', rotation: -4 },
    { imagePath: '/images/developer/ide-setup-1.jpg', rotation: 2 },
    { imagePath: '/images/developer/terminal-1.jpg', rotation: -1 },
    { imagePath: '/images/developer/deployment-1.jpg', rotation: 3 },
  ],
}

// Computed property to get photos based on current persona
const currentPhotos = computed(() => {
  return photoSets[personaStore.currentPersona] || photoSets.designer
})
</script>

<template>
  <div class="mx-auto space-y-20 py-16 md:container">
    <!-- Blurb/Photos & Timeline -->
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
      <div class="col-span-5 space-y-6 lg:col-span-3">
        <!-- Title/blurb -->
        <h2
          class="px-6 text-3xl font-bold md:text-4xl"
          :class="`font-${personaStore.currentPersona}`"
          :style="{ color: personaStore.theme.accent }"
        >
          {{ title }}
        </h2>

        <div
          class="space-y-4 px-6 text-lg leading-relaxed"
          :style="{ color: personaStore.theme.text }"
        >
          <p>{{ description }}</p>
        </div>

        <!-- Photo Container -->
        <div
          class="flex items-center justify-center -space-x-40 overflow-x-hidden py-8 md:-translate-x-10 md:-space-x-20 md:overflow-x-visible lg:-translate-x-60 lg:-space-x-40 xl:-translate-x-50 2xl:-translate-x-30"
        >
          <PolaroidPhoto
            v-for="(photo, index) in currentPhotos"
            :key="`${personaStore.currentPersona}-${index}`"
            :image-path="photo.imagePath"
            :rotation="photo.rotation"
            class="flex-shrink-0"
          />
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="relative z-10 hidden p-6 lg:col-span-2 lg:block">
        <CareerTimeline />
      </div>
    </section>
  </div>
</template>
