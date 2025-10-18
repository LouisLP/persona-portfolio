<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import PersonaSwitcher from '@/components/PersonaSwitcher.vue'

const personaStore = usePersonaStore()
const route = useRoute()

// Sync persona with route
watch(
  () => route.params.persona,
  (newPersona) => {
    if (newPersona && typeof newPersona === 'string') {
      const validPersonas = ['editor', 'designer', 'developer']
      if (validPersonas.includes(newPersona)) {
        personaStore.setPersona(newPersona as 'editor' | 'designer' | 'developer')
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-700"
    :style="{ backgroundColor: personaStore.theme.background, color: personaStore.theme.text }"
  >
    <!-- Persona Switcher -->
    <PersonaSwitcher />

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>

    <!-- Debug: Persona indicator -->
    <div
      class="fixed bottom-8 left-8 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
      :style="{ color: personaStore.theme.primary }"
    >
      Currently viewing: {{ personaStore.personaContent.title }}
    </div>
  </div>
</template>
