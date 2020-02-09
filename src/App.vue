<template>
  <div id="app">
    <Head />
    <KeyExchange />
    <br />
    <Footer />
  </div>
</template>

<script>
import Head from './components/Head';
import KeyExchange from './components/KeyExchange';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: { Head, KeyExchange, Footer },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
