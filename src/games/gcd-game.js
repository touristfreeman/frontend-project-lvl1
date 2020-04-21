import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getGameData = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 1000); // 680;
    const number2 = getRandInt(1, 1000); // 612;
    questions.push(`${number1} ${number2}`);
    answers.push(String(getGCD(number1, number2)));
  }
  return [questions, answers];
};

const task = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(task, getGameData());
