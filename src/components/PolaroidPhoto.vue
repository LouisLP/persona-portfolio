<script setup lang="ts">
interface Props {
  imagePath: string
  rotation?: number
}

const props = withDefaults(defineProps<Props>(), {
  rotation: 0,
})
</script>

<template>
  <!-- Polaroid photo container -->
  <figure
    class="flex h-80 w-70 items-center justify-center bg-stone-100 pb-10 shadow-lg shadow-black/40 transition-transform duration-400 hover:-translate-y-3 lg:h-110 lg:w-100"
    :style="{ transform: `rotate(${props.rotation}deg)` }"
  >
    <!-- Image container -->
    <div class="size-64 overflow-hidden bg-surface lg:size-90">
      <img :src="props.imagePath" alt="" class="size-full object-cover">
    </div>
  </figure>
</template>
