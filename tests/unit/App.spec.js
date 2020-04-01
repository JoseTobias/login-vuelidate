import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })
})
