<template>
  <h2>{{ style === 'register' ? 'Register' : 'Login' }}</h2>
  <form class="w-25" name="form" @submit.prevent="handler">
    <div class="form-group">
      <label for="username">Username:</label>
      <input
        type="text"
        class="form-control"
        v-model="user.username"
        name="username"
        id="username"
      />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        class="form-control"
        name="password"
        id="password"
        v-model="user.password"
      />
    </div>
    <div
      v-if="message && clicked"
      class="alert mt-2"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
    <button class="btn btn-primary mt-2">
      {{ style === 'register' ? 'Register' : 'Login' }}
    </button>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import User from '@/models/user'

export default defineComponent({
  name: 'AuthForm',
  data() {
    return {
      user: new User('', ''),
      message: '',
      clicked: false,
      successful: false
    }
  },
  props: {
    style: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          (data) => {
            this.message = data
            this.successful = true
            this.$router.push('/profile')
            this.clicked = true
          },
          (error) => {
            this.message = error.response.data.message
            this.successful = false
            this.clicked = true
          }
        )
      }
    },
    handleRegister() {
      this.$store.dispatch('auth/register', this.user).then(
        (data) => {
          this.message = data.message
          this.successful = true
          this.clicked = true
        },
        (error) => {
          this.message = error.response.data.message
          this.successful = false
          this.clicked = true
        }
      )
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
    handler() {
      if (this.style === 'register') {
        return this.handleRegister
      } else {
        return this.handleLogin
      }
    }
  },
  mounted() {
    if (this.style && this.style === 'register') {
      if (this.loggedIn) {
        this.$router.push('/profile')
      }
    }
  },
  created() {
    if (this.style && this.style === 'login') {
      if (this.loggedIn) {
        this.$router.push('/profile')
      }
    }
  },
  watch: {
    clicked(val) {
      if (val) {
        setTimeout(() => (this.clicked = false), 2000)
      }
    }
  }
})
</script>
