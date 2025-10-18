<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
</script>

<template>

    <!-- Code-styled box -->
    <div class="font-developer mt-6 w-1/2 rounded-lg border border-blue-500/30 bg-black/50 p-6">
      <div class="text-blue-400">const skills = {</div>
      <div class="ml-4 text-gray-300">
        <div>
          <span class="text-purple-400">frontend:</span>
          <span class="text-green-400">'Vue, TypeScript, Tailwind'</span>,
        </div>
        <div>
          <span class="text-purple-400">backend:</span>
          <span class="text-green-400">'Node.js, APIs'</span>,
        </div>
        <div>
          <span class="text-purple-400">tools:</span>
          <span class="text-green-400">'Git, Docker'</span>
        </div>
      </div>
      <div class="text-blue-400">}</div>
    </div>
  </section>
</template>
