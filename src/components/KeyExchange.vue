<template>
  <div class="container">
    <div class="alice">
      <b>Alice</b>
      <br />
      <img src="@/assets/svg/desktop-solid.svg" alt="desktop-icon" />
      <br />
      <textarea id="alice-text" cols="60" rows="15" disabled></textarea>
    </div>
    <div class="server">
      <b>Server</b>
      <br />
      <img src="@/assets/svg/server-solid.svg" alt="server-icon" />
      <br />
      <textarea id="server-text" cols="40" rows="15" disabled></textarea>
    </div>
    <div class="bob">
      <b>Bob</b>
      <br />
      <img src="@/assets/svg/desktop-solid.svg" alt="desktop-icon" />
      <br />
      <textarea id="bob-text" cols="60" rows="15" disabled></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyExchange',
};
</script>

<style lang="sass" scoped>
img
  padding: 10px
  height: 80px
textarea
  resize: none

.alice
  grid-area: Alice
.server
  grid-area: Server
  border-style: solid
  width: 100%
  border-width: 0 1px 0 1px
.bob
  grid-area: Bob

.container
  display: grid
  grid-column-gap: 1em
  align-items: center
  justify-items: center
  grid-template-areas: 'Alice Server Bob'

  text-align: center
</style>
