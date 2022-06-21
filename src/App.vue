<template>
  <appBar></appBar>
  <section id="app">
    <router-view @new-game="newGame()"></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appBar from './components/appBar.vue'
import router from './router';

const app = document.getElementById('app')
const root: HTMLElement = document.querySelector(':root')!;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.style.setProperty('--app-primary', '#174579');
  root.style.setProperty('--app-bg', '#0C223B');
  root.style.setProperty('--app-text', '#eaeaea');
} else {
  root.style.setProperty('--app-primary', '#2A6CB8');
  root.style.setProperty('--app-bg', '#fff');
  root.style.setProperty('--app-text', '#0C223B');
}

export default defineComponent({
  components: { appBar },
  data() {
    return {
      type: 1,
      title: 'Tic Tac Toe',
      openDrawer: false,

      socket: new WebSocket('ws://192.168.0.69:4040'),
      code: -1
    };
  },
  methods: {
    newGame(): void {
      const storage = localStorage.getItem('username')
      let username = storage === null ? 'Anonymous' : storage
      console.log('Sending start request')
      this.socket.send('new ' + username)
    },
    onMessage(event: any) {
      const data = String(event.data)
      if (data.startsWith('>') && data.length === 5) {
        console.log(data.slice(1))
        this.code = Number(data.slice(1))
        this.$route.meta.id = this.code
        this.$router.replace('/loading')
        setTimeout(() => this.$router.push(`/new/${this.code}`), 1000)
        

        console.log(this.$route)
      }
    }
  },
  mounted() {
    this.socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
    });

    this.socket.addEventListener('message', this.onMessage);

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
.mdc-drawer__title,
.mdc-drawer .mdc-deprecated-list-item {
  color: var(--app-text) !important;
}
</style>