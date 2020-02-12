<template>
  <footer>
    <a class="website" href="https://tarasa24.ddns.net">
      <img src="@/assets/svg/globe-solid.svg" alt="website-icon" />
    </a>
    <main>
      <p>
        Made with ❤️ by
        <a
          href="https://github.com/Tarasa24"
          target="_blank"
          rel="noopener noreferrer"
          >Tarasa24</a
        >
      </p>
    </main>
    <a class="github" href="https://github.com/Tarasa24/diffie-hellman">
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
  transition: all .35s ease-in-out
  &:hover
    filter: invert(0.4) sepia(1) saturate(20) hue-rotate(14.4deg) brightness(1.2)

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
  a
    color: white
    font-weight: bolder
    text-decoration: none
    transition: all .35s ease-in-out
    &:hover
      filter: invert(0.4) sepia(1) saturate(20) hue-rotate(14.4deg) brightness(1.2)

.github
  justify-self: right
  grid-area: Github

footer
  background-color: #7100A6
  display: grid
  grid-template-areas: 'Website Main Github'

  align-items: center
</style>
