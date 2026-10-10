<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
import PersonaSwitcher from '@/components/PersonaSwitcher.vue'
import { usePersonaStore } from '@/stores/persona'

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

// Theme tokens in styles.css key off this attribute
watch(
  () => personaStore.currentPersona,
  (persona) => {
    document.documentElement.dataset.persona = persona
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen">
    <PersonaSwitcher />

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>

    <AppFooter />
  </div>
</template>
