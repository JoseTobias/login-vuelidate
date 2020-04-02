import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { shallowMount } from '@vue/test-utils'
import SignIn from '@/components/Sign-in.vue'

Vue.use(Vuelidate)

describe('Sign-in.vue', () => {
  
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(SignIn)
  })

  it('Vue instance', () => {
    expect(wrapper.isVueInstance(wrapper)).toBeTruthy()
  })

  test('Data ok', () => {
    const expected = ['username', 'password', 'keepSignedIn']
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

  test('The event do-sign-in is fired when submit is executed', () => {
    setData(wrapper)
    wrapper.vm.submit()
    const data = wrapper.emitted('do-sign-in')[0][0]
    expect(data).toEqual({
      username: 'test',
      password: 'test',
      keepSignedIn: false
    })
  })
  
  test('All states and tools return to first state when reset is executed', () => {
    setData(wrapper)
    wrapper.vm.reset()

    expect(wrapper.vm.$data.username).toBe('test')
    expect(wrapper.vm.$data.password).toBe('test')
    expect(wrapper.vm.$v.$invalid).toBeFalsy()

    wrapper.vm.reset('signup')

    expect(wrapper.vm.$data.username).toBe('')
    expect(wrapper.vm.$data.password).toBe('')
    expect(wrapper.vm.$v.$invalid).toBeTruthy()
  })
  

  const setData = wrapper => wrapper.setData({
    username: 'test',
    password: 'test',
    keepSignedIn: false
  })

  const resetData = wrapper => wrapper.setData({
    username: '',
    password: '',
    keepSignedIn: false
  })
})
