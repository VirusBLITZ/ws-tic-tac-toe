<template>
    <div id="card" v-ripple @click="$router.push(route!)">
        <ui-icon>{{ icon }}</ui-icon>
        <slot></slot>
        <ui-button raised>
            <ui-icon>play_arrow</ui-icon>
        </ui-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'startCard',
    props: {
        route: String,
        icon: String
    }
})
</script>

<style scoped>

.mdc-button {
    background-color: var(--app-bg) !important;
    color: var(--app-text);
    position: absolute;
    bottom: 0;
    width: 100%;
}
.mdc-button__label > i {
    color: var(--app-text) !important;
}
</style>

<style>
#card {
    width: 500px;
    height: 300px;
    height: 70%;
    border: 1px solid rgba(255, 255, 255, 0.313);
    border-radius: 0.3rem;
    background-color: var(--app-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.135);
    font-size: 4rem;
    text-align: center;
    color: var(--app-bg);
}
div > i.material-icons {
    font-size: 8rem;
}

</style>