<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import PolaroidPhoto from '@/components/PolaroidPhoto.vue'
import { usePersonaStore } from '@/stores/persona'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useAssetPath } from '@/composables/useAssetPath'
import BaseTitle from '@/components/Base/BaseTitle.vue'

interface Props {
  title: string
  description: string
}

defineProps<Props>()

const personaStore = usePersonaStore()

// Screen size tracking
const screenWidth = ref(0)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

// Photo sets for each persona
const photoSets = {
  editor: [
    { imagePath: useAssetPath('/polaroid_photos/editor/CLG_Camera.jpg'), rotation: -4 },
    { imagePath: useAssetPath('/polaroid_photos/editor/Covid_Setup_Berlin.jpg'), rotation: 2 },
    { imagePath: useAssetPath('/polaroid_photos/editor/LEC_Studio_Room.jpg'), rotation: -1 },
    { imagePath: useAssetPath('/polaroid_photos/editor/CLG_On_Stage.jpg'), rotation: 3 },
  ],
  designer: [
    { imagePath: useAssetPath('/polaroid_photos/designer/TwitchCon_2017.jpg'), rotation: -4 },
    { imagePath: useAssetPath('/polaroid_photos/designer/CLG_Jersey.jpg'), rotation: 2 },
    { imagePath: useAssetPath('/polaroid_photos/designer/Fidget_Head.jpg'), rotation: -1 },
    { imagePath: useAssetPath('/polaroid_photos/designer/Writing_On_Table.jpg'), rotation: 3 },
  ],
  developer: [
    { imagePath: useAssetPath('/polaroid_photos/developer/Timbits.jpg'), rotation: -4 },
    { imagePath: useAssetPath('/polaroid_photos/developer/Japan.jpg'), rotation: 2 },
    { imagePath: useAssetPath('/polaroid_photos/developer/SFU.jpg'), rotation: -1 },
    { imagePath: useAssetPath('/polaroid_photos/developer/Jobreel_Photo.jpg'), rotation: 3 },
  ],
}

// Computed property to get photos based on current persona and screen size
const currentPhotos = computed(() => {
  const photos = photoSets[personaStore.currentPersona] || photoSets.designer
  // Show only last 3 photos on smaller screens (below md breakpoint)
  return screenWidth.value < 768 ? photos.slice(-3) : photos
})
</script>

<template>
  <div class="mx-auto space-y-20 py-16 md:container">
    <!-- Blurb/Photos & Timeline -->
    <section class="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
      <div class="col-span-5 space-y-6 lg:col-span-3">
        <!-- Title/blurb -->
        <BaseTitle>{{ title }}</BaseTitle>

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
