import type { PersonaType } from '@/stores/persona'
import { createRouter, createWebHistory } from 'vue-router'
import { PERSONAS, usePersonaStore } from '@/stores/persona'

declare module 'vue-router' {
  interface RouteMeta {
    persona?: PersonaType
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...PERSONAS.map(persona => ({
      path: `/${persona}`,
      name: persona,
      component: () => import('@/views/PersonaView.vue'),
      meta: { persona },
    })),
    { path: '/:pathMatch(.*)*', redirect: '/developer' },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Browser back/forward restores the previous position
    if (savedPosition)
      return savedPosition

    // Switching persona keeps the reader where they are
    if (to.meta.persona && from.meta.persona)
      return false

    return { top: 0 }
  },
})

// The route is the source of truth for the active persona
router.beforeEach((to) => {
  if (to.meta.persona)
    usePersonaStore().setPersona(to.meta.persona)
})

export default router
