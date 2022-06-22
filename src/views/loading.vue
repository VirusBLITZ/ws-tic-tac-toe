<template>
  <div id="loading">
    <ui-spinner active size="L"></ui-spinner>
    Loading {{code}}
    <div style="margin-top: 20px; font-weight: 600;" class="center">
      {{ full ? "Game is full or doesn't exist" : '' }}
      <ui-button @click="$router.replace('/')">Go Home</ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "Loading",
  data() {
    return {

    }
  },
  methods: {
  },
  inject: ['full', 'code'],
  mounted() {
    // setTimeout(() => {
    //   this.full = inject('full')!
    // }, 200);
  }
})
</script>

<style scoped>
#loading {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<style>
#loading>.mdc-circular-progress {
  margin-bottom: 20px;
}

#loading>.mdc-circular-progress__indeterminate-container {
  scale: 1.5;
}
</style>