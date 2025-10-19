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
    class="flex h-80 w-70 items-center justify-center bg-gray-100 pb-10 shadow-lg lg:h-110 lg:w-100"
    :style="{ transform: `rotate(${props.rotation}deg)` }"
  >
    <!-- Image container -->
    <div class="size-64 overflow-hidden bg-gray-800 lg:size-90">
      <img :src="props.imagePath" :alt="'Polaroid photo'" class="size-full object-cover" />
    </div>
  </figure>
</template>
