<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import PolaroidPhoto from '@/components/Designer/PolaroidPhoto.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// Sample photos with varied rotations for natural look
const photos = [
  { imagePath: '/images/design1.jpg', rotation: -3 },
  { imagePath: '/images/design2.jpg', rotation: 2 },
  { imagePath: '/images/design3.jpg', rotation: -1 },
  { imagePath: '/images/design4.jpg', rotation: 3 },
]
</script>

<template>
  <div class="mx-auto space-y-20 py-16 md:container">
    <!-- Blurb & Timeline -->
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
      <!-- Blurb Section -->
      <div class="col-span-5 space-y-6 lg:col-span-3">
        <h2
          class="px-6 text-3xl font-bold md:text-4xl"
          :class="`font-${personaStore.currentPersona}`"
          :style="{ color: personaStore.theme.accent }"
        >
          My Designing Journey
        </h2>

        <div
          class="space-y-4 px-6 text-lg leading-relaxed"
          :style="{ color: personaStore.theme.text }"
        >
          <p>
            Design is where creativity meets strategy. My journey has taken me from traditional
            graphic design through digital interfaces, always focusing on creating experiences that
            resonate with users and tell compelling visual stories.
          </p>
        </div>

        <!-- Photo Container -->
        <div
          class="flex items-center justify-center -space-x-40 overflow-x-hidden py-8 md:-translate-x-10 md:-space-x-20 md:overflow-x-visible lg:-translate-x-60 lg:-space-x-40 xl:-translate-x-50 2xl:-translate-x-30"
        >
          <PolaroidPhoto
            v-for="(photo, index) in photos"
            :key="index"
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
