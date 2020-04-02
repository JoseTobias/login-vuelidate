import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SignUp from '@/components/Sign-up.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

describe('Sign-up.vue', () => {
  
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(SignUp)
  })

  it('Vue instance', () => {
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })

  test('Data ok', () => {
    const expected = ['username', 'password', 'password2', 'email']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })
  
  test('should $invalid == false when all fields are filled', () => {
    setData(wrapper)
    expect(wrapper.vm.$v.$invalid).toBeFalsy()
  })
  
  test('should $invalid == true in first', () => {
    resetData(wrapper)
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  test('The event do-sign-up is fired when submit is executed', () => {
    setData(wrapper)
    wrapper.vm.submit()
    const data = wrapper.emitted('do-sign-up')[0][0]
    expect(data).toEqual({
      username: 'test',
      password: 'test',
      password2: 'test',
      email: 'test@test.com'
    })
  })

  test('All states and tools return to first state when reset is executed', () => {
    setData(wrapper)
    wrapper.vm.reset()

    expect(wrapper.vm.$data).toEqual({
      username: 'test',
      password: 'test',
      password2: 'test',
      email: 'test@test.com'
    })
    expect(wrapper.vm.$v.$invalid).toBeFalsy()

    wrapper.vm.reset('signin')

    expect(wrapper.vm.$data).toEqual({
      username: '',
      password: '',
      password2: '',
      email: ''
    })
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })

  const setData = wrapper => wrapper.setData({
    username: 'test',
    password: 'test',
    password2: 'test',
    email: 'test@test.com'
  })

  const resetData = wrapper => wrapper.setData({
    username: '',
    password: '',
    password2: '',
    email: ''
  })
})
