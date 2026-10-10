<script setup lang="ts">
import BaseTitle from '@/components/Base/BaseTitle.vue'
import ColourPaletteSection from '@/components/Designer/DesignProcess/ColourPaletteSection.vue'
import DesignTokensSection from '@/components/Designer/DesignProcess/DesignTokensSection.vue'
import MotionSection from '@/components/Designer/DesignProcess/MotionSection.vue'
import TypographySection from '@/components/Designer/DesignProcess/TypographySection.vue'
</script>

<template>
  <div class="mx-auto space-y-20 px-6 py-16 md:container md:px-16">
    <!-- Intro -->
    <section class="space-y-4">
      <BaseTitle>Design Process</BaseTitle>
      <p class="max-w-2xl text-lg leading-relaxed text-pretty text-ink-muted">
        Good interfaces start with a well-defined design system. Mine usually begin as a sketch or
        in Figma, but a portfolio can show the real thing, so here are the tokens, scales, and
        principles I actually work with.
      </p>
    </section>

    <DesignTokensSection />
    <ColourPaletteSection />
    <TypographySection />
    <MotionSection />
  </div>
</template>
