<template>
  <div class="container">
    <Client title="Alice" ref="alice" class="alice" />
    <Server ref="server" class="server" />
    <Client title="Bob" ref="bob" class="bob" />
    <div class="btns">
      <button class="btn btn-dark" v-on:click="handleClick" :disabled="disable">
        Next
      </button>
      <button
        class="btn btn-secondary"
        v-on:click="handleSkip"
        :disabled="disable"
      >
        Skip
      </button>
    </div>
  </div>
</template>

<script>
import Client from './Client';
import Server from './Server';

export default {
  name: 'KeyExchange',
  components: { Client, Server },
  data() {
    return {
      step: 0,
      disable: false,
    };
  },
  methods: {
    handleClick() {
      instructions[this.step](this.$refs);
      this.step++;

      if (this.step === instructions.length) {
        this.disable = true;
      }
    },
    handleSkip() {
      while (this.step < instructions.length - 1) {
        instructions[this.step](this.$refs);
        this.step++;
      }
      this.disable = true;
    },
  },
};

let instructions = [
  //init Server
  function(refs) {
    refs.server.generate_p();
  },
  function(refs) {
    refs.server.generate_g();
  },
  //init Alice
  function(refs) {
    refs.alice.generateSecret();
  },
  function(refs) {
    refs.alice.writeLine('TO SERVER', 'Please give me g and p');
  },
  function(refs) {
    refs.server.writeLine('TO ALICE', 'Returning g and p');
  },
  function(refs) {
    refs.alice.writeLine('FROM SERVER', 'Obtained g and p');
  },
  //init Bob
  function(refs) {
    refs.bob.generateSecret();
  },
  function(refs) {
    refs.bob.writeLine('TO SERVER', 'Please give me g and p');
  },
  function(refs) {
    refs.server.writeLine('TO BOB', 'Returning g and p');
  },
  function(refs) {
    refs.bob.writeLine('FROM SERVER', 'Obtained g and p');
  },
  //generate A, B
  function(refs) {
    let pub = refs.server.$data.pub;
    refs.alice.calculateMixture(pub.p, pub.g);
    refs.bob.calculateMixture(pub.p, pub.g);
  },
  //send A
  function(refs) {
    refs.alice.writeLine('TO BOB', `A = ${refs.alice.$data.mixture}`);
  },
  function(refs) {
    refs.server.writeLine('CAPTURE', `A = ${refs.alice.$data.mixture}`);
  },
  function(refs) {
    refs.bob.writeLine('FROM ALICE', `A = ${refs.alice.$data.mixture}`);
  },
  //send B
  function(refs) {
    refs.bob.writeLine('TO ALICE', `B = ${refs.bob.$data.mixture}`);
  },
  function(refs) {
    refs.server.writeLine('CAPTURE', `B = ${refs.bob.$data.mixture}`);
  },
  function(refs) {
    refs.alice.writeLine('FROM BOB', `B = ${refs.bob.$data.mixture}`);
  },
  //calculate shared secret
  function(refs) {
    let pub = refs.server.$data.pub;
    refs.alice.calculateSharedSecret(refs.bob.$data.mixture, 'B', pub.p);
    refs.bob.calculateSharedSecret(refs.alice.$data.mixture, 'A', pub.p);
  },
  function(refs) {
    alert(
      'Shared secret with no way for server to know it is: ' +
        refs.alice.$data.sharedSecret
    );
  },
];
</script>

<style lang="sass" scoped>
.alice
  grid-area: Alice;
.server
  grid-area: Server
  border-style: solid
  width: 100%
  border-width: 0 1px 0 1px
.bob
  grid-area: Bob
.btns
  grid-area: btns
  button
    margin: 10px

.container
  display: grid
  grid-column-gap: 1em
  grid-row-gap: 1em
  align-items: center
  justify-items: center
  grid-template-areas: 'Alice Server Bob' 'btns btns btns'

  text-align: center

.btn
  cursor: pointer
  display: inline-block
  font-weight: 400
  color: #212529
  text-align: center
  vertical-align: middle
  user-select: none
  background-color: transparent
  border: 1px solid transparent
  padding: .375rem .75rem
  font-size: 1rem
  line-height: 1.5
  border-radius: .25rem
  &:disabled
    cursor: not-allowed
    filter: opacity(30%)

.btn-dark
  color: #fff
  background-color: #343a40
  border-color: #343a40
  &:hover
    color: #fff
    background-color: #23272b
    border-color: #1d2124

.btn-secondary
  color: black
  background-color: white
  border-color: #6c757d
  &:hover
    color: black
    background-color: #f8f9fa
    border-color: #545b62
</style>
