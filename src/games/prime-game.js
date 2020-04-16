import { runBrainGame, numberRounds } from '../index';
import { getRandInt } from '../utils';

const isPrime = (num, count = 2) => {
  if (count === num) {
    return true;
  }
  return num % count === 0 ? false : isPrime(num, count + 1);
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const question = getRandInt(0, 9);
    questions.push(question);
    answers.push(isPrime(question) ? 'yes' : 'no');
  }
  return [questions, answers];
};

const task = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(task, getGameData());
