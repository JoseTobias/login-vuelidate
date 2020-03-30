<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="group">
      <label :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" for="sign-in-user" class="label">Username</label>
      <input @input="$v.username.$touch()" :class="{ invalid: $v.username.$dirty && $v.username.$invalid }" id="sign-in-user" type="text" class="input" v-model="username">
    </div>
    <div class="group">
      <label :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" for="sign-in-pass" class="label">Password</label>
      <input @input="$v.password.$touch()" :class="{ invalid: $v.password.$dirty && $v.password.$invalid }" id="sign-in-pass" type="password" class="input" data-type="password" v-model="password">
    </div>
    <div class="group">
      <input id="check" type="checkbox" class="check" v-model="keepSignedIn">
      <label for="check"><span class="icon"></span> Keep me Signed in</label>
    </div>
    <div class="group">
      <input type="submit" class="button" value="Sign In">
    </div>
    <div class="hr"></div>
    <div class="foot-lnk">
      <a href="#forgot">Forgot Password?</a>
    </div>
  </form>
</template>

<script>
import { bus } from '@/bus'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: '',
      password: '',
      keepSignedIn: false,
    }
  },
  mounted () {
    bus.$on('navigate', this.reset)
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        this.$emit('do-sign-in', { ...this.$data })
      } else {
        this.$v.$touch()
      }
    },
    reset (selected) {
      if (selected === 'signup') {
        this.username =  ''
        this.password =  ''
        this.keepSignedIn =  false
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
    }
  }
}
</script>
