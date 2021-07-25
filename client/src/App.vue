<template>
  <navbar />
  <wrapper>
    <router-view />
  </wrapper>
</template>

<script>
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Wrapper from '@/containers/Wrapper.vue'

export default defineComponent({
  components: {
    Navbar,
    Wrapper
  }
})
</script>

<style lang="scss">
body {
  font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;
}

a {
  color: #00b7ff;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
