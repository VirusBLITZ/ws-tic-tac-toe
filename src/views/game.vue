<template>
  <div id="game">
    <div id="playerCard" class="border" :class="game.player1.active ? 'turn' : ''">
      <div id="playerName">
        <span>{{ game.player1.name }}</span>
      </div>
    </div>

    <div id="board" class="border">
      <div id="row1" class="row">
        <div class="board-cell" v-for="i in [0, 1, 2]" v-ripple :i="String(i)" @click="place(0, i)">
          <ui-icon class="animate__bounceIn"
            :style="`font-size: ${game.board[0][i] == 'o' ? '90px' : '110px'} !important;`">{{
                game.board[0][i] == '' ? '' : (game.board[0][i] == 'x' ? 'clear' : 'trip_origin')
            }}</ui-icon>
        </div>
      </div>
      <div id="row2" class="row">
        <div class="board-cell" v-for="i in [0, 1, 2]" v-ripple :i="String(i)" @click="place(1, i)">
          <ui-icon class="animate__bounceIn"
            :style="`font-size: ${game.board[1][i] == 'o' ? '90px' : '110px'} !important;`">{{
                game.board[1][i] == '' ? '' : (game.board[1][i] == 'x' ? 'clear' : 'trip_origin')
            }}</ui-icon>
        </div>
      </div>
      <div id="row3" class="row">
        <div class="board-cell" v-for="i in [0, 1, 2]" v-ripple :i="String(i)" @click="place(2, i)">
          <ui-icon class="animate__bounceIn"
            :style="`font-size: ${game.board[2][i] == 'o' ? '90px' : '110px'} !important;`">{{
                game.board[2][i] == '' ? '' : (game.board[2][i] == 'x' ? 'clear' : 'trip_origin')
            }}</ui-icon>
        </div>
      </div>
    </div>

    <div id="playerCard" class="border" :class="!game.player1.active ? 'turn' : ''">
      <div id="playerName">
        <span>{{ game.player2.name }}</span>
      </div>
    </div>

  </div>
  <div id="restartBtn">
    <ui-button raised @click="this!.socket.send('restart')" :disabled="!game.won">Restart</ui-button>
  </div>
</template>

<script lang="ts">
import { timeStamp } from "console";
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: 'Game',
  data() {
    return {
      game: {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        won: false,
        player1: {
          name: localStorage.getItem('username'),
          active: Boolean(!this.beginner == Boolean(this.opponentReady)),
        },
        player2: {
          name: this.opponent,
        },
      },
    }
  },
  methods: {
    onMessage(event: any) {
      const data: string = String(event.data)
      if (data.startsWith('=') && data.length == 4) {
        if (data[3] == 'c') {
          this.game.board[Number(data[1])][Number(data[2])] = ""
          this.game.won = false
        } else {
          this.game.board[Number(data[1])][Number(data[2])] = data[3]
          this.game.player1.active = !this.game.player1.active
        }

      } else if (data.startsWith('win') && data.length == 4) {
        this.game.won = true
      } else if (data == 'draw') {
        this.game.won = true
      }
    },
    place(row: number, col: number) {
      if (this.game.board[row][col] == '') {
        // this.game.board[row][col] = this.game.turn == 1 ? 'x' : 'o'
        // this.game.turn = this.game.turn == 1 ? 2 : 1
        this.socket.send('=' + row + col)
      }
    },
  },
  mounted() {
    this.socket.addEventListener('message', this.onMessage);
    if (this.opponent == "") {
      this.$router.replace('/')
    }
  },
  unmounted() {
    this.socket.removeEventListener('message', this.onMessage);
  },
  inject: ['opponent', 'socket', 'beginner', 'opponentReady'],
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

.turn {
  filter: brightness(140%);
  /* color: rgba(255, 255, 255, 0.651); */
}

#restartBtn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}
</style>