import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

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

const operator = () => ['-', '+', '*'][getRandInt(0, 2)];

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 100);
    const number2 = getRandInt(1, 100);

    questions.push(`${number1} ${operator} ${number2}`);
    console.log(`operator1 ${operator}`);
    answers.push(String(getAnswer(number1, number2, operator)));
    console.log(`operator2 ${operator}`);
  }
  return [questions, answers];
};

const task = 'What is the result of the expression?';
export default () => runBrainGame(task, getGameData());
