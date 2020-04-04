import { runBrainGame, numberRounds } from '../index';
import { getRandInt, isPrime } from '../utils';

const getPrime = (number) => (isPrime(number) ? number : getPrime(number + 1));

const getPrimeFactors = (num, divider = 2, factors = []) => {
  if (num === 1) {
    return factors;
  }
  if (num % divider === 0) {
    factors.push(divider);
    return getPrimeFactors(num / divider, 2, factors);
  }
  return getPrimeFactors(num, getPrime(divider + 1), factors);
};

const getGCD = (factors1, factors2) => {
  let GCD = 1;
  for (let i = 0; i <= factors1.length - 1; i += 1) {
    for (let j = 0; j <= factors1.length - 1; j += 1) {
      if (factors1[i] === factors2[j]) {
        GCD *= factors2[j];
        factors2.splice(j, 1);
        break;
      }
    }
  }
  return GCD;
};

const getGameData = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 1000); // 680;
    const number2 = getRandInt(1, 1000); // 612;
    const simplFactors1 = getPrimeFactors(number1);
    const simplFactors2 = getPrimeFactors(number2);
    questions.push(`${number1} ${number2}`);
    answers.push(String(getGCD(simplFactors1, simplFactors2)));
  }
  const data = [questions, answers];
  return data;
};

const rule = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(rule, getGameData());
