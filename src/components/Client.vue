<template>
  <div>
    <b>{{ title }}</b>
    <br />
    <img src="@/assets/svg/desktop-solid.svg" alt="desktop-icon" />
    <br />
    <b v-if="showSecret">{{ index }} = {{ secret }}</b>
    <br />
    <textarea cols="60" rows="15" disabled v-html="text" />
  </div>
</template>

<script>
import * as bigintCryptoUtils from 'bigint-crypto-utils';

export default {
  props: ['title'],
  name: 'Client',
  data() {
    return {
      secret: Math.floor(Math.random() * 2 ** 18),
      mixture: 0,
      sharedSecret: 0,
      showSecret: false,
      index: this.title.charAt(0).toLowerCase(),
      text: '',
    };
  },
  mounted() {
    this.$options.name = this.title;
  },
  methods: {
    writeLine(type, msg) {
      let newLine = '&#13;&#10;';
      function time() {
        let now = new Date();
        return `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]`;
      }
      this.text += `${time()} [${type}] ${msg + newLine}`;
    },
    generateSecret() {
      this.writeLine('INFO', `Generated secret ${this.index} = ${this.secret}`);
      this.showSecret = true;
    },
    calculateMixture(p, g) {
      this.mixture = bigintCryptoUtils.modPow(g, this.secret, p);
      this.writeLine(
        'INFO',
        `Calculating ${this.index.toUpperCase()} = g^${this.index} mod p = ${
          this.mixture
        }`
      );
    },
    calculateSharedSecret(mixture, mixtureIndex, p) {
      this.sharedSecret = bigintCryptoUtils.modPow(mixture, this.secret, p);
      this.writeLine(
        'INFO',
        `Calculating s = ${mixtureIndex}^${this.index} mod p = ${this.sharedSecret}`
      );
    },
  },
};
</script>

<style lang="sass" scoped>
img
  padding: 10px 10px 20px 10px
  height: 80px
textarea
  margin-top: 15px
  resize: none
</style>
