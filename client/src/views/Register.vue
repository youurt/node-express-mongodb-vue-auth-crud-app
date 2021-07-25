<template>
  <auth-form :style="'register'" />
</template>

<script>
import { defineComponent } from 'vue'
import AuthForm from '@/components/AuthForm.vue'

export default defineComponent({
  name: 'Register',
  components: {
    AuthForm
  }
})
</script>
