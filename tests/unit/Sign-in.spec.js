import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SignIn from '@/components/Sign-in.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

describe('Sign-in.vue', () => {
  it('Vue instance', () => {
    const wrapper = shallowMount(SignIn)
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })
})
