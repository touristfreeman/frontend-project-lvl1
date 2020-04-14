export const getRandInt = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
};

export const isPrime = (num, count = 2) => {
  if (count === num) {
    return true;
  }
  return num % count === 0 ? false : isPrime(num, count + 1);
};
