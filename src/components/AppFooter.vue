<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { assetPath } from '@/utils/assetPath'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/LouisLP',
    icon: 'mdi:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/louislp',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/trustyturkey',
    icon: 'mdi:instagram',
  },
]

const cvPath = assetPath('/cv.pdf')
</script>

<template>
  <footer class="border-t border-line">
    <div class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-16">
      <ul class="flex items-center gap-6">
        <li v-for="link in socialLinks" :key="link.name">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-accent"
          >
            <Icon class="size-5" :icon="link.icon" />
            <span class="hidden sm:inline">{{ link.name }}</span>
          </a>
        </li>
      </ul>

      <div class="flex items-center justify-between gap-6 md:justify-end">
        <p class="text-sm text-ink-subtle">
          © {{ new Date().getFullYear() }} Louis Lascelles-Palys
        </p>

        <a
          :href="cvPath"
          download="Louis_Lascelles-Palys_CV.pdf"
          class="flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <Icon class="size-4" icon="mdi:tray-arrow-down" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  </footer>
</template>
