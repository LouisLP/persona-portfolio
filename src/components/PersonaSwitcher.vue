<script setup lang="ts">
import { usePersonaStore, type PersonaType } from '@/stores/persona'
import { useRouter } from 'vue-router'

const personaStore = usePersonaStore()
const router = useRouter()

const switchPersona = async (persona: PersonaType) => {
  await personaStore.setPersona(persona)
  router.push(`/${persona}`)
}
</script>

<template>
  <div
    class="fixed top-8 left-1/2 z-50 -translate-x-1/2 transform lg:right-8 lg:left-auto lg:translate-x-0"
  >
    <div
      class="flex gap-2 rounded-full border border-white/10 bg-black/50 p-1.5 backdrop-blur-sm lg:gap-3 lg:p-2"
    >
      <button
        v-for="persona in personaStore.allPersonas"
        :key="persona.type"
        @click="switchPersona(persona.type)"
        :class="[
          'cursor-pointer rounded-full font-medium transition-all duration-100',
          'hover:scale-105 active:scale-95',
          'px-3 py-2 text-sm lg:px-6 lg:py-3 lg:text-base',
          personaStore.currentPersona === persona.type
            ? `bg-gradient-to-r ${personaStore.theme.gradient} text-white shadow-lg`
            : 'text-gray-400 hover:bg-white/5 hover:text-white',
        ]"
      >
        <span class="mr-1 lg:mr-2">{{ persona.icon }}</span>
        <span>{{ persona.label }}</span>
      </button>
    </div>
  </div>
</template>
