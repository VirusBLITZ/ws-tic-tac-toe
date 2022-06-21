<template>
  <div id="new">
    <span id="codeLine">
      <h4>CODE:</h4>
      <div v-ripple id="code" v-copy="cpId">{{ lobbyId }}
      </div>
    </span>
    <div id="link" class="border" v-tooltip="'Copy'" aria-describedby="Copy" v-copy="cpUrl" v-ripple>{{ link }} <ui-icon
        style="font-size: 70%">content_copy</ui-icon>
    </div>
    <div id="status" class="border">
      <ui-spinner active size="S"></ui-spinner> waiting for players
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import router from "../router";

export default defineComponent({
  name: 'NewGame',
  data() {
    return {
      lobbyId: this.$route.params.id,
      cpId: {
        text: String(this.$route.params.id),
        success: () => {
          this.$toast("Copied!");
        },
      },
      cpUrl: {
        text: `https://t.bltz.cloud/join/${this.$route.params.id}`,
        success: () => {
          this.$toast("Copied Link!")
        }
      },
      link: `https://t.bltz.cloud/join/${this.$route.params.id}`
    }
  },
  methods: {
  },
  mounted() {
    console.log('LOADED');

    if (String(this.$route.fullPath).endsWith('new') || String(this.$route.fullPath).endsWith('new/')) {
      this.$emit('new-game')
    } else {

    }
  }
})

</script>

<style>
#new {
  height: 90%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

#code {
  transition: all .4s;
  border-radius: 1rem;
  width: max-content;
  padding: 10px 10px 10px 10px;
  height: 70px;
  text-align: center;
}

#code:hover {
  background-color: var(--app-primary);
}

#codeLine {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

#link {
  transition: all .5s;
  background-color: var(--app-primary);
  border-radius: .2rem;
  padding: 2px 8px 2px 8px;
  font-size: 1.6rem;
}

#link:hover {
  filter: brightness(85%);
}

#link:active {
  filter: brightness(40%);
}

#status {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 5vh;
  font-size: 1.5rem;
  text-indent: .3rem;
  padding: 8px;
  background-color: var(--app-primary);
}

#status > .mdc-circular-progress__determinate-circle, #status >
.mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--app-bg) !important;
}
</style>