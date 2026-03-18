<script setup lang="ts">
import { ref } from 'vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
import { useAssetPath } from '@/composables/useAssetPath'

interface DesignMeta {
  imagePath: string
  title: string
  description: string
  year: string
  client?: string
  tags?: string[]
}

const designs = ref<DesignMeta[]>([
  {
    imagePath: useAssetPath('/designs/agile-data-hub-receipt.png'),
    title: 'Agile Data Hub Receipt',
    description: 'Agile Robots was ideating a shop interface, and I designed/developed a receipt',
    year: '2025',
    client: 'Agile Robots',
    tags: ['Desktop', 'UI/UX', 'Frontend'],
  },
  {
    imagePath: useAssetPath('/designs/jobreel-match-previews.png'),
    title: 'Jobreel Match Previews',
    description: 'Before signing up for Jobreel, users can preview which employers their profile matches with',
    year: '2024',
    client: 'Jobreel',
    tags: ['Desktop', 'UI/UX', 'Frontend'],
  },
  {
    imagePath: useAssetPath('/designs/Eclectique.png'),
    title: 'Mobile Ideation: Eclectique',
    description: 'Subscription-based vintage clothing marketplace',
    year: '2024',
    client: 'Bending Spoons',
    tags: ['Mobile', 'UI Design', 'Figma'],
  },
  {
    imagePath: useAssetPath('/designs/Quazara.png'),
    title: 'Mobile Ideation: Quazara',
    description: 'Subscription-based gaming library',
    year: '2024',
    client: 'Bending Spoons',
    tags: ['Mobile', 'UI Design', 'Figma'],
  },
])

const hoveredIndex = ref<number | null>(null)
</script>

<template>
  <div class="mx-auto space-y-12 px-6 py-16 md:container md:px-16">
    <!-- Section Header -->
    <section class="space-y-4">
      <BaseTitle>Full Designs</BaseTitle>
      <p class="text-lg leading-relaxed text-gray-300">
        Once you have the building blocks in place, it's a matter of staying organized and iterating on full designs.
      </p>
    </section>

    <!-- Designs Grid -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="(design, i) in designs"
        :key="i"
        class="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/2 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl"
        @mouseenter="hoveredIndex = i"
        @mouseleave="hoveredIndex = null"
      >
        <!-- Image Container -->
        <div class="relative overflow-hidden rounded-lg">
          <img
            :src="design.imagePath"
            :alt="design.title"
            class="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
          >

          <!-- Hover Overlay with Tooltip -->
          <div
            class="absolute inset-0 flex items-end bg-linear-to-t from-black to-black/60 p-4 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
          >
            <div class="w-full space-y-2">
              <h3 class="text-xl font-bold text-white">
                {{ design.title }}
              </h3>
              <p class="text-sm leading-relaxed text-gray-200">
                {{ design.description }}
              </p>

              <!-- Metadata -->
              <div class="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-400">
                <span class="flex items-center gap-1">
                  <svg class="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                  {{ design.year }}
                </span>

                <span v-if="design.client" class="flex items-center gap-1">
                  <svg class="size-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  {{ design.client }}
                </span>
              </div>

              <!-- Tags -->
              <div v-if="design.tags && design.tags.length > 0" class="flex flex-wrap gap-1.5 pt-1">
                <span
                  v-for="tag in design.tags"
                  :key="tag"
                  class="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
