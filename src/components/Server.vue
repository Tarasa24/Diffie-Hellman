<template>
  <div>
    <b>Server</b>
    <br />
    <img src="@/assets/svg/server-solid.svg" alt="server-icon" />
    <br />
    <b v-if="show_p">p = {{ pub.p }}</b>
    <br />
    <b v-if="show_g">g = {{ pub.g }}</b>
    <br />

    <textarea cols="60" rows="15" disabled v-html="text" />
  </div>
</template>

<script>
import pub from '../assets/js/public-generator';

export default {
  name: 'Server',
  data() {
    return {
      text: '',
      pub: pub.getPublic,
      show_p: false,
      show_g: false,
    };
  },
  methods: {
    writeLine(type, msg) {
      let newLine = '&#13;&#10;';
      let n = this.$parent.step + 1;
      this.text += `${n}. [${type}] ${msg + newLine}`;
    },
    generate_p() {
      this.writeLine('INFO', 'Generated modulus p = ' + this.pub.p);
      this.show_p = true;
    },
    generate_g() {
      this.writeLine('INFO', 'Generated base g = ' + this.pub.g);
      this.show_g = true;
    },
  },
};
</script>

<style lang="sass" scoped>
img
  padding: 10px 10px 5px 10px
  height: 80px
textarea
  margin-top: 15px
  resize: none
</style>
