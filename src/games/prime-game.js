import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const question = getRandInt(0, 9);
    const answer = isPrime(question) ? 'yes' : 'no';

    questions.push(String(question));
    answers.push(answer);
  }
  return [questions, answers];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => runBrainGame(task, getGameData());
