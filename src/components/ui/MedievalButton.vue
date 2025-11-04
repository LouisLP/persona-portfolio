<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'knight' | 'royal' | 'stone' | 'gold'
  size?: 'compact' | 'normal' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'knight',
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
    'group relative inline-flex items-center justify-center gap-3 font-bold',
    'border-4 focus:outline-none shadow-2xl',
    'disabled:pointer-events-none disabled:opacity-40',
    'cursor-pointer select-none',
  ]

  const sizes = {
    compact: 'px-5 py-2.5 text-sm min-h-[44px]',
    normal: 'px-8 py-3.5 text-base min-h-[56px]',
    large: 'px-10 py-5 text-lg min-h-[68px]',
  }

  const variants = {
    knight: [
      'bg-gradient-to-b from-stone-700 via-stone-800 to-stone-900',
      'border-stone-950 text-orange-200',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_0_rgba(0,0,0,0.4)]',
      '[text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]',
      // Hover/state effects:
      'hover:from-stone-600 hover:via-stone-700 hover:to-stone-800 hover:brightness-110',
      'active:from-stone-800 active:to-stone-700 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] active:brightness-90',
      'focus-visible:ring-1 focus-visible:ring-orange-400/50',
      'transition-all duration-100 ease-linear',
    ],
    royal: [
      'bg-gradient-to-b from-red-800 via-red-900 to-red-950',
      'border-red-950 text-yellow-200',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_0_rgba(0,0,0,0.4)]',
      '[text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]',
      // Hover/state effects:
      'hover:from-red-700 hover:via-red-800 hover:to-red-900 hover:brightness-110',
      'active:from-red-900 active:to-red-800 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] active:brightness-90',
      'focus-visible:ring-1 focus-visible:ring-yellow-400/50',
      'transition-all duration-100 ease-linear',
    ],
    stone: [
      'bg-gradient-to-b from-slate-500 via-slate-600 to-slate-700',
      'border-slate-900 text-slate-100',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_0_rgba(0,0,0,0.4)]',
      '[text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]',
      // Hover/state effects:
      'hover:from-slate-400 hover:via-slate-500 hover:to-slate-600 hover:brightness-110',
      'active:from-slate-600 active:to-slate-500 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] active:brightness-90',
      'focus-visible:ring-1 focus-visible:ring-slate-300/50',
      'transition-all duration-100 ease-linear',
    ],
    gold: [
      'bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600',
      'border-amber-900 text-amber-950',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_0_rgba(0,0,0,0.3)]',
      '[text-shadow:_0_1px_1px_rgb(255_255_255_/_20%)]',
      // Hover/state effects:
      'hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 hover:brightness-110',
      'active:from-amber-600 active:to-amber-500 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] active:brightness-90',
      'focus-visible:ring-1 focus-visible:ring-amber-300/60',
      'transition-all duration-100 ease-linear',
    ],
  }

  return [...base, sizes[props.size], ...variants[props.variant]].join(' ')
})

const cornerStyles = computed(() => {
  const variants = {
    knight: 'bg-amber-700',
    royal: 'bg-yellow-600',
    stone: 'bg-stone-800',
    gold: 'bg-yellow-950',
  }
  return variants[props.variant]
})
</script>

<template>
  <button :class="buttonStyles" :disabled="disabled || loading" @click="handleClick">
    <!-- Medieval Corner Decorations -->
    <div class="pointer-events-none absolute inset-0">
      <!-- Top Left Corner -->
      <div :class="[cornerStyles, 'absolute top-0 left-0 h-2 w-2']"></div>
      <div :class="[cornerStyles, 'absolute top-0 left-0 h-3 w-1']"></div>
      <div :class="[cornerStyles, 'absolute top-0 left-0 h-1 w-3']"></div>

      <!-- Top Right Corner -->
      <div :class="[cornerStyles, 'absolute top-0 right-0 h-2 w-2']"></div>
      <div :class="[cornerStyles, 'absolute top-0 right-0 h-3 w-1']"></div>
      <div :class="[cornerStyles, 'absolute top-0 right-0 h-1 w-3']"></div>

      <!-- Bottom Left Corner -->
      <div :class="[cornerStyles, 'absolute bottom-0 left-0 h-2 w-2']"></div>
      <div :class="[cornerStyles, 'absolute bottom-0 left-0 h-3 w-1']"></div>
      <div :class="[cornerStyles, 'absolute bottom-0 left-0 h-1 w-3']"></div>

      <!-- Bottom Right Corner -->
      <div :class="[cornerStyles, 'absolute right-0 bottom-0 h-2 w-2']"></div>
      <div :class="[cornerStyles, 'absolute right-0 bottom-0 h-3 w-1']"></div>
      <div :class="[cornerStyles, 'absolute right-0 bottom-0 h-1 w-3']"></div>
    </div>

    <!-- Loading State -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center rounded-sm bg-inherit"
    >
      <svg class="h-6 w-6 animate-spin opacity-90" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" class="opacity-25" />
        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <!-- Content -->
    <div :class="loading ? 'invisible' : 'relative z-10 flex items-center justify-center gap-2'">
      <!-- Crossed Swords -->
      <svg
        v-if="icon && variant === 'knight'"
        class="mb-0.5 h-5 w-5 flex-shrink-0"
        fill="currentColor"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"
        ></path>
      </svg>

      <!-- Royal Crown -->
      <svg
        v-if="icon && variant === 'royal'"
        class="mb-0.5 h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M180,56c-17.74,0-33.21,6.48-44,17.16V40h16a8,8,0,0,0,0-16H136V8a8,8,0,0,0-16,0V24H104a8,8,0,0,0,0,16h16V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Zm1.47,120.41A8,8,0,0,0,176,184v24H80V184a8,8,0,0,0-5.47-7.59C74.1,176.27,32,161.7,32,116A44.05,44.05,0,0,1,76,72c25.5,0,44,16.82,44,40v64a8,8,0,0,0,16,0V112c0-23.18,18.5-40,44-40a44.05,44.05,0,0,1,44,44C224,161.4,183.18,175.83,181.47,176.41Z"
        ></path>
      </svg>

      <!-- Castle Shield -->
      <svg
        v-if="icon && variant === 'stone'"
        class="mb-0.5 h-5 w-5 flex-shrink-0"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        viewBox="0 0 256 256"
      >
        <path
          d="M88,128a8,8,0,0,1,8-8h24V96a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16H136v24a8,8,0,0,1-16,0V136H96A8,8,0,0,1,88,128ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z"
        ></path>
      </svg>

      <!-- Treasure Chest -->
      <svg
        v-if="icon && variant === 'gold'"
        class="mb-0.5 h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z"
        ></path>
      </svg>

      <!-- Text with Medieval Typography -->
      <span class="relative text-sm uppercase" style="font-family: serif; letter-spacing: 0.08em">
        <slot>Medieval Button</slot>
      </span>
    </div>
  </button>
</template>
