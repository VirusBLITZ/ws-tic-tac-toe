<template>
  <appBar></appBar>
  <section id="app">
    <router-view @new-game="newGame" @join-game="joinGame"></router-view>
  </section>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
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
      code: -1,
      clients: [],
      full: false,
      opponent: '',
    };
  },
  methods: {
    newGame(): void {
      const storage = localStorage.getItem('username')
      let username = (storage === null || storage === "") ? 'Anonymous' : storage
      console.log('Sending start request')
      this.socket.send('new ' + username)
      router.replace('/loading')
    },
    joinGame(id: number): void {
      const storage = localStorage.getItem('username')
      let username = (storage === null || storage === "") ? 'Anonymous' : storage

      this.$route.meta.id = id
      this.code = id
      console.log('Sending join request')
      this.socket.send(`+${id}${username}`)
      router.push('/loading')
      this.$route.meta.id = id
    },
    onMessage(event: any) {
      const data = String(event.data)
      console.log(data);
      if (data.startsWith('>') && data.length === 5) {
        console.log(data.slice(1))
        this.code = Number(data.slice(1))
        setTimeout(() => {
          router.replace(`/new/${this.code}`)
        }, 150);
      } else if (data.startsWith('+')) {
        if (this.$route.name != "New")
          setTimeout(() => {
            router.replace(`/join/${this.code}`)
            setTimeout(() => {
              console.log(`Setting Host to ${data.slice(1)}`);
              this.$route.meta.host = data.slice(1)
            }, 20);
          }, 1000);
      } else if (data.startsWith('^')) {

      } else if(data === "full") {
        this.full = true
      } else {

      }
    }
  },
  mounted() {
    this.socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
    });

    this.socket.addEventListener('message', this.onMessage);

  },
  provide() {
    return {
      code: computed(() => this.code),
      clients: computed(() => this.clients),
      full: computed(() => this.full),
      opponent: computed(() => this.opponent),
    }
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

.border {
  border: 1px solid rgba(255, 255, 255, 0.313);
  border-radius: 0.3rem;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<style>
/* Overrides */
.mdc-drawer__title,
.mdc-drawer .mdc-deprecated-list-item,
.mdc-text-field__input {
  color: var(--app-text) !important;
}

.mdc-snackbar__surface {
  background-color: var(--app-primary) !important;
}

.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label,
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--app-primary) !important;
}

.mdc-notched-outline .mdc-notched-outline--upgraded {
  border-color: var(--app-text) !important;
}
</style>