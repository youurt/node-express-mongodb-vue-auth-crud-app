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
  padding-left: 600px;
  padding-right: 600px;
  padding-top: 100px;
}
</style>
