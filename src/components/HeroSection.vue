<script setup lang="ts">
import DesignerOverlay from '@/components/Designer/DesignerOverlay.vue'
import DeveloperOverlay from '@/components/Developer/DeveloperOverlay.vue'
import EditorOverlay from '@/components/Editor/EditorOverlay.vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <section class="relative flex min-h-svh items-center overflow-hidden">
    <!-- Persona-specific overlays -->
    <DeveloperOverlay v-if="personaStore.currentPersona === 'developer'" />
    <EditorOverlay v-if="personaStore.currentPersona === 'editor'" />
    <DesignerOverlay v-if="personaStore.currentPersona === 'designer'" />

    <div class="relative mx-auto w-full max-w-5xl px-6 pt-24 md:px-16">
      <h1 class="text-5xl leading-[0.95] font-medium tracking-tight md:text-8xl">
        <span class="block text-ink-muted">Louis the</span>
        <span
          :key="personaStore.currentPersona"
          class="block font-display text-accent"
        >
          {{ personaStore.personaContent.title }}
        </span>
      </h1>

      <p class="mt-8 max-w-xl text-lg text-pretty text-ink-muted md:text-xl">
        {{ personaStore.personaContent.description }}
      </p>

      <ul class="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-ink-subtle">
        <li v-for="skill in personaStore.personaContent.skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>
