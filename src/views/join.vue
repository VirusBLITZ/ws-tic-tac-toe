<template>
  <div id="join">
    <div v-if="$route.params.id == undefined" id="enter-pin">
      <ui-textfield outlined>
        Game ID
      </ui-textfield>
    </div>
    <div v-else>Waiting for {{ host }} to start the game</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: 'Join',
  data() {
    return {

    }
  },
  mounted() {
    if (this.$route.params.id != undefined) {
      this.$emit('join-game', this.$route.params.id)
    } else {
      console.log('No ID')
    }
  }
})
</script>

<style>
#join {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
}
</style>