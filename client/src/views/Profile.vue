<template>
  <h2>Edit your profile</h2>
  <form name="form" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">GitHub:</label>
      <input
        type="text"
        class="form-control"
        name="github"
        id="github"
        v-model="formData.github"
      />
    </div>
    <div class="form-group">
      <label for="name">Twitter:</label>
      <input
        type="text"
        class="form-control"
        name="twitter"
        id="twitter"
        v-model="formData.twitter"
      />
    </div>
    <div class="form-group">
      <label for="name">Email:</label>
      <input
        type="text"
        class="form-control"
        name="facebook"
        id="facebook"
        v-model="formData.email"
      />
    </div>

    <div
      v-if="message && clicked"
      class="alert mt-2"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>

    <button class="btn btn-primary mt-2">Update</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import UserService from '../services/user.service'

export default defineComponent({
  name: 'Profile',
  data() {
    return {
      message: '',
      user: JSON.parse(localStorage.getItem('user')),
      formData: {},
      successful: false,
      clicked: false
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  mounted() {
    this.$store.dispatch('profile/getProfile', this.user).then((data) => {
      this.formData = data
    })
  },
  methods: {
    handleSubmit() {
      UserService.updateProfile({
        user: this.user,
        formData: this.formData
      })
        .then((response) => {
          this.message = response.message
          this.successful = true
          this.clicked = true
        })
        .catch((error) => {
          this.clicked = true
          this.message = error.response.data.message
          this.successful = false
        })
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
