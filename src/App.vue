<script setup lang="ts">
import { watchEffect } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import PersonaSwitcher from '@/components/PersonaSwitcher.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

// Theme tokens in styles.css key off this attribute
watchEffect(() => {
  document.documentElement.dataset.persona = personaStore.currentPersona
})
</script>

<template>
  <div class="min-h-screen">
    <PersonaSwitcher />
    <RouterView />
    <AppFooter />
  </div>
</template>
