<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <section
    class="relative flex min-h-screen items-center justify-center overflow-hidden transition-colors duration-700"
    :style="{ backgroundColor: personaStore.theme.background }"
  >
    <!-- Animated background gradient -->
    <div
      :class="['absolute inset-0 opacity-20', `bg-gradient-to-br ${personaStore.theme.gradient}`]"
    />

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <!-- Persona Title with transition -->
      <h1
        :key="personaStore.currentPersona"
        class="mb-6 text-6xl font-bold transition-all duration-500 md:text-8xl"
        :style="{ color: personaStore.theme.text }"
      >
        Louis the
        <div
          :class="[
            `bg-gradient-to-r ${personaStore.theme.gradient}`,
            `font-${personaStore.theme.fontFamily}`,
          ]"
          class="mx-auto w-fit rounded-2xl px-4"
        >
          {{ personaStore.personaContent.title }}
        </div>
      </h1>

      <!-- Description -->
      <p
        :key="`${personaStore.currentPersona}-desc`"
        class="text-md mx-auto mb-12 max-w-2xl opacity-80 md:text-lg"
        :style="{ color: personaStore.theme.text }"
      >
        {{ personaStore.personaContent.description }}
      </p>

      <!-- Skills showcase -->
      <div class="mt-16 flex flex-wrap justify-center gap-4">
        <span
          v-for="skill in personaStore.personaContent.skills"
          :key="skill"
          class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm"
          :style="{ color: personaStore.theme.text }"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
      <svg
        class="h-6 w-6"
        :style="{ color: personaStore.theme.accent }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>
