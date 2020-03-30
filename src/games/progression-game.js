import { runBrainGame, totalCounter } from '../index';
import {
  getRandInt, cons, car, cdr,
} from '../utils';

const getnumberSeries = (numberSeries, differ, count = 0) => {
  if (count >= 9) {
    return numberSeries;
  }
  numberSeries.push(numberSeries[count] + differ);
  return getnumberSeries(numberSeries, differ, count + 1);
};

const getPairArrQuestAndAnswer = (counter) => {
  const arrayQuestion = [];
  const arrayAnswer = [];

  for (let i = 0; i < counter; i += 1) {
    const initialNumber = [getRandInt(15)];
    const difference = getRandInt(9);
    const collon = getRandInt(8);
    const seriesNumber = getnumberSeries(initialNumber, difference);
    arrayQuestion.push(seriesNumber.splice(collon, 1, '..'));
    arrayAnswer.push(String(collon));
  }
  return cons(arrayQuestion, arrayAnswer);
};

const pairArrQuestAndAnswer = getPairArrQuestAndAnswer(totalCounter);
const question = car(pairArrQuestAndAnswer);
const answer = cdr(pairArrQuestAndAnswer);
const rule = 'What number is missing in the progression?';

export default () => runBrainGame(rule, question, answer);
