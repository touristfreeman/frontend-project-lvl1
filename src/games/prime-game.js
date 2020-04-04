import { runBrainGame, numberRounds } from '../index';
import { getRandInt, isPrime } from '../utils';

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const randomInt = getRandInt(0, 9);
    questions.push(randomInt);
    answers.push(isPrime(randomInt) ? 'yes' : 'no');
  }
  const data = [questions, answers];
  return data;
};

const rule = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(rule, getGameData());
