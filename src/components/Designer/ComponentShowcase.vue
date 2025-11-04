<script setup lang="ts">
import MinimalButton from '@/components/ui/MinimalButton.vue'
import MedievalButton from '@/components/ui/MedievalButton.vue'
import NeoBrutalistButton from '@/components/ui/NeoBrutalistButton.vue'
import RetroButton from '@/components/ui/RetroButton.vue'
import ButtonShowcase from '@/components/Designer/ButtonShowcase.vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
</script>

<template>
  <section class="mx-auto space-y-16 px-6 py-16 md:container md:px-16">
    <!-- Button collection -->
    <div>
      <BaseTitle>Button Collection</BaseTitle>
      <p class="mt-4 max-w-3xl px-6 text-lg text-gray-600 dark:text-gray-300">
        I love buttons. They're a fundamental part of any UI, and can be styled in countless ways.
        Here's some of my button styles, each with their own personality.
      </p>
    </div>

    <!-- Components grid for larger screens -->
    <div class="grid gap-8 xl:grid-cols-2">
      <!-- Minimal Buttons - Subtle cool gradient -->
      <ButtonShowcase
        title="Minimal Buttons"
        description="Simple, and the most Louis-approved."
        :button-component="MinimalButton"
        gradient-from="from-slate-700"
        gradient-via="via-slate-800"
        gradient-to="to-slate-900"
      />

      <!-- Neo-Brutalist Buttons - High contrast, stays dark -->
      <ButtonShowcase
        title="Neo-Brutalist Buttons"
        description="Bold, harsh, and unapologetically loud."
        :button-component="NeoBrutalistButton"
        gradient-from="from-gray-900"
        gradient-via="via-black"
        gradient-to="to-gray-900"
        :variants="['electric', 'cyber', 'toxic', 'void']"
      />

      <!-- Medieval Buttons - Warmer, more earthy -->
      <ButtonShowcase
        title="Medieval Buttons"
        description="Inspired by one of my favourite games (OSRS)."
        :button-component="MedievalButton"
        gradient-from="from-stone-800"
        gradient-via="via-stone-900"
        gradient-to="to-slate-900"
        :variants="['knight', 'royal', 'stone', 'gold']"
      />

      <!-- Retro Buttons - Much darker, subtle hint of color -->
      <ButtonShowcase
        title="Retro Buttons"
        description="80s nostalgia meets modern polish."
        :button-component="RetroButton"
        gradient-from="from-slate-900"
        gradient-via="via-gray-900"
        gradient-to="to-slate-800"
        :variants="['synthwave', 'neon', 'arcade', 'hologram']"
      />
    </div>
  </section>
</template>
