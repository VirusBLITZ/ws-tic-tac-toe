
<template>
  <div id="app">
    a
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const root = document.getElementById('app')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root!.style.backgroundColor = '#000000'
} else {
  root!.style.backgroundColor = '#fff'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
