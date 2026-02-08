<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useAssetPath } from '@/composables/useAssetPath'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

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

function downloadCV() {
  const cvPath = useAssetPath('/cv.pdf')

  // Temporary link element to trigger download
  const link = document.createElement('a')
  link.href = cvPath
  link.download = 'Louis_Lascelles-Palys_CV.pdf' // Custom filename for download
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <footer class="border-t border-gray-800/50 bg-black/30 backdrop-blur-sm">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        <!-- Social Links -->
        <div class="flex items-center space-x-6">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center space-x-2 transition-colors duration-200"
            :style="{ color: personaStore.theme.text }"
          >
            <Icon
              class="size-5 transition-colors duration-200 group-hover:opacity-80"
              :style="{ color: personaStore.theme.primary }"
              :icon="link.icon"
            />
            <span
              class="hidden text-sm font-medium group-hover:opacity-80 sm:inline"
              :style="{ color: personaStore.theme.accent }"
            >
              {{ link.name }}
            </span>
          </a>
        </div>

        <!-- CV Download Button -->
        <button
          class="flex cursor-pointer items-center space-x-2 rounded-lg border bg-transparent px-4 py-2 text-sm font-medium hover:bg-gray-900 hover:bg-opacity-10"
          :style="{
            borderColor: personaStore.theme.primary,
            color: personaStore.theme.primary,
          }"
          @click="downloadCV"
        >
          <!-- Download icon -->
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Download CV</span>
        </button>
      </div>

      <!-- Copyright -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-700">
          © {{ new Date().getFullYear() }} Louis Lascelles-Palys
        </p>
      </div>
    </div>
  </footer>
</template>
