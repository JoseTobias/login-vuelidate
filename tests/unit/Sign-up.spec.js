import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/Sign-up.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

describe('Sign-up.vue', () => {
  it('Vue instance', () => {
    const wrapper = shallowMount(SignUp)
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })
})
