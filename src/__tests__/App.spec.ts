import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from '@/App.vue'
import router from '@/router'

// The router runs guards in the first installed app's context, so stale apps must go
enableAutoUnmount(afterEach)

async function mountAt(path: string) {
  const pinia = createPinia()
  setActivePinia(pinia)
  await router.push(path)
  await router.isReady()
  const wrapper = mount(App, { global: { plugins: [pinia, router] } })
  await flushPromises()
  return wrapper
}

describe('app', () => {
  beforeEach(() => {
    delete document.documentElement.dataset.persona
  })

  it.each(['developer', 'editor', 'designer'])('renders the %s persona from its route', async (persona) => {
    const wrapper = await mountAt(`/${persona}`)

    expect(wrapper.find('h1').text().toLowerCase()).toContain(persona)
    expect(document.documentElement.dataset.persona).toBe(persona)
  })

  it('redirects unknown paths to the developer persona', async () => {
    await mountAt('/nope')

    expect(router.currentRoute.value.path).toBe('/developer')
  })
})
