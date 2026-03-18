<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { radiusTokens, shadowTokens, spacingTokens } from '@/components/Designer/DesignProcess/designTokens'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Design Tokens</BaseSubtitle>
      <p class="text-gray-400">
        The atomic values that keep a system consistent — spacing, sizing, radii, and elevation.
      </p>
    </div>

    <div class="grid gap-12 lg:grid-cols-2">
      <!-- Spacing Scale -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Spacing Scale
        </h4>
        <div class="space-y-3">
          <p class="text-sm text-gray-400">
            Values are set in <code>rem</code> for scalability. Pixel equivalents shown here
            assume the browser default of <code>1rem = 16px</code>.
          </p>
          <div
            v-for="token in spacingTokens"
            :key="token.name"
            class="flex items-center gap-4"
          >
            <code class="w-16 shrink-0 text-sm text-gray-500">{{ token.value }}</code>
            <div
              class="h-3 rounded-sm transition-all duration-300"
              :style="{
                width: token.value,
                backgroundColor: personaStore.theme.primary,
                opacity: 0.8,
              }"
            />
          </div>
        </div>
      </div>

      <!-- Border Radius -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Border Radius
        </h4>
        <p class="text-sm text-gray-400">
          Standard radius tokens. Note:
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape"
            class="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            target="_blank"
            rel="noopener"
          >corner-shape</a>
          is promising in modern CSS but not yet available in Firefox.
        </p>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="radius in radiusTokens"
            :key="radius.name"
            class="flex flex-col items-center gap-2"
          >
            <div
              class="size-16 border-2 transition-colors duration-300"
              :style="{
                borderRadius: radius.value,
                borderColor: personaStore.theme.accent,
                backgroundColor: `${personaStore.theme.primary}1a`,
              }"
            />
            <div class="text-center">
              <p class="text-xs font-medium text-gray-300">
                {{ radius.name }}
              </p>
              <p class="text-xs text-gray-500">
                {{ radius.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shadow / Elevation -->
    <div class="space-y-4">
      <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Elevation & Shadow
      </h4>
      <p class="text-sm text-gray-400">
        Shadow tokens convey depth and layer order. The <code>glow</code> token is used for
        focus states and interactive accents.
      </p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="shadow in shadowTokens"
          :key="shadow.name"
          class="flex flex-col gap-3 rounded-xl bg-white/3 p-4"
        >
          <!-- Preview swatch -->
          <div
            class="h-16 w-full rounded-lg transition-all duration-300"
            :style="{
              backgroundColor: `${personaStore.theme.primary}22`,
              boxShadow: `${shadow.value}`,
            }"
          />
          <div>
            <div class="flex items-baseline gap-2">
              <code class="text-sm font-semibold text-white">{{ shadow.name }}</code>
              <span class="text-xs text-gray-500">{{ shadow.label }}</span>
            </div>
            <p class="mt-0.5 text-xs text-gray-600">
              {{ shadow.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
