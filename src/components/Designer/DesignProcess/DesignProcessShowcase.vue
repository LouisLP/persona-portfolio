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
      <p class="text-lg leading-relaxed text-gray-300">
        Great interfaces start with a well-defined design system. The foundational building blocks
        usually start as a sketch or on Figma. However, this showcase is a bit of a unique case,
        so here's a visual representation of the tokens, scales, and principles that go into my
        design process.
      </p>
    </section>

    <DesignTokensSection />
    <ColourPaletteSection />
    <TypographySection />
    <MotionSection />
  </div>
</template>
