<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Acme Corporation</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="profile" class="nav-link">Profile</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <div v-if="loggedIn">
          Welcome {{ vUser }}!
          <button @click="logOut" class="btn btn-primary ms-3">Logout</button>
        </div>
        <div v-if="!loggedIn">
          <router-link to="login"
            ><button id="login-btn" class="btn btn-primary ma-2">
              Login
            </button></router-link
          >
          <router-link to="register"
            ><button id="register-btn" class="btn btn-primary ms-2">
              Register
            </button></router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
    vUser() {
      return JSON.parse(localStorage.getItem('user')).username
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
      this.$router.go()
    }
  }
})
</script>
