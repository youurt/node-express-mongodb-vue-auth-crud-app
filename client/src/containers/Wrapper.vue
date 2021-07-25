<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Wrapper'
})
</script>

<style>
.wrapper {
  padding: 50px;
}
</style>
