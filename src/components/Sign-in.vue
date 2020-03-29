<template>
  <form action="#" @submit.prevent="submit" class="sign-in-htm">
    <div class="group">
      <label for="sign-in-user" class="label">Username</label>
      <input id="sign-in-user" type="text" class="input" v-model="username">
    </div>
    <div class="group">
      <label for="sign-in-pass" class="label">Password</label>
      <input id="sign-in-pass" type="password" class="input" data-type="password" v-model="password">
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
      this.$emit('do-sign-in', { ...this.$data })
    },
    reset (selected) {
      if (selected === 'signup') {
        this.username =  ''
        this.password =  ''
        this.keepSignedIn =  false
      }
    }
  }
}
</script>
