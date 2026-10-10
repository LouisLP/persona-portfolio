<script setup lang="ts">
import BaseSubtitle from '@/components/Base/BaseSubtitle.vue'
import { radiusTokens, shadowTokens, spacingTokens } from '@/components/Designer/DesignProcess/designTokens'
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <BaseSubtitle>Design Tokens</BaseSubtitle>
      <p class="text-ink-muted">
        The atomic values that keep a system consistent: spacing, radii, and elevation.
      </p>
    </div>

    <div class="grid gap-12 lg:grid-cols-2">
      <!-- Spacing Scale -->
      <div class="space-y-4">
        <h4 class="font-mono text-xs uppercase tracking-wider text-ink-subtle">
          Spacing Scale
        </h4>
        <div class="space-y-3">
          <p class="text-sm text-ink-muted">
            Values are set in <code>rem</code> for scalability. Pixel equivalents shown here
            assume the browser default of <code>1rem = 16px</code>.
          </p>
          <div
            v-for="token in spacingTokens"
            :key="token.name"
            class="flex items-center gap-4"
          >
            <code class="w-16 shrink-0 text-sm text-ink-subtle">{{ token.value }}</code>
            <div class="h-3 rounded-sm bg-accent" :style="{ width: token.value }" />
          </div>
        </div>
      </div>

      <!-- Border Radius -->
      <div class="space-y-4">
        <h4 class="font-mono text-xs uppercase tracking-wider text-ink-subtle">
          Border Radius
        </h4>
        <p class="text-sm text-ink-muted">
          Standard radius tokens. Note:
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape"
            class="text-accent hover:text-ink underline underline-offset-2"
            target="_blank"
            rel="noopener"
          >corner-shape</a>
          is promising in modern CSS but not yet available in Firefox (my main browser).
        </p>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="radius in radiusTokens"
            :key="radius.name"
            class="flex flex-col items-center gap-2"
          >
            <div
              class="size-16 border-2 border-accent bg-accent-soft"
              :style="{ borderRadius: radius.value }"
            />
            <div class="text-center">
              <p class="text-xs font-medium text-ink-muted">
                {{ radius.name }}
              </p>
              <p class="text-xs text-ink-subtle">
                {{ radius.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Shadow / Elevation -->
    <div class="space-y-4">
      <h4 class="font-mono text-xs uppercase tracking-wider text-ink-subtle">
        Elevation & Shadow
      </h4>
      <p class="text-sm text-ink-muted">
        Shadow tokens convey depth and layer order. The <code>glow</code> token is used for
        focus states and interactive accents.
      </p>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div
          v-for="shadow in shadowTokens"
          :key="shadow.name"
          class="flex flex-col gap-3 rounded-lg border border-line bg-surface p-4"
        >
          <!-- Preview swatch -->
          <div
            class="h-16 w-full rounded-lg bg-accent-soft"
            :style="{ boxShadow: shadow.value }"
          />
          <div>
            <div class="flex items-baseline gap-2">
              <code class="text-sm font-semibold text-ink">{{ shadow.name }}</code>
              <span class="text-xs text-ink-subtle">{{ shadow.label }}</span>
            </div>
            <p class="mt-0.5 text-xs text-ink-subtle">
              {{ shadow.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
