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
  <div class="fixed top-8 right-8 z-50">
    <div class="flex gap-3 rounded-full border border-white/10 bg-black/80 p-2 backdrop-blur-sm">
      <button
        v-for="persona in personaStore.allPersonas"
        :key="persona.type"
        @click="switchPersona(persona.type)"
        :class="[
          'cursor-pointer rounded-full px-6 py-3 font-medium transition-all duration-100',
          'hover:scale-105 active:scale-95',
          personaStore.currentPersona === persona.type
            ? `bg-gradient-to-r ${personaStore.theme.gradient} text-white shadow-lg`
            : 'text-gray-400 hover:bg-white/5 hover:text-white',
        ]"
      >
        <span class="mr-2">{{ persona.icon }}</span>
        <span>{{ persona.label }}</span>
      </button>
    </div>
  </div>
</template>
