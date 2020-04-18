import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const getGCD = (num1, num2) => {
  const lagNumber = (num1 > num2) ? num1 : num2;
  const lowNumber = (num1 < num2) ? num1 : num2;

  return (lagNumber % lowNumber === 0) ? lowNumber : getGCD(lagNumber % lowNumber, lowNumber);
};

const getGameData = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const num1 = getRandInt(1, 1000); // 680;
    const num2 = getRandInt(1, 1000); // 612;
    questions.push(`${num1} ${num2}`);
    answers.push(String(getGCD(num1, num2)));
  }
  return [questions, answers];
};

const task = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(task, getGameData());
