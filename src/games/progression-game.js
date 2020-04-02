import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const getnumberSeries = (numberSeries, differ, count = 0) => {
  if (count >= 9) {
    return numberSeries;
  }
  numberSeries.push(numberSeries[count] + differ);
  return getnumberSeries(numberSeries, differ, count + 1);
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const initialNumber = [getRandInt(1, 15)];
    const difference = getRandInt(1, 10);
    const collon = getRandInt(0, 10);
    const seriesNumber = getnumberSeries(initialNumber, difference);
    questions.push(seriesNumber.splice(collon, 1, '..'));
    answers.push(String(collon));
  }
  const data = [questions, answers];
  return data;
};

const rule = 'What number is missing in the progression?';
export default () => runBrainGame(rule, getGameData());
