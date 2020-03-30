<template>
  <form action="#" @submit.prevent="submit" class="sign-up-htm">
    <div class="group">
      <label :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" for="sign-up-user" class="label">Username</label>
      <input @input="$v.username.$touch()" :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" id="sign-up-user" type="text" class="input" v-model="username">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" for="sign-up-pass1" class="label">Password</label>
      <input @input="$v.password.$touch()" :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" id="sign-up-pass1" type="password" class="input" data-type="password" v-model="password">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password2.$dirty && $v.password2.$invalid }" for="sign-up-pass2" class="label">Repeat Password</label>
      <input @input="$v.password2.$touch()" :class="{ invalid: $v.password2.$dirty && $v.password2.$invalid }" id="sign-up-pass2" type="password" class="input" data-type="password" v-model="password2">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.email.$dirty && $v.email.$invalid }" for="pass" class="label">Email Address</label>
      <input @input="$v.email.$touch()" :class="{ invalid: $v.email.$dirty && $v.email.$invalid }" id="pass" type="text" class="input" v-model="email">
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign Up">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <label for="tab-1">Already Member?</label>
    </div>
  </form>
</template>

<script>
import { bus } from '@/bus'
import { required, sameAs, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: '',
      password: '',
      password2: '',
      email: ''
    }
  },
  mounted () {
    bus.$on('navigate', this.reset)
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        this.$emit('do-sign-up', { ...this.$data })
      } else {
        this.$v.$touch()
      }
    },
    reset (selected) {
      if (selected === 'signin') {
        this.username =  ''
        this.password =  ''
        this.password2 = ''
        this.email = ''
        this.$v.$reset()
      }
    }
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    },
    password2: {
      required,
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      email
    },
  }
}
</script>
