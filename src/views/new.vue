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
    <ui-button raised :disabled="!opponentReady">Start</ui-button>
    <div id="status" class="border">
      <div v-if="opponent == ''" style="display: flex;align-items: center;justify-content: center;">
        <ui-spinner active size="S"></ui-spinner> waiting for opponent
      </div>
      <div v-else>
        <ui-icon>{{ opponentReady ? "check" : "close" }}</ui-icon>{{ opponent }} is {{ opponentReady ? "ready" :
        "notready"
        }}
      </div>
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
      opponent: "",
      opponentReady: false,
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
      link: `t.bltz.cloud/join/${this.$route.params.id}`
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
  margin-bottom: 15px;
}

#link:hover {
  filter: brightness(85%);
}

#link:active {
  filter: brightness(40%);
}

#new>.mdc-button--raised:disabled {
  color: var(--app-text) !important;
  /* filter: opacity(50%); */
}

#new>.mdc-button {
  width: 150px;
  height: 50px;
  border-radius: .3em;
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
  background-color: var(--app-bg);
}

#status>div>i {
  font-size: 1rem;
  margin-right: .5rem;
}

#status>.mdc-circular-progress__determinate-circle,
#status>.mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--app-primary) !important;
}
</style>