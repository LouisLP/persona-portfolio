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
      <!-- Icon -->
      <svg
        v-if="icon"
        class="size-4 transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path
          d="M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Z"
        />
      </svg>

      <!-- Text -->
      <span class="relative">
        <slot>Button</slot>
      </span>
    </div>
  </button>
</template>
