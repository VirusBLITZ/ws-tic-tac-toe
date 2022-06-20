<template>
  <div class="page-top-app-bar">
    <ui-top-app-bar content-selector="#content-main" :type="type" :title="title" @nav="openDrawer = true">
      <template #toolbar="{ toolbarItemClass }">
        <!-- <ui-icon-button :class="toolbarItemClass" icon="github"></ui-icon-button> -->
      </template>
    </ui-top-app-bar>

    <ui-drawer v-model="openDrawer" type="modal">
      <ui-drawer-header>
        <ui-drawer-title>Menu</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item active>
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
          </ui-item>
          <ui-list-divider></ui-list-divider>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>
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
      openDrawer: false
    };
  }
})
</script>