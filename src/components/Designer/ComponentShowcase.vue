<script setup lang="ts">
import MinimalButton from '@/components/ui/MinimalButton.vue'
import MedievalButton from '@/components/ui/MedievalButton.vue'
import NeoBrutalistButton from '@/components/ui/NeoBrutalistButton.vue'
import RetroButton from '@/components/ui/RetroButton.vue'
import ButtonShowcase from '@/components/Designer/ButtonShowcase.vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
</script>

<template>
  <section class="mx-auto space-y-16 py-16 md:container">
    <!-- Button collection -->
    <div>
      <BaseTitle>Button Collection</BaseTitle>
      <p class="mt-4 max-w-3xl px-6 text-lg text-gray-600 dark:text-gray-300">
        I love buttons. They're a fundamental part of any UI, and can be styled in countless ways.
        Here's my collection of button styles, each with their own personality.
      </p>
    </div>

    <!-- Components grid for larger screens -->
    <div class="grid gap-8 xl:grid-cols-2">
      <!-- Minimal Buttons -->
      <ButtonShowcase
        title="Minimal Buttons"
        description="Simple, and the most Louis-approved."
        :button-component="MinimalButton"
        gradient-from="from-blue-500"
        gradient-via="via-purple-600"
        gradient-to="to-indigo-800"
      />

      <!-- Neo-Brutalist Buttons -->
      <ButtonShowcase
        title="Neo-Brutalist Buttons"
        description="Bold, harsh, and unapologetically loud."
        :button-component="NeoBrutalistButton"
        gradient-from="from-black"
        gradient-via="via-gray-800"
        gradient-to="to-gray-900"
        :variants="['electric', 'cyber', 'toxic', 'void']"
      />

      <!-- Medieval Buttons -->
      <ButtonShowcase
        title="Medieval Buttons"
        description="Inspired by one of my favourite games (OSRS)."
        :button-component="MedievalButton"
        gradient-from="from-amber-700"
        gradient-via="via-orange-800"
        gradient-to="to-red-900"
        :variants="['knight', 'royal', 'stone', 'gold']"
      />

      <!-- Retro Buttons -->
      <ButtonShowcase
        title="Retro Buttons"
        description="80s nostalgia meets modern polish."
        :button-component="RetroButton"
        gradient-from="from-purple-900"
        gradient-via="via-pink-900"
        gradient-to="to-rose-900"
        :variants="['synthwave', 'neon', 'arcade', 'hologram']"
      />
    </div>
  </section>
</template>
