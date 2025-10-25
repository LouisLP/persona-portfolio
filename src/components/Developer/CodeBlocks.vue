<script setup lang="ts">
import { usePersonaStore } from '@/stores/persona'
const personaStore = usePersonaStore()

const skills = {
  languagesAndCore: [
    'TypeScript',
    'JavaScript',
    'Python',
    'SQL',
    'Java',
    'C++',
    'Git',
    'CI/CD',
    'Testing',
    'Documentation',
  ],
  frontend: ['Vue', 'React', 'HTML/CSS', 'Tailwind'],
  backend: ['Node.js', 'API_development', 'Docker'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'database_design', 'database_migrations'],
}

const projects = [
  {
    name: 'Publication & Directed Studies',
    year: 2023,
    description:
      'Directed studies at UBC under Dr. Ramon Lawrence — gaining industry-level experience in system administration and backend development. Later co-authored a paper titled "Live Session Gamification using PrairieLearn".',
  },
  {
    name: 'PrairieLearn Ranked',
    year: 2023,
    description:
      'Capstone project at UBC, creating a ranking system for the PrairieLearn quizzing platform to help students gauge performance in live and asynchronous settings.',
  },
]
</script>

<template>
  <div class="flex gap-6">
    <!-- Skills Code Block -->
    <div
      class="font-developer w-full rounded-lg border border-blue-500/30 bg-black/50 p-6 lg:w-1/2"
    >
      <header class="text-blue-400">const skills = {</header>
      <div class="ml-4 text-gray-300">
        <section v-for="(skillList, category) in skills" :key="category">
          <span class="text-purple-400">{{ category }}: </span>
          [
          <span v-for="(skill, index) in skillList" :key="skill" class="text-green-400">
            '{{ skill }}'<span v-if="index < skillList.length - 1">, </span>
          </span>
          ],
        </section>
      </div>
      <div class="text-blue-400">}</div>
    </div>

    <!-- Projects Code Block -->
    <div
      class="font-developer w-full rounded-lg border border-purple-500/30 bg-black/50 p-6 lg:w-1/2"
    >
      <header class="text-purple-400">const projects = [</header>
      <div class="ml-4 text-gray-300">
        <div v-for="(project, index) in projects" :key="project.name">
          <div class="text-blue-400">{</div>
          <div class="ml-4">
            <div>
              <span class="text-purple-400">name: </span
              ><span class="text-green-400">'{{ project.name }}'</span>,
            </div>
            <div>
              <span class="text-purple-400">year: </span
              ><span class="text-yellow-400">{{ project.year }}</span
              >,
            </div>
            <div>
              <span class="text-purple-400">description: </span
              ><span class="text-green-400">'{{ project.description }}'</span>
            </div>
          </div>
          <div class="text-blue-400">}<span v-if="index < projects.length - 1">,</span></div>
        </div>
      </div>
      <div class="text-purple-400">]</div>
    </div>
  </div>
</template>
