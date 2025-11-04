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
      'bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700',
      'border-pink-400 text-white',
      'shadow-[0_0_20px_rgba(236,72,153,0.3)]',
      'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:border-pink-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(236,72,153,0.4)]',
      'focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    neon: [
      'bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700',
      'border-cyan-400 text-white',
      'shadow-[0_0_20px_rgba(34,211,238,0.4)]',
      'hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:border-cyan-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(34,211,238,0.5)]',
      'focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    arcade: [
      'bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600',
      'border-yellow-400 text-white',
      'shadow-[0_0_20px_rgba(251,191,36,0.4)]',
      '[text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]',
      'hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:border-yellow-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(251,191,36,0.5)]',
      'focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700',
    ],
    hologram: [
      'bg-gradient-to-r from-teal-600 via-green-600 to-blue-600',
      'border-teal-400 text-white',
      'shadow-[0_0_20px_rgba(45,212,191,0.3)]',
      'hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:border-teal-300 hover:scale-105',
      'active:scale-100 active:shadow-[0_0_15px_rgba(45,212,191,0.4)]',
      'focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2',
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
      <!-- Wave -->
      <svg
        v-if="icon && variant === 'synthwave'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-4.78,91.44c-16.68,35-31.06,50.56-46.65,50.56-19.68,0-31.39-24.56-43.79-50.56C112,113,101,90,91.43,90c-3.74,0-14.37,4-32.21,41.44a8,8,0,0,1-14.44-6.88C61.46,89.59,75.84,74,91.43,74c19.68,0,31.39,24.56,43.79,50.56C144,143,155,166,164.57,166c3.74,0,14.37-4,32.21-41.44a8,8,0,1,1,14.44,6.88Z"
        ></path>
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

      <!-- Joystick -->
      <svg
        v-if="icon && variant === 'arcade'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M224,160v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16h72V95.19a40,40,0,1,1,16,0V144h72A16,16,0,0,1,224,160Zm-64-40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H168A8,8,0,0,0,160,120Z"
        ></path>
      </svg>

      <!-- Prism/Diamond -->
      <svg
        v-if="icon && variant === 'hologram'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm106.84,0h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z"
        ></path>
      </svg>

      <!-- Text with retro styling -->
      <span class="relative font-bold tracking-wide">
        <slot>RETRO</slot>
      </span>
    </div>
  </button>
</template>
