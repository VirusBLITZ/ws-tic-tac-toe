<template>
    <div id="card"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'startCard'
})
</script>

<style>
#card {
    width: 500px;
    height: 300px;
    height: 70%;
    border: 1px solid rgba(255, 255, 255, 0.313);
    border-radius: 0.2em;
    background-color: var(--app-primary);
}
</style>