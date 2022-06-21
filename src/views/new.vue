<template>
  <div id="new">
    <div v-ripple id="code" v-copy="cpId">{{ lobbyId }}</div>
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
        text: String(this.$route.meta.id),
        success: () => {
          // this.$toast("Copied!");
          this.$toast(String(this.$route.meta.id));
          console.log(this.lobbyId)
        },
      },
    }
  },
  methods: {
  },
  mounted() {
    console.log('LOADED');
    
    if (String(this.$route.fullPath).endsWith('new')) {
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
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

#code {
  transition: all .4s;
  border-radius: 1rem;
  width: max-content;
  padding: 10px 10px 10px 10px;
  height: 80px;
  text-align: center;
}

#code:hover {
  background-color: var(--app-primary);
}
</style>