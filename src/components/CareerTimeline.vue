<script setup lang="ts">
import { computed } from 'vue'
import { usePersonaStore } from '@/stores/persona'

interface TimelineEvent {
  id: string
  yearStart: number
  yearEnd: number | null
  title: string
  description: string
  personas: string[]
}

const personaStore = usePersonaStore()

const events: TimelineEvent[] = [
  {
    id: '1',
    yearStart: 2015,
    yearEnd: null,
    title: 'Creative Foundation',
    description:
      'Enrolled in Interactive Arts & Technology at SFU. Started as Hearthstone writer for TempoStorm.',
    personas: ['editor', 'designer'],
  },
  {
    id: '2',
    yearStart: 2016,
    yearEnd: 2017,
    title: 'Esports & Entertainment',
    description: 'Video Producer at Counter Logic Gaming and Madison Square Garden Entertainment.',
    personas: ['editor', 'designer'],
  },
  {
    id: '3',
    yearStart: 2018,
    yearEnd: 2021,
    title: 'Senior Video Editor at Misfits Gaming',
    description:
      'Moved to Berlin to lead video editing and motion design for LEC, CDL, and OWL teams.',
    personas: ['editor', 'designer'],
  },
  {
    id: '4',
    yearStart: 2020,
    yearEnd: 2023,
    title: 'Transition to Computer Science',
    description:
      'Pursued formal CS education at SFU and UBC while building full-stack development skills. Published research on gamification.',
    personas: ['developer'],
  },
  {
    id: '5',
    yearStart: 2023,
    yearEnd: 2025,
    title: 'CS Degree & First Roles',
    description:
      'Graduated from UBC with BSc in Computer Science. Returned to Berlin for work at Jobreel.',
    personas: ['developer'],
  },
  {
    id: '6',
    yearStart: 2025,
    yearEnd: null,
    title: 'Professional Niche',
    description:
      'Moved to Munich as a Software Engineer at Agile Robots, building a robotics IDE while specializing in frontend development.',
    personas: ['developer'],
  },
]

const sortedEvents = computed(() => {
  return [...events].sort((a, b) => b.yearStart - a.yearStart)
})

const isEventHighlighted = (event: TimelineEvent) => {
  return event.personas.includes(personaStore.currentPersona)
}
</script>

<template>
  <!-- Timeline -->
  <div class="relative">
    <!-- Vertical line -->
    <div
      class="absolute top-0 bottom-0 left-[15px] w-0.5 transition-colors duration-500"
      :style="{ backgroundColor: personaStore.theme.accent }"
    />

    <!-- Events -->
    <div class="space-y-6">
      <div
        v-for="event in sortedEvents"
        :key="event.id"
        :class="[
          'relative transition-all duration-300',
          isEventHighlighted(event) ? 'pl-16' : 'pl-8',
        ]"
      >
        <!-- Dot -->
        <div
          class="absolute top-1.5 left-[0.1rem] size-7 rounded-full border-4 transition-all duration-300"
          :class="[
            isEventHighlighted(event)
              ? 'ring-opacity-30 scale-100 ring-4 hover:scale-110'
              : 'scale-50',
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
          class="transition-all duration-300"
          :class="[
            isEventHighlighted(event)
              ? 'translate-x-0 scale-100 transform opacity-100'
              : '-translate-x-6 scale-80 transform opacity-25',
          ]"
        >
          <!-- Year -->
          <div
            class="mb-2 font-mono text-xs font-semibold lg:text-sm"
            :style="{ color: personaStore.theme.accent }"
          >
            {{ event.yearStart
            }}<span v-if="event.yearEnd"
              ><span class="px-1 opacity-40">-</span>{{ event.yearEnd }}</span
            >
          </div>

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
</template>
