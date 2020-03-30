
import { runBrainGame, totalCounter } from '../index';
import {
  getRandInt, cons, car, cdr,
} from '../utils';

const getPairArrQuestAndAnswer = (counter) => {
  const arrayQuestion = [];
  const arrayAnswer = [];

  for (let i = 0; i < counter; i += 1) {
    const randomInt = getRandInt(99);
    arrayQuestion.push(randomInt);
    arrayAnswer.push(randomInt % 2 === 0 ? 'yes' : 'no');
  }
  return cons(arrayQuestion, arrayAnswer);
};

const pairArrQuestAndAnswer = getPairArrQuestAndAnswer(totalCounter);
const question = car(pairArrQuestAndAnswer);
const answer = cdr(pairArrQuestAndAnswer);
const rule = 'What is the result of the expression?';

export default () => runBrainGame(rule, question, answer);
