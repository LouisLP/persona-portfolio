<script setup lang="ts">
import { computed } from 'vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
import CareerTimeline from '@/components/CareerTimeline.vue'
import PolaroidPhoto from '@/components/PolaroidPhoto.vue'
import { usePersonaStore } from '@/stores/persona'
import { assetPath } from '@/utils/assetPath'

interface Props {
  title: string
  description: string
}

defineProps<Props>()

const personaStore = usePersonaStore()

// Photo sets for each persona
const photoSets = {
  editor: [
    { imagePath: assetPath('/polaroid_photos/editor/CLG_Camera.jpg'), rotation: -4 },
    { imagePath: assetPath('/polaroid_photos/editor/Covid_Setup_Berlin.jpg'), rotation: 2 },
    { imagePath: assetPath('/polaroid_photos/editor/LEC_Studio_Room.jpg'), rotation: -1 },
    { imagePath: assetPath('/polaroid_photos/editor/CLG_On_Stage.jpg'), rotation: 3 },
  ],
  designer: [
    { imagePath: assetPath('/polaroid_photos/designer/TwitchCon_2017.jpg'), rotation: -4 },
    { imagePath: assetPath('/polaroid_photos/designer/CLG_Jersey.jpg'), rotation: 2 },
    { imagePath: assetPath('/polaroid_photos/designer/Fidget_Head.jpg'), rotation: -1 },
    { imagePath: assetPath('/polaroid_photos/designer/Writing_On_Table.jpg'), rotation: 3 },
  ],
  developer: [
    { imagePath: assetPath('/polaroid_photos/developer/Timbits.jpg'), rotation: -4 },
    { imagePath: assetPath('/polaroid_photos/developer/Agile_team_event.jpg'), rotation: 2 },
    { imagePath: assetPath('/polaroid_photos/developer/SFU.jpg'), rotation: -1 },
    { imagePath: assetPath('/polaroid_photos/developer/Jobreel_Photo.jpg'), rotation: 3 },
  ],
}

const currentPhotos = computed(() => photoSets[personaStore.currentPersona])
</script>

<template>
  <div class="mx-auto space-y-20 py-16 md:container">
    <!-- Blurb/Photos & Timeline -->
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
      <div class="col-span-5 space-y-6 lg:col-span-3 px-0 md:px-12">
        <!-- Title/blurb -->
        <BaseTitle class="mx-6 md:mx-0">
          {{ title }}
        </BaseTitle>

        <p class="mx-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-muted md:mx-0">
          {{ description }}
        </p>

        <!-- Photo Container -->
        <div
          class="flex items-center justify-center -space-x-40 overflow-x-hidden py-8 md:-translate-x-10 md:-space-x-20 md:overflow-x-visible lg:-translate-x-60 lg:-space-x-40 xl:-translate-x-50 2xl:-translate-x-30"
        >
          <PolaroidPhoto
            v-for="(photo, index) in currentPhotos"
            :key="`${personaStore.currentPersona}-${index}`"
            :image-path="photo.imagePath"
            :rotation="photo.rotation"
            class="shrink-0"
            :class="{ 'max-md:hidden': index === 0 }"
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
