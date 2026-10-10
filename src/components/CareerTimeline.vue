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
      'Enrolled in Interactive Arts & Technology at SFU in Vancouver. Entered the esports space as a Hearthstone writer for TempoStorm.',
    personas: ['editor', 'designer'],
  },
  {
    id: '2',
    yearStart: 2016,
    yearEnd: 2017,
    title: 'Esports & Entertainment',
    description:
      'Moved to Los Angeles as a Video Producer for Counter Logic Gaming and Madison Square Garden Entertainment.',
    personas: ['editor', 'designer'],
  },
  {
    id: '3',
    yearStart: 2018,
    yearEnd: 2021,
    title: 'Senior Video Editor & Motion Designer',
    description:
      'Moved to Berlin to lead video editing and motion design for Misfits\' LEC, CDL, and OWL teams.',
    personas: ['editor', 'designer'],
  },
  {
    id: '4',
    yearStart: 2020,
    yearEnd: 2023,
    title: 'Transition to Computer Science',
    description:
      'Pursued formal CS education while building full-stack development skills. Published research on gamification.',
    personas: ['developer'],
  },
  {
    id: '5',
    yearStart: 2023,
    yearEnd: 2025,
    title: 'CS Degree & First Roles',
    description:
      'Returned to Berlin for work as a full-stack developer for Jobreel after graduating from UBC with a BSc in Computer Science.',
    personas: ['developer'],
  },
  {
    id: '6',
    yearStart: 2025,
    yearEnd: null,
    title: 'Professional Niche',
    description:
      'Moved to Munich as a software engineer at Agile Robots SE, building a robotics IDE while specializing in frontend development.',
    personas: ['developer'],
  },
]

const sortedEvents = computed(() => {
  return [...events].sort((a, b) => b.yearStart - a.yearStart)
})

function isEventHighlighted(event: TimelineEvent) {
  return event.personas.includes(personaStore.currentPersona)
}
</script>

<template>
  <ol class="relative border-l border-line">
    <li
      v-for="event in sortedEvents"
      :key="event.id"
      class="relative pb-8 pl-6 transition-opacity duration-300 last:pb-0"
      :class="isEventHighlighted(event) ? 'opacity-100' : 'opacity-35'"
    >
      <!-- Marker -->
      <span
        class="absolute top-1.5 -left-[5px] size-[9px] rounded-full transition-colors duration-300"
        :class="isEventHighlighted(event) ? 'bg-accent' : 'bg-line'"
      />

      <p class="font-mono text-xs text-ink-subtle">
        {{ event.yearStart }}<span v-if="event.yearEnd">–{{ event.yearEnd }}</span>
      </p>

      <h3 class="mt-1 font-medium text-ink">
        {{ event.title }}
      </h3>

      <p class="mt-1 text-sm leading-relaxed text-ink-muted">
        {{ event.description }}
      </p>
    </li>
  </ol>
</template>
