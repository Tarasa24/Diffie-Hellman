function isPrime(possible) {
  let i = 2;

  while (i * i <= possible) {
    if (possible % i === 0) return false;
    i++;
  }
  return true;
}

function getRandomPrimeRoot(theNum) {
  if (!isPrime(theNum)) throw 'Not a prime';

  let o = 1;
  let root;
  let r = 2;

  while (r < theNum) {
    let k = Math.pow(r, o, theNum);
    while (k > 1) {
      o++;
      k = (k * r) % theNum;
    }
    if (o === theNum - 1 && r > Math.floor(Math.random() * 99)) {
      root = r;
      break;
    }

    o = 1;
    r++;
  }
  return root;
}

function getRandomPrime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let rand = Math.floor(Math.random() * (max - min)) + min;
  for (let r = rand; r > 0; r--) {
    if (isPrime(r)) return r;
  }
}

let p = getRandomPrime(2 ** 8, 2 ** 16);
let g = getRandomPrimeRoot(p);

let pub = { p: p, g: g };

export default {
  getPublic: pub,
};
