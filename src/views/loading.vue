<template>
  <div id="loading">
    <ui-spinner active size="L"></ui-spinner>
    Loading
  </div>
</template>

<style scoped>
#loading {
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<style>


#loading > .mdc-circular-progress {
  margin-bottom: 20px;
}
#loading> .mdc-circular-progress__indeterminate-container {
  scale: 1.5;
}
</style>