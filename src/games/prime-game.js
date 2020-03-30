import { runBrainGame, totalCounter } from '../index';
import { getRandInt, cons } from '../utils';

const getArrPairQuestAndAnsw = (counter, arrPair = []) => {
  if (counter === 0) {
    return arrPair;
  }
  const randInt = getRandInt(9);

  const checkPrimInt = (num, count = 2) => {
    if (count === num) {
      return 'yes';
    }
    return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
  };
  arrPair.push(cons(randInt, checkPrimInt(randInt)));
  return getArrPairQuestAndAnsw(counter - 1, arrPair);
};

const rule = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(rule, getArrPairQuestAndAnsw(totalCounter));
