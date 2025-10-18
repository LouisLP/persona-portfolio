<script setup lang="ts">
import CareerTimeline from '@/components/CareerTimeline.vue'
import CodeBlock from '@/components/Developer/CodeBlock.vue'
</script>

<template>
  <div class="container mx-auto space-y-20 px-6 py-16">
    <!-- Timeline -->
    <CareerTimeline />

    <!-- Code intro -->
    <section class="flex justify-center">
      <CodeBlock />
    </section>
  </div>
</template>
