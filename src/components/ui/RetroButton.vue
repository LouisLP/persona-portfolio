<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'synthwave' | 'neon' | 'arcade' | 'hologram'
  size?: 'compact' | 'normal' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'synthwave',
  size: 'normal',
  disabled: false,
  loading: false,
  icon: true,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonStyles = computed(() => {
  const base = [
    'group relative inline-flex items-center justify-center gap-2.5 font-bold',
    'border-2 focus:outline-none transition-all duration-300 ease-out',
    'disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
    // Retro rounded corners and neon glow base
    'rounded-lg overflow-hidden',
  ]

  const sizes = {
    compact: 'px-6 py-3 text-sm min-h-[48px]',
    normal: 'px-8 py-4 text-base min-h-[60px]',
    large: 'px-10 py-5 text-lg min-h-[72px]',
  }

  const variants = {
    synthwave: [
      'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600',
      'border-pink-400 text-white',
      'shadow-[0_0_20px_rgba(236,72,153,0.3)]',
      'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:border-pink-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(236,72,153,0.4)]',
      'focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2',
      // Animated background
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    neon: [
      'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600',
      'border-cyan-400 text-white',
      'shadow-[0_0_20px_rgba(34,211,238,0.4)]',
      'hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:border-cyan-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(34,211,238,0.5)]',
      'focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    arcade: [
      'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
      'border-yellow-400 text-white',
      'shadow-[0_0_20px_rgba(251,191,36,0.4)]',
      '[text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]',
      'hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:border-yellow-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(251,191,36,0.5)]',
      'focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    hologram: [
      'bg-gradient-to-r from-teal-400 via-green-400 to-blue-500',
      'border-teal-400 text-white',
      'shadow-[0_0_20px_rgba(45,212,191,0.3)]',
      'hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:border-teal-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(45,212,191,0.4)]',
      'focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2',
      // Iridescent shimmer effect
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000',
      'after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] after:animate-pulse',
    ],
  }

  return [...base, sizes[props.size], ...variants[props.variant]].join(' ')
})
</script>

<template>
  <button :class="buttonStyles" :disabled="disabled || loading" @click="handleClick">
    <!-- Retro grid pattern overlay -->
    <div class="pointer-events-none absolute inset-0 opacity-10">
      <div
        class="h-full w-full"
        style="
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.1) 2px,
              rgba(255, 255, 255, 0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.1) 2px,
              rgba(255, 255, 255, 0.1) 4px
            );
        "
      ></div>
    </div>

    <!-- Loading State -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center rounded-lg bg-inherit"
    >
      <div class="relative">
        <div
          class="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
        ></div>
        <div class="absolute inset-0 h-6 w-6 animate-ping rounded-full border border-current"></div>
      </div>
    </div>

    <!-- Content -->
    <div :class="loading ? 'invisible' : 'relative z-10 flex items-center justify-center gap-2.5'">
      <!-- Retro Icons -->
      <!-- Cassette Tape -->
      <svg
        v-if="icon && variant === 'synthwave'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h8v4H8v-4zm1 1v2h2v-2H9zm4 0v2h2v-2h-2z" />
      </svg>

      <!-- Computer Terminal -->
      <svg
        v-if="icon && variant === 'neon'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M2 4v16h20V4H2zm18 14H4V6h16v12zM6 8v2h2V8H6zm4 0v2h8V8h-8zm-4 4v2h2v-2H6zm4 0v2h8v-2h-8z"
        />
      </svg>

      <!-- Game Controller -->
      <svg
        v-if="icon && variant === 'arcade'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M6 9h2v2H6V9zm0 4h2v2H6v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2zM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8z"
        />
      </svg>

      <!-- Prism/Diamond -->
      <svg
        v-if="icon && variant === 'hologram'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2l3.09 6.26L22 9l-5.91 3.74L12 22l-4.09-9.26L2 9l6.91-.74L12 2zm0 4.13L10.5 9.5 12 10.87 13.5 9.5 12 6.13z"
        />
      </svg>

      <!-- Text with retro styling -->
      <span class="relative font-bold tracking-wide">
        <slot>RETRO</slot>
      </span>
    </div>
  </button>
</template>
