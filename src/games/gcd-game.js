import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const getPrimInt = (numP) => (numP % 2 !== 0 || numP === 2 ? numP : getPrimInt(numP + 1));

const getSimpleFact = (num, facCount = 2, newArrFactors = []) => {
  if (num === 1) {
    return newArrFactors;
  }

  const primeInt = getPrimInt(facCount);
  if (num % primeInt === 0) {
    newArrFactors.push(primeInt);
    return getSimpleFact(num / primeInt, facCount, newArrFactors);
  }
  return getSimpleFact(num, facCount + 1, newArrFactors);
};

const getGreatestCommFactor = (factors1, factors2) => {
  let CommFactor = 1;
  for (let i = 0; i <= factors1.length - 1; i += 1) {
    for (let j = 0; j <= factors1.length - 1; j += 1) {
      if (factors1[i] === factors2[j]) {
        CommFactor *= factors2[j];
        factors2.splice(j, 1);
        break;
      }
    }
  }
  return CommFactor;
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 1000); // 680;
    const number2 = getRandInt(1, 1000); // 612;
    const simplFactors1 = getSimpleFact(number1);
    const simplFactors2 = getSimpleFact(number2);
    questions.push(`${number1} ${number2}`);
    answers.push(String(getGreatestCommFactor(simplFactors1, simplFactors2)));
  }
  const data = [questions, answers];
  return data;
};

const rule = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(rule, getGameData());
