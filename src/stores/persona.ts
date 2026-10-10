import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type PersonaType = 'editor' | 'designer' | 'developer'

export interface PersonaContent {
  title: string
  description: string
  skills: string[]
}

const content: Record<PersonaType, PersonaContent> = {
  editor: {
    title: 'Editor',
    description:
      'Professional video editor and motion designer in esports from 2017 to 2021, first in Los Angeles, then in Berlin.',
    skills: [
      'Adobe Premiere',
      'Adobe After Effects',
      'Colour Grading',
      'Motion Graphics',
      'Sound Design',
    ],
  },
  designer: {
    title: 'Designer',
    description:
      'Studied Interactive Arts & Technology at SFU, and carried that user-first eye into every job since.',
    skills: ['UI/UX Design', 'Figma', 'Design Systems', 'Typography', 'Prototyping'],
  },
  developer: {
    title: 'Developer',
    description:
      'Full-stack developer with a frontend focus, building clean interfaces that are easy to use and easy to maintain.',
    skills: ['Vue.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Design'],
  },
}

export const usePersonaStore = defineStore('persona', () => {
  // State
  const currentPersona = ref<PersonaType>('developer')

  // Getters
  const personaContent = computed(() => content[currentPersona.value])

  const allPersonas = computed(() => [
    { type: 'developer' as PersonaType, label: 'Developer' },
    { type: 'editor' as PersonaType, label: 'Editor' },
    { type: 'designer' as PersonaType, label: 'Designer' },
  ])

  // Actions
  const setPersona = async (persona: PersonaType) => {
    if (persona === currentPersona.value)
      return

    currentPersona.value = persona
  }

  return {
    currentPersona,
    personaContent,
    allPersonas,
    setPersona,
  }
})
