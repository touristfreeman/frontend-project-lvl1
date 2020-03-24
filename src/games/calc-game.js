import { runBrainGame, totalCounter } from '../index';
import { getRandInt, cons } from './utils';

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

const getArrPairQuestAndAnsw = (count, arrPair = []) => {
  if (count === 0) {
    return arrPair;
  }
  const getOperator = (oper = ['-', '+', '*']) => oper[getRandInt(2)];
  const number1 = getRandInt(99);
  const number2 = getRandInt(99);
  const operator = getOperator();

  const questinon = `${number1} ${operator} ${number2}`;
  const answer = String(getAnswer(number1, number2, operator));
  // console.log(`answer ${String(answer)}`);
  arrPair.push(cons(questinon, answer));

  return getArrPairQuestAndAnsw(count - 1, arrPair);
};

export default () => runBrainGame('What is the result of the expression?', getArrPairQuestAndAnsw(totalCounter));
