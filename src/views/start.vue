<template>
  <div id="layout">
    <startCard></startCard>
    <startCard></startCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import startCard from "../components/startCard.vue";

export default defineComponent({
  name: 'Start',
  data() {
    return {

    };
  },
  components: {startCard}
})
</script>

<style scoped>
* {
  color: var(--app-text);
}

#layout {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}

.demo-card--photo {
  width: 35%;
}

.demo-card__media {
  background-image: url('');
}

.demo-card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.demo-card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%);
  color: white;
  font-size: large;
}
</style>