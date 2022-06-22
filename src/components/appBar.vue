<template>
  <div>

    <div class="page-top-app-bar">
      <ui-top-app-bar content-selector="#content-main" :type="type" :title="title" @nav="openDrawer = true">
        <template #toolbar="{ toolbarItemClass }">
          <ui-icon-button :class="toolbarItemClass" icon="account_circle" @click="open = true; focus()">
          </ui-icon-button>
        </template>
      </ui-top-app-bar>

      <ui-dialog v-model="open" fullscreen style="display: relative">
        <ui-dialog-title>Change Username</ui-dialog-title>
        <ui-dialog-content>
          <ui-textfield id="username" v-model="input" fullwidth placeholder="Username" maxlength="15" with-counter
            @keydown.enter="open = false" @change="setUsername">
          </ui-textfield>
          <ui-button raised @click="open = false">save</ui-button>
        </ui-dialog-content>
      </ui-dialog>

      <ui-drawer v-model="openDrawer" type="modal">
        <ui-drawer-header>
          <ui-drawer-title>Menu</ui-drawer-title>
        </ui-drawer-header>
        <ui-drawer-content>
          <ui-list>
            <router-link to="/">
              <ui-item>
                <ui-item-first-content>
                  <ui-icon>home</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Home</ui-item-text-content>
              </ui-item>
            </router-link>
            <router-link to="/new">
              <ui-item>
                <ui-item-first-content>
                  <ui-icon>add</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Create</ui-item-text-content>
              </ui-item>
            </router-link>
            <router-link to="/join">
              <ui-item>
                <ui-item-first-content>
                  <ui-icon>login</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Join</ui-item-text-content>
              </ui-item>
            </router-link>
            <ui-list-divider></ui-list-divider>
          </ui-list>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppBar',
  data() {
    return {
      type: 1,
      title: 'WS TicTacToe',
      openDrawer: false,
      open: false,
      input: '',
      inputField: Element
    };
  },
  methods: {
    focus(): void {
      setTimeout(() => {   // Wait for animation
        Object(document.getElementsByClassName("mdc-text-field__input"))[0].focus()
      }, 250)
    },
    setUsername() {
      localStorage.setItem('username', this.input)
    }
  },
  mounted() {
    const username = localStorage.getItem('username')
    // console.log(username);
    
    if (username != undefined) {
      this.input = username
    }
  }
})
</script>

<style>
h2.mdc-dialog__title {
  color: var(--app-text) !important;
}

.mdc-text-field__input {
  user-select: text !important;
}
</style>

<style scoped>
.mdc-button {
  display: none;
}

@media (pointer:coarse) {

  /* only on mobile */
  .mdc-button {
    display: block;
    background-color: var(--app-bg) !important;
    color: var(--app-text);
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 100px;
    height: 50px;
  }
}

a {
  text-decoration: none;
}
</style>