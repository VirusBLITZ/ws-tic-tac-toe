<template>
  <div id="game">
    <div id="playerCard" class="border">
      <div id="playerName">
        <span>{{ game.player1.name }}</span>
      </div>
      <div id="playerScore">
        <span>{{ }}</span>
      </div>
    </div>

    <div id="board" class="border">
      <div id="row1" class="row">
        <div class="board-cell" v-for="cell in game.board[0]" v-ripple>
          <ui-icon class="animate__bounceIn" :style="`font-size: ${cell == 'o' ? '90px' : '110px'} !important;`">{{
          cell == '' ? '' : (cell == 'x' ? 'clear' : 'trip_origin')
          }}</ui-icon>
        </div>
      </div>
      <div id="row2" class="row">
        <div class="board-cell" v-for="cell in game.board[1]" v-ripple>
          <ui-icon class="animate__bounceIn" :style="`font-size: ${cell == 'o' ? '90px' : '110px'} !important;`">{{
          cell == '' ? '' : (cell == 'x' ? 'clear' : 'trip_origin')
          }}</ui-icon>
        </div>
      </div>
      <div id="row3" class="row">
        <div class="board-cell" v-for="cell in game.board[2]" v-ripple>
          <ui-icon class="animate__bounceIn" :style="`font-size: ${cell == 'o' ? '90px' : '110px'} !important;`">{{
          cell == '' ? '' : (cell == 'x' ? 'clear' : 'trip_origin')
          }}</ui-icon>
        </div>
      </div>
    </div>

    <div id="playerCard" class="border">
      <div id="playerName">
        <span>{{ opponent }}</span>
      </div>
      <div id="playerScore">
        <span>{{ }}</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { timeStamp } from "console";
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: 'Game',
  data() {
    return {
      opponent: inject('opponent'),
      game: {
        board: [
          ['o', 'o', 'x'],
          ['x', 'x', 'o'],
          ['x', 'o', 'o'],
        ],
        turn: 1,
        winner: 0,
        player1: {
          name: localStorage.getItem('username'),
          symbol: 'x',
        },
        player2: {
          name: this.opponent,
          symbol: 'o',
        },
      },
    }
  },
  mounted() {
  },
  inject: ['opponent'],
})
</script>

<style>
#game {
  height: 90%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

@media (pointer:coarse) {
  #game {
    flex-direction: column;
  }
}

#playerCard {
  width: 200px;
  background-color: var(--app-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-inline: 100px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.board-cell {
  width: 100px;
  height: 100px;
  background-color: var(--app-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100% !important;
  font-weight: bold;
  color: var(--app-bg);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.board-cell:hover {
  filter: brightness(110%);
  color: rgba(255, 255, 255, 0.651);
}
</style>