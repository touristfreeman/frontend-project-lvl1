
import { runBrainGame, totalCounter } from '../index';
import { getRandInt, cons } from './utils';

const getArrPairQuestAndAnsw = (count, arrPair = []) => {
  if (count === 0) {
    return arrPair;
  }

  const randIt = getRandInt(99);
  let answer = '';

  if (randIt % 2 === 0) {
    answer = 'yes'; // взм, здесь нужно сохранять будет у других функций сразу строку
  } else {
    answer = 'no';
  }
  arrPair.push(cons(randIt, answer));
  return getArrPairQuestAndAnsw(count - 1, arrPair);
};

const arrPairQuestAndAnsw = getArrPairQuestAndAnsw(totalCounter);
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runBrainGame(rule, arrPairQuestAndAnsw);
