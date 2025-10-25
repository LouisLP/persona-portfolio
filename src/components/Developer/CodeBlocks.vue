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
  backend: ['Node.js', 'API Development', 'Docker'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Database Migrations'],
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
  <div class="container flex flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-center">
    <!-- Skills Code Block -->
    <div
      class="font-developer hover:shadow-3xl w-full max-w-2xl rounded-xl border p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 lg:w-1/2"
      :style="{
        borderColor: personaStore.theme.primary + '40',
        backgroundColor: personaStore.theme.background + 'CC',
        boxShadow: `0 25px 50px -12px ${personaStore.theme.primary}20`,
      }"
    >
      <!-- Commentary section 1 -->
      <div class="mb-4 rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          Coming from a creative background, I bring the same principles of structure, iteration,
          and clarity into my development approach.
          <span class="text-green-400"> */</span>
        </div>
      </div>

      <!-- Commentary section 2 -->
      <div class="mb-8 rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          I start by planning thoroughly, using prototypes, documentation, and clear goals to shape
          the process. When coding, I prioritize best practices, clean organization, and staying
          current with modern tools and standards. I take the same care with collaboration by
          structuring PRs thoughtfully, giving detailed and constructive code reviews, and keeping
          communication open.
          <span class="text-green-400"> */</span>
        </div>
      </div>

      <!-- Skills -->
      <header class="mb-2 text-lg" :style="{ color: personaStore.theme.primary }">
        const skills = {
      </header>
      <div class="ml-6 space-y-1" :style="{ color: personaStore.theme.text }">
        <section v-for="(skillList, category) in skills" :key="category" class="leading-relaxed">
          <span class="font-semibold" :style="{ color: personaStore.theme.secondary }"
            >{{ category }}: </span
          >[<span v-for="(skill, index) in skillList" :key="skill" class="text-green-400"
            >'{{ skill }}'<span v-if="index < skillList.length - 1">, </span></span
          >],
        </section>
      </div>
      <div class="mt-2 text-lg font-bold" :style="{ color: personaStore.theme.primary }">}</div>
    </div>

    <!-- Projects Code Block -->
    <div
      class="font-developer hover:shadow-3xl w-full max-w-2xl rounded-xl border p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 lg:w-1/2"
      :style="{
        borderColor: personaStore.theme.secondary + '40',
        backgroundColor: personaStore.theme.background + 'CC',
        boxShadow: `0 25px 50px -12px ${personaStore.theme.secondary}20`,
      }"
    >
      <!-- Commentary section 3 -->
      <div class="mb-8 rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          You write code once, but read it potentially hundreds of times. Make it clear, make it
          maintainable, and make it easy for others (and your future self) to understand.
          <span class="text-green-400"> */</span>
        </div>
      </div>

      <header class="mb-2 text-lg" :style="{ color: personaStore.theme.primary }">
        const projects = [
      </header>
      <div class="ml-6 space-y-3" :style="{ color: personaStore.theme.text }">
        <div v-for="(project, index) in projects" :key="project.name" class="leading-relaxed">
          <div class="font-semibold" :style="{ color: personaStore.theme.primary }">{</div>
          <div class="ml-4 space-y-1">
            <div>
              <span class="font-medium" :style="{ color: personaStore.theme.secondary }"
                >name:
              </span>
              <span class="text-green-400">'{{ project.name }}'</span>,
            </div>
            <div>
              <span class="font-medium" :style="{ color: personaStore.theme.secondary }"
                >year:
              </span>
              <span class="text-yellow-400">{{ project.year }}</span
              >,
            </div>
            <div>
              <span class="font-medium" :style="{ color: personaStore.theme.secondary }"
                >description:
              </span>
              <span class="text-green-400">'{{ project.description }}'</span>
            </div>
          </div>
          <div class="font-semibold" :style="{ color: personaStore.theme.primary }">
            }<span v-if="index < projects.length - 1">,</span>
          </div>
        </div>
      </div>
      <div class="mt-2 text-lg font-bold" :style="{ color: personaStore.theme.primary }">]</div>
    </div>
  </div>
</template>
