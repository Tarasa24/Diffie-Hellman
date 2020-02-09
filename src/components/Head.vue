<template>
  <div class="container">
    <h1>Diffie–Hellman key exchange</h1>
    <main>
      <p>
        Diffie–Hellman key exchange is a method of securely exchanging
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
      <p>
        The scheme was first published by Whitfield Diffie and Martin Hellman in
        1976, but in 1997 it was revealed that James H. Ellis, Clifford Cocks,
        and Malcolm J. Williamson of GCHQ, the British signals intelligence
        agency, had previously, in 1969, shown how public-key cryptography could
        be achieved.
      </p>
      <p>
        Although Diffie–Hellman key agreement itself is a non-authenticated
        key-agreement protocol, it provides the basis for a variety of
        authenticated protocols, and is used to provide forward secrecy in
        Transport Layer Security's ephemeral modes (referred to as EDH or DHE
        depending on the cipher suite).
      </p>
      <p>
        The method was followed shortly afterwards by RSA, an implementation of
        public-key cryptography using asymmetric algorithms.
      </p>
      <p>
        U.S. Patent 4,200,770, from 1977, is now expired and describes the
        now-public-domain algorithm. It credits Hellman, Diffie, and Merkle as
        inventors.
      </p>
    </main>
    <img
      align="center"
      src="https://upload.wikimedia.org/wikipedia/commons/4/46/Diffie-Hellman_Key_Exchange.svg"
    />
  </div>
</template>

<script>
export default {
  name: 'Head',
};
</script>

<style lang="sass" scoped>
h1
  grid-area: header
  text-align: center
main
  padding-left: 5vw
  grid-area: main
img
  object-fit: scale-down
  width: 60%

  justify-self: center
  grid-area: img

.container
  display: grid
  grid-template-columns: 65vw, 35vw
  grid-column-gap: 1em
  align-items: center
  grid-template-areas: "header header" "main img"

  margin-bottom: 10%
</style>
