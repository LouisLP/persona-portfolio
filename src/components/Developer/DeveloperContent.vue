<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import BaseTitle from '@/components/Base/BaseTitle.vue'
import CodeBlocks from '@/components/Developer/CodeBlocks.vue'
import PersonaGalleryTimeline from '@/components/PersonaGalleryTimeline.vue'
</script>

<template>
  <PersonaGalleryTimeline
    title="My Dev Journey"
    description="I'm a full-stack developer with a focus toward frontend work, where I can bridge creative and technical thinking to build experiences that feel intuitive for both users and developers. I'm passionate about crafting interfaces that are thoughtful to use and maintainable to build."
  />
  <div class="mx-auto space-y-16 px-6 py-16 md:container md:px-16">
    <!-- Code Intro -->
    <section>
      <BaseTitle class="mb-8">
        "Code" Blocks
      </BaseTitle>

      <CodeBlocks />
    </section>

    <!-- Coding Tenets -->
    <section>
      <BaseTitle class="mb-8">
        Coding Tenets
      </BaseTitle>
      <div class="container grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        <!-- Architecture -->
        <section class="flex flex-col gap-3">
          <BaseSubtitle>
            Architecture
          </BaseSubtitle>
          <ol class="flex flex-col gap-3">
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">01.</span>
              <span>The developer experience is just as important as the user experience.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">02.</span>
              <span>Use feature folders.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">03.</span>
              <span>Separate concerns early, refactor often.</span>
            </li>
          </ol>
        </section>

        <!-- Design -->
        <section class="flex flex-col gap-3">
          <BaseSubtitle>
            Design
          </BaseSubtitle>
          <ol class="flex flex-col gap-3">
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">01.</span>
              <span>Capturing a user's first interaction is crucial.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">02.</span>
              <span>Favour simplicity over "clever" solutions.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">03.</span>
              <span>Focus on core design principles.</span>
            </li>
          </ol>
        </section>

        <!-- Frontend -->
        <section class="flex flex-col gap-3">
          <BaseSubtitle>
            Frontend
          </BaseSubtitle>
          <ol class="flex flex-col gap-3">
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">01.</span>
              <span>Pleasant UX goes a long way</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">02.</span>
              <span>Hold one source of truth.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">03.</span>
              <span>Avoid prop-drilling.</span>
            </li>
          </ol>
        </section>

        <!-- Backend -->
        <section class="flex flex-col gap-3">
          <BaseSubtitle>
            Backend
          </BaseSubtitle>
          <ol class="flex flex-col gap-3">
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">01.</span>
              <span>Set up your layers early (MVC).</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">02.</span>
              <span>Performance is a feature, not an afterthought.</span>
            </li>
            <li class="flex items-start gap-2 transition-all hover:translate-x-1 cursor-default">
              <span class="font-semibold text-primary">03.</span>
              <span>Validate at the boundary.</span>
            </li>
          </ol>
        </section>
      </div>
    </section>
  </div>
</template>
