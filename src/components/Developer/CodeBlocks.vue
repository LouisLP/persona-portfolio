<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

const hoveredTech = ref<string | null>(null)

const techStack = [
  {
    name: 'Vue.js',
    url: 'https://vuejs.org',
    description: 'Progressive JavaScript framework for building user interfaces',
    icon: 'mdi:vuejs',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript',
    icon: 'lineicons:typescript',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: 'mdi:tailwind',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    icon: 'mdi:nodejs',
  },
]

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
  meta: ['Nuxt'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Database Migrations'],
}

const projects = [
  {
    name: 'Agile Data Hub',
    year: 2025,
    description:
      'Marketplace for robot "task" datasets at AgileRobots, enabling users to browse and purchase pre-recorded robot actions. Built with Nuxt, Tailwind, Prisma (SQLite), BetterAuth, and Stripe.',
  },
  {
    name: 'PrairieLearn Ranked & Publication',
    year: 2023,
    description:
      'Capstone project at UBC creating a ranking system for the PrairieLearn quizzing platform, extended through directed studies under Dr. Ramon Lawrence. Later co-authored a paper titled "Live Session Gamification using PrairieLearn".',
  },
]

function openDocumentation(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="container flex flex-col gap-8 px-4">
    <!-- Commentary -->
    <section
      class="font-developer w-full rounded-xl border p-8 shadow-2xl backdrop-blur-sm flex-col gap-3 flex"
      :style="{
        borderColor: `${personaStore.theme.primary}40`,
        backgroundColor: `${personaStore.theme.background}CC`,
        boxShadow: `0 25px 50px -12px ${personaStore.theme.primary}20`,
      }"
    >
      <!-- Commentary section 1 -->
      <div class="rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          Coming from a creative background, I bring the same principles of organization and clarity into my development approach.
          <span class="text-green-400"> */</span>
        </div>
      </div>

      <!-- Commentary section 2 -->
      <div class="rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          I start by planning thoroughly, figuring out the initial requirements. I often use Figma to prototype and get a better idea of UX flow and layout before diving into code. When coding, I prioritize best practices, clean organization, and staying current with modern tools, architecture, and standards. I take the same care with collaboration by structuring PRs thoughtfully, giving very detailed and constructive code reviews.
          <span class="text-green-400"> */</span>
        </div>
      </div>

      <!-- Commentary section 3 -->
      <div class="rounded-lg bg-gray-900/50 p-4">
        <div class="text-sm leading-relaxed text-gray-400">
          <span class="text-green-400">/* </span>
          You write code once, but read it potentially hundreds of times. Make it clear, make it
          maintainable, and make it easy for others (and your future self) to understand.
          <span class="text-green-400"> */</span>
        </div>
      </div>
    </section>

    <!-- Skills & Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column: Tech Stack + Skills -->
      <div class="space-y-8">
        <!-- Skills Code Block -->
        <div
          class="font-developer w-full rounded-xl border p-8 shadow-2xl backdrop-blur-sm"
          :style="{
            borderColor: `${personaStore.theme.primary}40`,
            backgroundColor: `${personaStore.theme.background}CC`,
            boxShadow: `0 25px 50px -12px ${personaStore.theme.primary}20`,
          }"
        >
          <header class="mb-2 text-lg" :style="{ color: personaStore.theme.primary }">
            const skills = {
          </header>
          <div class="ml-6 space-y-1" :style="{ color: personaStore.theme.text }">
            <section v-for="(skillList, category) in skills" :key="category" class="leading-relaxed">
              <span class="font-semibold" :style="{ color: personaStore.theme.secondary }">{{ category }}: </span>[<span
                v-for="(skill, index) in skillList" :key="skill" class="text-green-400"
              >'{{ skill }}'<span
                v-if="index < skillList.length - 1"
              >, </span></span>],
            </section>
          </div>
          <div class="mt-2 text-lg font-bold" :style="{ color: personaStore.theme.primary }">
            }
          </div>
        </div>

        <!-- Preferred Tech Stack Code Block -->
        <div
          class="font-developer w-full rounded-xl border p-8 shadow-2xl backdrop-blur-sm"
          :style="{
            borderColor: `${personaStore.theme.primary}40`,
            backgroundColor: `${personaStore.theme.background}CC`,
            boxShadow: `0 25px 50px -12px ${personaStore.theme.primary}20`,
          }"
        >
          <header class="mb-4 text-lg" :style="{ color: personaStore.theme.primary }">
            const preferredTechStack = [
          </header>

          <div class="ml-6 grid grid-cols-2 gap-3">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="group relative flex items-center gap-3 rounded-lg border border-gray-700/30 bg-gray-900/30 p-3 cursor-pointer transition-all duration-200 hover:border-gray-600/50 hover:bg-gray-800/40"
              @mouseenter="hoveredTech = tech.name"
              @mouseleave="hoveredTech = null"
              @click="openDocumentation(tech.url)"
            >
              <!-- Icon -->
              <Icon
                class="size-6 transition-colors duration-200 group-hover:opacity-80"
                :style="{ color: personaStore.theme.primary }"
                :icon="tech.icon"
              />

              <!-- Tech Name -->
              <span class="text-sm text-green-400 font-medium">
                '{{ tech.name }}'
              </span>

              <!-- Tooltip on hover -->
              <div
                v-if="hoveredTech === tech.name"
                class="absolute left-0 top-full mt-2 z-10 w-64 rounded-lg border border-gray-700/50 bg-gray-900/95 p-3 shadow-xl backdrop-blur-sm"
                :style="{
                  borderColor: `${personaStore.theme.primary}40`,
                }"
              >
                <p class="text-xs leading-relaxed text-gray-300 mb-2">
                  {{ tech.description }}
                </p>
                <p class="text-xs text-gray-500">
                  Click to view docs →
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4 text-lg font-bold" :style="{ color: personaStore.theme.primary }">
            ]
          </div>
        </div>
      </div>

      <!-- Right Column: Projects -->
      <div
        class="font-developer hover:shadow-3xl w-full rounded-xl border p-8 shadow-2xl backdrop-blur-sm transition-all duration-300"
        :style="{
          borderColor: `${personaStore.theme.secondary}40`,
          backgroundColor: `${personaStore.theme.background}CC`,
          boxShadow: `0 25px 50px -12px ${personaStore.theme.secondary}20`,
        }"
      >
        <header class="mb-2 text-lg" :style="{ color: personaStore.theme.primary }">
          const projects = [
        </header>
        <div class="ml-6 space-y-3" :style="{ color: personaStore.theme.text }">
          <div v-for="(project, index) in projects" :key="project.name" class="leading-relaxed">
            <div class="font-semibold" :style="{ color: personaStore.theme.primary }">
              {
            </div>
            <div class="ml-4 space-y-1">
              <div>
                <span class="font-medium" :style="{ color: personaStore.theme.secondary }">name:
                </span>
                <span class="text-green-400">'{{ project.name }}'</span>,
              </div>
              <div>
                <span class="font-medium" :style="{ color: personaStore.theme.secondary }">year:
                </span>
                <span class="text-yellow-400">{{ project.year }}</span>,
              </div>
              <div>
                <span class="font-medium" :style="{ color: personaStore.theme.secondary }">description:
                </span>
                <span class="text-green-400">'{{ project.description }}'</span>
              </div>
            </div>
            <div class="font-semibold" :style="{ color: personaStore.theme.primary }">
              }<span v-if="index < projects.length - 1">,</span>
            </div>
          </div>
        </div>
        <div class="mt-2 text-lg font-bold" :style="{ color: personaStore.theme.primary }">
          ]
        </div>
      </div>
    </div>
  </div>
</template>
