<script setup lang="ts">
import { computed } from 'vue'
import { usePersonaStore } from '@/stores/persona'

interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  personas: string[]
}

const personaStore = usePersonaStore()

const events: TimelineEvent[] = [
  {
    id: '1',
    year: 2024,
    title: 'Transitioned to Full-Time Development',
    description: 'Made the leap from video production to software development',
    personas: ['developer'],
  },
  {
    id: '2',
    year: 2023,
    title: 'Started Learning Web Development',
    description: 'Began coding journey with Vue.js and modern web technologies',
    personas: ['developer', 'designer'],
  },
  {
    id: '3',
    year: 2022,
    title: 'Freelance Editor Peak',
    description: 'Managed 15+ concurrent projects for commercial clients',
    personas: ['editor'],
  },
  {
    id: '4',
    year: 2021,
    title: 'Started Motion Graphics Design',
    description: 'Expanded into motion design and title sequences',
    personas: ['editor', 'designer'],
  },
  {
    id: '5',
    year: 2020,
    title: 'Freelance Video Editing Begins',
    description: 'Started professional video editing with content creators',
    personas: ['editor'],
  },
  {
    id: '6',
    year: 2019,
    title: 'Adobe Creative Suite Mastery',
    description: 'Achieved deep proficiency across Premiere Pro and After Effects',
    personas: ['editor', 'designer'],
  },
]

const sortedEvents = computed(() => {
  return [...events].sort((a, b) => b.year - a.year)
})

const isEventHighlighted = (event: TimelineEvent) => {
  return event.personas.includes(personaStore.currentPersona)
}
</script>

<template>
  <div class="mx-auto max-w-2xl px-6 py-20">
    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div
        class="absolute top-0 bottom-0 left-[15px] w-0.5 transition-colors duration-500"
        :style="{ backgroundColor: personaStore.theme.accent }"
      />

      <!-- Events -->
      <div class="space-y-12">
        <div v-for="event in sortedEvents" :key="event.id" class="relative pl-16">
          <!-- Dot -->
          <div
            :class="[
              'absolute top-1.5 left-[0.1rem] size-7 rounded-full border-4 transition-all duration-300',
              isEventHighlighted(event) ? 'ring-opacity-30 scale-100 ring-4' : 'scale-50',
            ]"
            :style="{
              backgroundColor: isEventHighlighted(event)
                ? personaStore.theme.primary
                : personaStore.theme.accent,
              borderColor: '#0a0a0a',
              '--tw-ring-color': personaStore.theme.accent,
            }"
          />

          <!-- Content -->
          <div
            :class="[
              'transition-all duration-300',
              isEventHighlighted(event) ? 'scale-100 opacity-100' : 'scale-95 opacity-60',
            ]"
          >
            <!-- Year -->
            <!-- <div
              class="mb-2 inline-block rounded px-2 py-1 font-mono text-xs transition-colors duration-300"
              :style="{ color: personaStore.theme.primary }"
            >
              {{ event.year }}
            </div> -->

            <!-- Title -->
            <h3
              class="mb-2 text-lg font-semibold text-gray-100"
              :class="`font-${personaStore.theme.fontFamily}`"
            >
              {{ event.title }}
            </h3>

            <!-- Description -->
            <p class="text-sm leading-relaxed text-gray-400">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
