import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/developer', // Default persona
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/PersonaView.vue'),
    meta: { persona: 'editor' },
  },
  // {
  //   path: '/editor/projects',
  //   name: 'EditorProjects',
  //   component: () => import('@/views/ProjectsView.vue'),
  //   meta: { persona: 'editor' },
  // },
  {
    path: '/designer',
    name: 'Designer',
    component: () => import('@/views/PersonaView.vue'),
    meta: { persona: 'designer' },
  },
  // {
  //   path: '/designer/portfolio',
  //   name: 'DesignerPortfolio',
  //   component: () => import('@/views/PortfolioView.vue'),
  //   meta: { persona: 'designer' },
  // },
  {
    path: '/developer',
    name: 'Developer',
    component: () => import('@/views/PersonaView.vue'),
    meta: { persona: 'developer' },
  },
  // {
  //   path: '/developer/projects',
  //   name: 'DeveloperProjects',
  //   component: () => import('@/views/ProjectsView.vue'),
  //   meta: { persona: 'developer' },
  // },
  // Shared routes
  // {
  //   path: '/:persona/about',
  //   name: 'About',
  //   component: () => import('@/views/AboutView.vue'),
  // },
  // {
  //   path: '/:persona/contact',
  //   name: 'Contact',
  //   component: () => import('@/views/ContactView.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// Navigation guard to sync persona with route
router.beforeEach(async (to, from, next) => {
  const { usePersonaStore } = await import('@/stores/persona')
  const personaStore = usePersonaStore()

  const persona = to.meta.persona || to.params.persona

  if (persona && typeof persona === 'string') {
    const validPersonas = ['editor', 'designer', 'developer']
    if (validPersonas.includes(persona)) {
      personaStore.setPersona(persona as 'editor' | 'designer' | 'developer')
    }
  }

  next()
})

export default router
