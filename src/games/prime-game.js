import { runBrainGame, totalCounter } from '../index';
import {
  getRandInt, cons, car, cdr,
} from '../utils';

const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return true;
  }
  return num % count === 0 ? false : checkPrimInt(num, count + 1);
};

const getPairArrQuestAndAnswer = (counter) => {
  const arrayQuestion = [];
  const arrayAnswer = [];

  for (let i = 0; i < counter; i += 1) {
    const randomInt = getRandInt(9);
    arrayQuestion.push(randomInt);
    arrayAnswer.push(checkPrimInt(randomInt) % 2 === 0 ? 'yes' : 'no');
  }
  return cons(arrayQuestion, arrayAnswer);
};

const pairArrQuestAndAnswer = getPairArrQuestAndAnswer(totalCounter);
const question = car(pairArrQuestAndAnswer);
const answer = cdr(pairArrQuestAndAnswer);
const rule = 'Find the greatest common divisor of given numbers.';

export default () => runBrainGame(rule, question, answer);