<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'electric' | 'cyber' | 'toxic' | 'void'
  size?: 'compact' | 'normal' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'electric',
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
    'group relative inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider',
    'border-4 focus:outline-none transform-gpu transition-all duration-150',
    'disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
    // Neo-brutalist signature: harsh shadows and no rounded corners
    'shadow-[8px_8px_0px_0px_rgb(0_0_0)]',
  ]

  const sizes = {
    compact: 'px-6 py-3 text-xs min-h-[48px]',
    normal: 'px-8 py-4 text-sm min-h-[60px]',
    large: 'px-10 py-5 text-base min-h-[72px]',
  }

  const variants = {
    electric: [
      'bg-yellow-400 text-black border-black',
      // Hover: shift shadow for "pressed" effect
      'hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgb(0_0_0)]',
      // Active: fully pressed down
      'active:translate-x-[8px] active:translate-y-[8px] active:shadow-none active:scale-[0.98]',
      'focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-offset-2',
    ],
    cyber: [
      'bg-cyan-400 text-black border-black',
      'hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgb(0_0_0)]',
      'active:translate-x-[8px] active:translate-y-[8px] active:shadow-none active:scale-[0.98]',
      'focus-visible:ring-4 focus-visible:ring-cyan-300 focus-visible:ring-offset-2',
    ],
    toxic: [
      'bg-lime-400 text-black border-black',
      'hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgb(0_0_0)]',
      'active:translate-x-[8px] active:translate-y-[8px] active:shadow-none active:scale-[0.98]',
      'focus-visible:ring-4 focus-visible:ring-lime-300 focus-visible:ring-offset-2',
    ],
    void: [
      'bg-black text-white border-white',
      'shadow-[8px_8px_0px_0px_rgb(255_255_255)]',
      'hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgb(255_255_255)]',
      'active:translate-x-[8px] active:translate-y-[8px] active:shadow-none active:scale-[0.98]',
      'focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2',
    ],
  }

  return [...base, sizes[props.size], ...variants[props.variant]].join(' ')
})

const decorStyles = computed(() => {
  const variants = {
    electric: 'bg-black',
    cyber: 'bg-black',
    toxic: 'bg-black',
    void: 'bg-white',
  }
  return variants[props.variant]
})
</script>

<template>
  <button :class="buttonStyles" :disabled="disabled || loading" @click="handleClick">
    <!-- Loading State -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-inherit">
      <div class="h-6 w-6 animate-spin border-4 border-current border-t-transparent"></div>
    </div>

    <!-- Content -->
    <div :class="loading ? 'invisible' : 'relative z-10 flex items-center justify-center gap-2'">
      <!-- Icons for each variant -->
      <!-- Lightning Bolt -->
      <svg
        v-if="icon && variant === 'electric'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"
        ></path>
      </svg>

      <!-- Robot -->
      <svg
        v-if="icon && variant === 'cyber'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z"
        ></path>
      </svg>

      <!-- Biohazard -->
      <svg
        v-if="icon && variant === 'toxic'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"
        ></path>
      </svg>

      <!-- Skull -->
      <svg
        v-if="icon && variant === 'void'"
        class="h-5 w-5 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          d="M128,16C70.65,16,24,60.86,24,116c0,34.1,18.27,66,48,84.28V216a16,16,0,0,0,16,16h8a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V200.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v28a4,4,0,0,0,4,4h8a16,16,0,0,0,16-16V200.28C213.73,182,232,150.1,232,116,232,60.86,185.35,16,128,16ZM92,152a20,20,0,1,1,20-20A20,20,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20,20,0,0,1,164,152Z"
        ></path>
      </svg>

      <!-- Text with brutalist typography -->
      <span class="relative font-black">
        <slot>BRUTAL</slot>
      </span>
    </div>
  </button>
</template>

<style scoped>
.clip-path-triangle {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>
