import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('Vue instance', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })
})
