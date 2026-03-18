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
    description: 'Agile Robots was ideating a shop interface, and I designed/developed a receipt.',
    year: '2025',
    client: 'Agile Robots',
    tags: ['Desktop', 'UI/UX', 'Frontend'],
  },
  {
    imagePath: useAssetPath('/designs/jobreel-match-previews.png'),
    title: 'Jobreel Match Previews',
    description: 'Before signing up for Jobreel, users can preview which employers they\'ll match with.',
    year: '2024',
    client: 'Jobreel',
    tags: ['Desktop', 'UI/UX', 'Frontend'],
  },
  {
    imagePath: useAssetPath('/designs/Eclectique.png'),
    title: 'Mobile Ideation: Eclectique',
    description: 'Subscription-based vintage clothing marketplace.',
    year: '2024',
    client: 'Bending Spoons',
    tags: ['Mobile', 'UI Design', 'Figma'],
  },
  {
    imagePath: useAssetPath('/designs/Quazara.png'),
    title: 'Mobile Ideation: Quazara',
    description: 'Subscription-based gaming library.',
    year: '2024',
    client: 'Bending Spoons',
    tags: ['Mobile', 'UI Design', 'Figma'],
  },
  {
    imagePath: useAssetPath('/designs/prairielearn-live-scoreboard.png'),
    title: 'PrairieLearn Live Scoreboard',
    description: 'Scoreboard mockup for the PrairieLearn quizzing platform.',
    year: '2022',
    client: 'University of British Columbia',
    tags: ['Desktop', 'UI/UX', 'Bootstrap'],
  },
])
</script>

<template>
  <div class="mx-auto space-y-12 px-6 py-16 md:container md:px-16">
    <!-- Section Header -->
    <section class="space-y-4">
      <BaseTitle>Full Designs</BaseTitle>
      <p class="text-lg leading-relaxed text-gray-300">
        Once you have the building blocks in place, it's a matter of staying organized and
        iterating on full designs.
      </p>
    </section>

    <!--
      Masonry-style layout using CSS columns so cards of different heights sit naturally
      without forcing a uniform row height. Each card is `break-inside-avoid` so it never
      splits across a column boundary.
    -->
    <div class="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
      <div
        v-for="(design, i) in designs"
        :key="i"
        class="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl
               bg-linear-to-br from-white/5 to-white/2
               transition-all duration-300 hover:shadow-2xl"
      >
        <!--
          Image fills the card width; height is entirely driven by the image's
          natural aspect ratio. `block` removes the inline baseline gap that
          would otherwise leave a small gap below the image.
        -->
        <img
          :src="design.imagePath"
          :alt="design.title"
          class="block w-full transition-transform duration-500 group-hover:scale-[1.03]"
        >

        <!--
          Overlay sits over the image using absolute positioning. The parent is
          `relative` so this covers exactly the image area regardless of its height.
        -->
        <div
          class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black
                 to-black/50 p-4 opacity-0 transition-opacity duration-200
                 group-hover:opacity-100"
        >
          <div class="space-y-2">
            <h3 class="text-base font-bold leading-snug text-white">
              {{ design.title }}
            </h3>
            <p class="text-xs leading-relaxed text-gray-300">
              {{ design.description }}
            </p>

            <!-- Year + client -->
            <div class="flex flex-wrap items-center gap-3 pt-1 text-xs text-gray-400">
              <span class="flex items-center gap-1">
                <svg class="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                </svg>
                {{ design.year }}
              </span>

              <span v-if="design.client" class="flex items-center gap-1">
                <svg class="size-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                {{ design.client }}
              </span>
            </div>

            <!-- Tags -->
            <div v-if="design.tags?.length" class="flex flex-wrap gap-1.5 pt-0.5">
              <span
                v-for="tag in design.tags"
                :key="tag"
                class="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium
                       text-white backdrop-blur-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
