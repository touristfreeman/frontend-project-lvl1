import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const getGameData = () => {
  const questions = [];
  const answers = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const number1 = getRandInt(1, 1000); // 680;
    const number2 = getRandInt(1, 1000); // 612;
    const question = `${number1} ${number2}`;
    const answer = String(getGCD(number1, number2));

    answers.push(answer);
    questions.push(question);
  }
  return [questions, answers];
};

const task = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(task, getGameData());
