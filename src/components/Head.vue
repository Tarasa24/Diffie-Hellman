<template>
  <div class="container">
    <h1>Diffie–Hellman key exchange</h1>
    <main>
      <i>From Wikipedia, the free encyclopedia</i>
      <p>
        <b>Diffie–Hellman key exchange</b> is a method of securely exchanging
        cryptographic keys over a public channel and was one of the first
        public-key protocols as originally conceptualized by Ralph Merkle and
        named after Whitfield Diffie and Martin Hellman. DH is one of the
        earliest practical examples of public key exchange implemented within
        the field of cryptography.
      </p>
      <p>
        Traditionally, secure encrypted communication between two parties
        required that they first exchange keys by some secure physical channel,
        such as paper key lists transported by a trusted courier. The
        Diffie–Hellman key exchange method allows two parties that have no prior
        knowledge of each other to jointly establish a shared secret key over an
        insecure channel. This key can then be used to encrypt subsequent
        communications using a symmetric key cipher.
      </p>
      <p>
        Diffie–Hellman is used to secure a variety of Internet services.
        However, research published in October 2015 suggests that the parameters
        in use for many DH Internet applications at that time are not strong
        enough to prevent compromise by very well-funded attackers, such as the
        security services of large governments.
      </p>
      <h3>General overview</h3>
      <p>
        Diffie–Hellman key exchange establishes a shared secret between two
        parties that can be used for secret communication for exchanging data
        over a public network. The conceptual diagram at the right side of the
        page illustrates the general idea of the key exchange by using colors
        instead of very large numbers.
      </p>
      <p>
        The process begins by having the two parties, Alice and Bob, agree on an
        arbitrary starting color that does not need to be kept secret (but
        should be different every time); in this example, the color is yellow.
        Each of them also selects a secret color that they keep to themselves –
        in this case, red and blue-green. The crucial part of the process is
        that Alice and Bob each mix their own secret color together with their
        mutually shared color, resulting in orange-tan and light-blue mixtures
        respectively, and then publicly exchange the two mixed colors. Finally,
        each of the two mixes the color they received from the partner with
        their own private color. The result is a final color mixture
        (yellow-brown in this case) that is identical to the partner's final
        color mixture.
      </p>
      <p>
        If a third party listened to the exchange, it would only know the common
        color (yellow) and the first mixed colors (orange-tan and light-blue),
        but it would be computationally difficult for this party to determine
        the final secret color (yellow-brown). In fact, when using large numbers
        rather than colors, this action is computationally expensive: It is
        impossible to do in a reasonable amount of time even for modern
        supercomputers.
      </p>
      <a
        href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#firstHeading"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >Continue reading</a
      >
    </main>
    <div class="explanation">
      <h3>Cryptographic explanation</h3>
      <p>
        The simplest and the original implementation of the protocol uses the
        multiplicative group of integers modulo p, where p is prime, and g is a
        primitive root modulo p. These two values are chosen in this way to
        ensure that the resulting shared secret can take on any value from 1 to
        p–1. Here is an example of the protocol, with non-secret values in
        <b class="blue">blue</b>, and secret values in <b class="red">red</b>.
      </p>
      <ol>
        <li>
          Alice and Bob publicly agree to use a modulus
          <i class="blue">p = {{ this.p }}</i> and base
          <i class="blue">g = {{ this.g }}</i> (primitive root modulo of
          {{ this.p }})
        </li>
        <li>
          Alice chooses a secret integer <i class="red">a</i> = {{ this.a }},
          then sends Bob <i class="blue">A = g<sup class="red">a</sup></i> mod
          <i class="blue">p</i>
        </li>
        <ul>
          <li>
            <i class="blue"
              >A = {{ this.g }}<sup class="red">{{ this.a }}</sup></i
            >
            mod <i class="blue">{{ this.p }} = {{ this.A }}</i>
          </li>
        </ul>
        <li>
          Bob chooses a secret integer <i class="red">b</i> = {{ this.b }}, then
          sends Alice <i class="blue">B = g<sup class="red">b</sup></i> mod
          <i class="blue">p</i>
        </li>
        <ul>
          <li>
            <i class="blue"
              >B = {{ this.g }}<sup class="red">{{ this.b }}</sup></i
            >
            mod <i class="blue">{{ this.p }} = {{ this.B }}</i>
          </li>
        </ul>
        <li>
          Alice computes <i class="red">s</i> = <i class="blue">B</i
          ><i class="red"><sup>a</sup></i> mod <i class="blue">p</i>
        </li>
        <ul>
          <li>
            <i class="red">s</i> = <i class="blue">{{ this.B }}</i
            ><i class="red"
              ><sup>{{ this.a }}</sup></i
            >
            mod <i class="blue">{{ this.p }}</i> =
            <i class="red">{{ this.sa }}</i>
          </li>
        </ul>
        <li>
          Bob computes <i class="red">s</i> = <i class="blue">A</i
          ><i class="red"><sup>b</sup></i> mod <i class="blue">p</i>
        </li>
        <ul>
          <li>
            <i class="red">s</i> = <i class="blue">{{ this.A }}</i
            ><i class="red"
              ><sup>{{ this.b }}</sup></i
            >
            mod <i class="blue">{{ this.p }}</i> =
            <i class="red">{{ this.sb }}</i>
          </li>
        </ul>
        <li>Alice and Bob now share a secret (the number {{ this.sa }}).</li>
      </ol>

      <a
        href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange#Cryptographic_explanation"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
        >Simplfied example</a
      >
    </div>
    <img
      align="center"
      src="https://upload.wikimedia.org/wikipedia/commons/4/46/Diffie-Hellman_Key_Exchange.svg"
    />

    <div class="links">
      <h3>Useful links and further reading</h3>
      <a
        href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="btn btn-blue">
          <img src="@/assets/svg/wikipedia-w-brands.svg" /><br />Wikipedia
          article
        </button>
      </a>

      <a
        href="https://youtu.be/NmM9HA2MQGI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="btn btn-red">
          <img src="@/assets/svg/youtube-brands.svg" /><br />Computerphile
        </button>
      </a>

      <a
        href="https://youtu.be/pa4osob1XOk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="btn btn-red">
          <img src="@/assets/svg/youtube-brands.svg" /><br />F5 DevCentral
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {
      p: 0,
      g: 0,
      a: 0,
      b: 0,
      A: 0,
      B: 0,
      sa: 0,
      sb: 0,
    };
  },
  mounted() {
    let keyExchange = this.$parent.$refs.keyExchange.$refs;
    let alice = keyExchange.alice;
    let server = keyExchange.server;
    let bob = keyExchange.bob;

    this.p = server.pub.p;
    this.g = server.pub.g;
    this.a = alice.secret;
    this.b = bob.secret;

    this.A = alice.calculateMixture(true);
    this.B = bob.calculateMixture(true);

    this.sa = alice.calculateSharedSecret(this.B, true);
    this.sb = bob.calculateSharedSecret(this.A, true);
  },
};
</script>

<style lang="sass" scoped>
.blue
  color: blue
.red
  color: red
.link
  text-decoration: underline
  color: black
  transition: all .35s ease-in-out
  &:hover
    letter-spacing: 0.9px;

h1
  grid-area: header
  text-align: center
main
  margin-left: 5vw
  grid-area: main
img
  object-fit: scale-down
  height: 100%;
  justify-self: center
  grid-area: img

.explanation
  margin-left: 5vw
  grid-area: explanation
.links
  grid-area: links
  align-self: normal
  margin-left: 5vw
  button
    margin: 10px
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
    transition: all .35s ease-in-out
    &:hover
      filter: brightness(90%)
  .btn-red
    color: white
    background-color: #c4302b
    border-color: #9d2622
  .btn-blue
    color: white
    background-color: #87b4e6
    border-color: #cedff2
  img
    width: 100px

.container
  display: grid
  grid-template-columns: 55vw 10vw 1fr
  grid-column-gap: 1em
  grid-row-gap: 3em
  align-items: center
  grid-template-areas: "header header header" "main main img" "explanation links links"

  margin-bottom: 3%
</style>
