<script setup lang="ts">
import type { PersonaType } from '@/stores/persona'
import { useRouter } from 'vue-router'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
const router = useRouter()

async function switchPersona(persona: PersonaType) {
  await personaStore.setPersona(persona)
  router.push(`/${persona}`)
}
</script>

<template>
  <nav
    aria-label="Persona"
    class="fixed top-6 left-1/2 z-50 -translate-x-1/2 lg:top-8 lg:right-8 lg:left-auto lg:translate-x-0"
  >
    <div class="flex gap-1 rounded-lg border border-line bg-canvas p-1">
      <button
        v-for="persona in personaStore.allPersonas"
        :key="persona.type"
        type="button"
        :aria-pressed="personaStore.currentPersona === persona.type"
        class="cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 lg:px-4"
        :class="
          personaStore.currentPersona === persona.type
            ? 'bg-accent text-canvas'
            : 'text-ink-muted hover:bg-surface hover:text-ink'
        "
        @click="switchPersona(persona.type)"
      >
        {{ persona.label }}
      </button>
    </div>
  </nav>
</template>
