<template>
  <div id="join">
    <div v-if="$route.params.id == undefined" id="enterPin">
      Enter Game ID
      <input type="number" placeholder="0000" autofocus minlength="4" maxlength=4 accept="Game ID" class="border"
        id="inputId" v-model="enteredID" @keyup.enter="validateId(enteredID)">
      <ui-button raised id="joinBtn" @click="validateId(enteredID)">Join</ui-button>
    </div>
    <div v-else class="center">
      <div v-if="ready">
        Waiting for {{ host }} to start the game
      </div>
      <div v-else>
        Ready up to start the game
      </div>
      <ui-switch v-model="ready" input-id="basic-switch-custom"></ui-switch>
    </div>
  </div>
</template>

<script lang="ts">
import { join } from "path";
import { defineComponent } from "vue";
import router from "../router";


export default defineComponent({
  name: 'Join',
  data() {
    return {
      enteredID: String,
      host: this.$route.meta.host,
      ready: false,
    }
  },
  methods: {
    validateId(gameId: string | StringConstructor) {
      const id = Number(gameId)
      // Number must be between 1000 and 9999
      if (id >= 1000 && id <= 9999) {
        this.$emit('joinGame', id)
      } else {
        this.$toast('Invalid ID')
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.host = this.$route.meta.host
      if (this.host == "..." && this.$route.params.id != undefined) {
        // router.replace(`/join/direct/${this.$route.params.id}`)
        this.validateId(String(this.$route.params.id))
      }
    }, 150);
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

#enterPin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
}

#inputId {
  width: 16rem;
  height: 6rem;
  font-size: 4rem;
  text-align: center;
  background-color: var(--app-text);
  color: var(--app-primary);
}

#joinBtn {
  width: 16rem;
  text-align: center;
  margin-top: 10px;
}
</style>