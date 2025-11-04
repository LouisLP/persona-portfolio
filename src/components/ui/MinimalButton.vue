<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'glass' | 'solid' | 'outline' | 'ghost'
  size?: 'compact' | 'normal' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'glass',
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
    'group relative inline-flex items-center gap-2.5 rounded-xl font-medium',
    'transition-all duration-300 ease-out transform-gpu',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'active:scale-95 active:transition-none cursor-pointer',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
  ]

  const sizes = {
    compact: 'px-4 py-2.5 text-sm',
    normal: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  const variants = {
    glass: [
      'bg-slate-900/85 text-white border-2 border-slate-300/20 backdrop-blur-xl',
      'hover:bg-slate-800/90 hover:border-slate-200/40 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5',
      'focus-visible:ring-slate-200/60 focus-visible:ring-offset-transparent',
      'active:bg-slate-900/95 active:shadow-lg active:translate-y-0',
    ],
    solid: [
      'bg-indigo-600 text-white border-2 border-transparent',
      'hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5',
      'focus-visible:ring-indigo-400 focus-visible:ring-offset-transparent',
      'active:bg-indigo-700 active:shadow-md active:translate-y-0',
    ],
    outline: [
      'bg-transparent text-white border-2 border-slate-300/60',
      'hover:bg-slate-200/10 hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5',
      'focus-visible:ring-slate-200/60 focus-visible:ring-offset-transparent',
      'active:bg-slate-200/20 active:translate-y-0',
    ],
    ghost: [
      'bg-transparent text-white border-2 border-transparent',
      'hover:bg-slate-200/15 hover:shadow-md hover:-translate-y-0.5',
      'focus-visible:ring-slate-200/40 focus-visible:ring-offset-transparent',
      'active:bg-slate-200/25 active:translate-y-0',
    ],
  }

  return [...base, sizes[props.size], ...variants[props.variant]].join(' ')
})
</script>

<template>
  <button :class="buttonStyles" :disabled="disabled || loading" @click="handleClick">
    <!-- Loading State -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center rounded-xl bg-inherit"
    >
      <svg class="size-5 animate-spin text-current" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" class="opacity-25" />
        <path
          fill="currentColor"
          class="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </div>

    <!-- Content -->
    <div :class="loading ? 'invisible' : 'flex items-center gap-2.5'">
      <!-- Glass Icon - Champagne -->
      <svg
        v-if="icon && variant === 'glass'"
        class="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M149.91,13.53A8,8,0,0,0,142.3,8H97.71a8,8,0,0,0-7.61,5.53,451,451,0,0,0-14.21,59.7c-7.26,44.25-4.35,75.76,8.65,93.66A40,40,0,0,0,112,183.42V232H96a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16H128V183.42a39.94,39.94,0,0,0,27.46-16.53c13-17.9,15.92-49.41,8.66-93.66A451,451,0,0,0,149.91,13.53ZM93.8,64c3-15.58,6.73-29.81,9.79-40h32.83c3.06,10.19,6.77,24.42,9.8,40ZM232,52a12,12,0,1,1-12-12A12,12,0,0,1,232,52ZM184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,208,100Z"
        ></path>
      </svg>

      <!-- Solid Icon - Filled Circle -->
      <svg
        v-if="icon && variant === 'solid'"
        class="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>

      <!-- Outline Icon - Circle Outline -->
      <svg
        v-if="icon && variant === 'outline'"
        class="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>

      <!-- Ghost Icon - Dashed Circle -->
      <svg
        v-if="icon && variant === 'ghost'"
        class="size-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-dasharray="5,5"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>

      <!-- Text -->
      <span class="relative">
        <slot>Button</slot>
      </span>
    </div>
  </button>
</template>
