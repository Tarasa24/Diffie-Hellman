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
      let n = this.$parent.step + 1;
      this.text += `${n}. [${type}] ${msg + newLine}`;
    },
    generateSecret() {
      this.writeLine('INFO', `Generated secret ${this.index} = ${this.secret}`);
      this.showSecret = true;
    },
    calculateMixture(ret = false) {
      if (ret) {
        let pub = this.$parent.$refs.server.$data.pub;
        this.mixture = Number(
          bigintCryptoUtils.modPow(pub.g, this.secret, pub.p)
        );
        return this.mixture;
      } else {
        this.writeLine(
          'INFO',
          `Calculating ${this.index.toUpperCase()} = g^${this.index} mod p = ${
            this.mixture
          }`
        );
      }
    },
    calculateSharedSecret(mixture, ret = false) {
      if (ret) {
        let pub = this.$parent.$refs.server.$data.pub;
        this.sharedSecret = Number(
          bigintCryptoUtils.modPow(mixture, this.secret, pub.p)
        );

        return this.sharedSecret;
      } else {
        let mixtureIndex = { a: 'B', b: 'A' }[this.index];
        this.writeLine(
          'INFO',
          `Calculating s = ${mixtureIndex}^${this.index} mod p = ${this.sharedSecret}`
        );
      }
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
