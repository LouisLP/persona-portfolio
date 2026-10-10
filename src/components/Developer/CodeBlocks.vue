<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

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
  frontend: ['Vue', 'React', 'HTML/CSS', 'Tailwind', 'Storybook', 'Figma'],
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
  <div class="flex flex-col gap-8">
    <!-- Commentary -->
    <section
      class="w-full rounded-lg border border-line bg-surface p-6 font-mono text-sm md:p-8 flex flex-col gap-4"
    >
      <!-- Commentary section 1 -->
      <div>
        <div class="leading-relaxed text-ink-muted">
          <span class="text-ink-subtle">/* </span>
          Coming from a creative background, I bring the same principles of organization and clarity into my development approach.
          <span class="text-ink-subtle"> */</span>
        </div>
      </div>

      <!-- Commentary section 2 -->
      <div>
        <div class="leading-relaxed text-ink-muted">
          <span class="text-ink-subtle">/* </span>
          I start by planning thoroughly, figuring out the initial requirements. I often use Figma to prototype and get a better idea of UX flow and layout before diving into code. When coding, I prioritize best practices, clean organization, and staying current with modern tools, architecture, and standards. I take the same care with collaboration by structuring PRs thoughtfully, giving very detailed and constructive code reviews.
          <span class="text-ink-subtle"> */</span>
        </div>
      </div>

      <!-- Commentary section 3 -->
      <div>
        <div class="leading-relaxed text-ink-muted">
          <span class="text-ink-subtle">/* </span>
          You write code once, but read it potentially hundreds of times. Make it clear, make it
          maintainable, and make it easy for others (and your future self) to understand.
          <span class="text-ink-subtle"> */</span>
        </div>
      </div>
    </section>

    <!-- Skills & Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column: Tech Stack + Skills -->
      <div class="space-y-8">
        <!-- Skills Code Block -->
        <div
          class="w-full rounded-lg border border-line bg-surface p-6 font-mono text-sm md:p-8"
        >
          <header class="mb-2 text-accent">
            const skills = {
          </header>
          <div class="ml-6 space-y-1 text-ink-subtle">
            <section v-for="(skillList, category) in skills" :key="category" class="leading-relaxed">
              <span class="text-ink">{{ category }}: </span>[<span
                v-for="(skill, index) in skillList" :key="skill" class="text-code-string"
              >'{{ skill }}'<span
                v-if="index < skillList.length - 1"
              >, </span></span>],
            </section>
          </div>
          <div class="mt-2 text-accent">
            }
          </div>
        </div>

        <!-- Preferred Tech Stack Code Block -->
        <div
          class="w-full rounded-lg border border-line bg-surface p-6 font-mono text-sm md:p-8"
        >
          <header class="mb-4 text-accent">
            const preferredTechStack = [
          </header>

          <div class="ml-6 grid grid-cols-2 gap-3">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              class="group relative flex cursor-pointer items-center gap-3 rounded-md border border-line p-3 transition-colors duration-200 hover:border-accent"
              @mouseenter="hoveredTech = tech.name"
              @mouseleave="hoveredTech = null"
              @click="openDocumentation(tech.url)"
            >
              <!-- Icon -->
              <Icon
                class="size-6 text-ink-muted transition-colors duration-200 group-hover:text-accent"
                :icon="tech.icon"
              />

              <!-- Tech Name -->
              <span class="text-code-string">
                '{{ tech.name }}'
              </span>

              <!-- Tooltip on hover -->
              <!-- <div
                v-if="hoveredTech === tech.name"
                class="absolute left-0 top-full mt-2 z-10 w-64 rounded-md border border-line bg-surface p-3"
              >
                <p class="text-xs leading-relaxed text-ink-muted mb-2">
                  {{ tech.description }}
                </p>
                <p class="text-xs text-ink-subtle">
                  Click to view docs →
                </p>
              </div> -->
            </div>
          </div>

          <div class="mt-4 text-accent">
            ]
          </div>
        </div>
      </div>

      <!-- Right Column: Projects -->
      <div
        class="w-full rounded-lg border border-line bg-surface p-6 font-mono text-sm md:p-8"
      >
        <header class="mb-2 text-accent">
          const projects = [
        </header>
        <div class="ml-6 space-y-3 text-ink-subtle">
          <div v-for="(project, index) in projects" :key="project.name" class="leading-relaxed">
            <div>
              {
            </div>
            <div class="ml-4 space-y-1">
              <div>
                <span class="text-ink">name:
                </span>
                <span class="text-code-string">'{{ project.name }}'</span>,
              </div>
              <div>
                <span class="text-ink">year:
                </span>
                <span class="text-code-number">{{ project.year }}</span>,
              </div>
              <div>
                <span class="text-ink">description:
                </span>
                <span class="text-code-string">'{{ project.description }}'</span>
              </div>
            </div>
            <div>
              }<span v-if="index < projects.length - 1">,</span>
            </div>
          </div>
        </div>
        <div class="mt-2 text-accent">
          ]
        </div>
      </div>
    </div>
  </div>
</template>
