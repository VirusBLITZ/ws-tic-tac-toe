<template>
  <div id="play">
    {{ gameId }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Play',
  data() {
    return {
      gameId: this.$route.params.id
    }
  },
  mounted() {

  }
})
</script>

<style>
#play {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>