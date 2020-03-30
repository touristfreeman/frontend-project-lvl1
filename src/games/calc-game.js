import { runBrainGame, totalCounter } from '../index';
import {
  getRandInt, cons, car, cdr,
} from '../utils';

const getAnswer = (num1, num2, operator) => {
  let expressionResult = num1 * num2;

  if (operator === '-') {
    expressionResult = num1 - num2;
  } else if (operator === '+') {
    expressionResult = num1 + num2;
  } else {
    expressionResult = num1 * num2;
  }
  return expressionResult;
};

const getOperator = (oper = ['-', '+', '*']) => oper[getRandInt(2)];

const getPairArrQuestAndAnswer = (counter) => {
  const arrayQuestion = [];
  const arrayAnswer = [];

  for (let i = 0; i < counter; i += 1) {
    const number1 = getRandInt(99);
    const number2 = getRandInt(99);
    const operator = getOperator();

    arrayQuestion.push(`${number1} ${operator} ${number2}`);
    arrayAnswer.push(String(getAnswer(number1, number2, operator)));
  }
  return cons(arrayQuestion, arrayAnswer);
};

const pairArrQuestAndAnswer = getPairArrQuestAndAnswer(totalCounter);
const question = car(pairArrQuestAndAnswer);
const answer = cdr(pairArrQuestAndAnswer);
const rule = 'What is the result of the expression?';

export default () => runBrainGame(rule, question, answer);
