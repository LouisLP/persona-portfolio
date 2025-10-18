<script setup lang="ts">
import CodeBlock from '@/components/Developer/CodeBlock.vue'
import HeroSection from '@/components/HeroSection.vue'

import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <HeroSection />

  <CodeBlock v-if="personaStore.currentPersona === 'developer'" />
</template>
