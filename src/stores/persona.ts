import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type PersonaType = 'editor' | 'designer' | 'developer'

export interface PersonaTheme {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  gradient: string
  fontFamily: string
}

export interface PersonaContent {
  title: string
  tagline: string
  description: string
  skills: string[]
}

const themes: Record<PersonaType, PersonaTheme> = {
  editor: {
    primary: '#ef4444', // red
    secondary: '#dc2626',
    accent: '#fca5a5',
    background: '#1a1a1a',
    text: '#f5f5f5',
    gradient: 'from-red-600 to-orange-500',
    fontFamily: 'editor',
  },
  designer: {
    primary: '#8b5cf6', // purple
    secondary: '#7c3aed',
    accent: '#c4b5fd',
    background: '#0f0f23',
    text: '#f5f5f5',
    gradient: 'from-purple-600 to-pink-500',
    fontFamily: 'designer',
  },
  developer: {
    primary: '#3b82f6', // blue
    secondary: '#2563eb',
    accent: '#93c5fd',
    background: '#0a0a0a',
    text: '#f5f5f5',
    gradient: 'from-blue-600 to-cyan-500',
    fontFamily: 'developer',
  },
}

const content: Record<PersonaType, PersonaContent> = {
  editor: {
    title: 'Editor',
    tagline: 'Crafting Stories Through Motion',
    description:
      'Worked as a professional video editor and motion designer from 2017-2021 within the esports industry. First in Los Angeles, then in Berlin.',
    skills: [
      'Adobe Premiere',
      'Adobe After Effects',
      'Color Grading',
      'Motion Graphics',
      'Sound Design',
    ],
  },
  designer: {
    title: 'Designer',
    tagline: 'Creating Beautiful Experiences',
    description:
      'Went to university for interactive arts and technology, bringing a creative user-centric eye to every facet of work.',
    skills: ['UI/UX Design', 'Figma', 'Design Systems', 'Typography', 'Prototyping'],
  },
  developer: {
    title: 'Developer',
    tagline: 'Building the Future',
    description:
      'Building full-stack development with a frontend focus. Creating clean, user-friendly experiences with modern technologies.',
    skills: ['Vue.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'API Design'],
  },
}

export const usePersonaStore = defineStore('persona', () => {
  // State
  const currentPersona = ref<PersonaType>('developer')
  const isTransitioning = ref(false)

  // Getters
  const theme = computed(() => themes[currentPersona.value])
  const personaContent = computed(() => content[currentPersona.value])

  const allPersonas = computed(() => [
    { type: 'editor' as PersonaType, label: 'Editor', icon: '🎬' },
    { type: 'designer' as PersonaType, label: 'Designer', icon: '🎨' },
    { type: 'developer' as PersonaType, label: 'Developer', icon: '💻' },
  ])

  // Actions
  const setPersona = async (persona: PersonaType) => {
    if (persona === currentPersona.value) return

    isTransitioning.value = true
    currentPersona.value = persona
    isTransitioning.value = false
  }

  const getThemeClasses = computed(() => ({
    background: `bg-[${theme.value.background}]`,
    text: `text-[${theme.value.text}]`,
    primary: `text-[${theme.value.primary}]`,
    gradient: `bg-gradient-to-r ${theme.value.gradient}`,
  }))

  return {
    currentPersona,
    isTransitioning,
    theme,
    personaContent,
    allPersonas,
    getThemeClasses,
    setPersona,
  }
})
