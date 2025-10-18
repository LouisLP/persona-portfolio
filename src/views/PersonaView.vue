<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import DeveloperContent from '@/components/Developer/DeveloperContent.vue'
import DesignerContent from '@/components/Designer/DesignerContent.vue'
import EditorContent from '@/components/Editor/EditorContent.vue'

import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <HeroSection />

  <!-- Persona-specific content sections -->
  <DeveloperContent v-if="personaStore.currentPersona === 'developer'" />
  <DesignerContent v-if="personaStore.currentPersona === 'designer'" />
  <EditorContent v-if="personaStore.currentPersona === 'editor'" />
</template>
