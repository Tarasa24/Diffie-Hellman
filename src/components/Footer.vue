<template>
  <footer>
    <a class="website" href="https://tarasa24.ddns.net">
      <img src="@/assets/svg/globe-solid.svg" alt="website-icon" />
    </a>
    <main>
      <p>
        Made with ❤️ by Tarasa24
      </p>
    </main>
    <a class="github" href="https://github.com/Tarasa24">
      <img src="@/assets/svg/github-square-brands.svg" alt="github-icon" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="sass" scoped>
img
  width: 40px
  padding: 5px 5px 0px 5px

.website
  justify-self: left
  grid-area: Website
  color: white
main
  text-align: center
  justify-self: center
  grid-area: Main
  p
    color: white
    margin: 0
.github
  justify-self: right
  grid-area: Github

footer
  background-color: #7100A6
  display: grid
  grid-template-areas: 'Website Main Github'

  align-items: center
</style>
