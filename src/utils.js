// eslint-disable-next-line max-len
export const getRandInt = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;

export const isPrime = (num, count = 2) => {
  if (count === num) {
    return true;
  }
  return num % count === 0 ? false : isPrime(num, count + 1);
};
