import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const operators = ['-', '+', '*'];
let operator;

const getAnswer = (num1, num2) => {
  operator = operators[getRandInt(0, 2)];

  switch (operator) {
    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      return num1 + num2;
  }
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 100);
    const number2 = getRandInt(1, 100);

    answers.push(String(getAnswer(number1, number2)));
    questions.push(`${number1} ${operator} ${number2}`);
  }
  return [questions, answers];
};

const task = 'What is the result of the expression?';
export default () => runBrainGame(task, getGameData());
