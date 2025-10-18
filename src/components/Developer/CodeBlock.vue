<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()
</script>

<template>
  <!-- Code-styled box -->
  <div
    class="font-developer mx-12 mt-6 w-fit max-w-1/2 rounded-lg border border-blue-500/30 bg-black/50 p-6"
  >
    <header class="text-blue-400">const skills = {</header>
    <div class="ml-4 text-gray-300">
      <section id="languages-and-core-skills">
        <span class="text-purple-400">languagesAndCore: </span>
        <span class="text-green-400"
          >'TypeScript, JavaScript, Python, SQL, Java, C++, Git, CI/CD, Testing,
          Documentation'</span
        >,
      </section>
      <section id="frontend-skills">
        <span class="text-purple-400">frontend: </span>
        <span class="text-green-400">'Vue, React, HTML/CSS, Tailwind'</span>,
      </section>
      <section id="backend-skills">
        <span class="text-purple-400">backend: </span>
        <span class="text-green-400">'Node.js, API_development, Docker'</span>,
      </section>
      <section id="database-skills">
        <span class="text-purple-400">databases: </span>
        <span class="text-green-400"
          >'MySQL, PostgreSQL, MongoDB, database_design, database_migrations'</span
        >
      </section>
    </div>
    <div class="text-blue-400">}</div>
  </div>
</template>
