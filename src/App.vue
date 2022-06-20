<template>
  <appBar></appBar>
  <section id="app">
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appBar from './components/appBar.vue'

const app = document.getElementById('app')
const root: HTMLElement = document.querySelector(':root')!;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.style.setProperty('--app-primary', '#174579');
  root.style.setProperty('--app-bg', '#0C223B');
  root.style.setProperty('--app-text', '#eaeaea');
} else {
  root.style.setProperty('--app-primary', '#2A6CB8');
  root.style.setProperty('--app-bg', '#fff');
  root.style.setProperty('--app-text', '#2A6CB8');
}

export default defineComponent({
  components: { appBar },
  data() {
    return {
      type: 1,
      title: 'Tic Tac Toe',
      openDrawer: false
    };
  }
});
</script>

<style>
:root {
  --mdc-theme-primary: var(--app-primary) !important;
}
* {
  margin: 0;
  padding: 0;
  user-select: none;
}

body {
  height: 100vh;
  overflow: hidden;
}

header {
  position: static !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--app-bg);
  color: var(--app-text);
  height: 100%;
  width: 100vw;
}
</style>

<style>
 
/* Overrides */
.mdc-drawer__title, .mdc-drawer .mdc-deprecated-list-item{
  color: var(--app-text) !important;
}
</style>