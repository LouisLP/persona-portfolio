<script setup lang="ts">
import { ref } from 'vue'
import { usePersonaStore } from '@/stores/persona'

const personaStore = usePersonaStore()

const hoveredTech = ref<string | null>(null)

const techStack = [
  {
    name: 'Vue.js',
    url: 'https://vuejs.org',
    description: 'Progressive JavaScript framework for building user interfaces',
    path: 'M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript',
    path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description: 'Utility-first CSS framework for rapid UI development',
    path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z',
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
              <!-- SVG Icon -->
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                :fill="personaStore.theme.primary"
                class="size-6 shrink-0 transition-transform duration-200 group-hover:scale-110"
              >
                <title>{{ tech.name }}</title>
                <path :d="tech.path" />
              </svg>

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
