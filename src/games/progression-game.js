import { runBrainGame, totalCounter } from '../index';
import { getRandInt, cons } from '../utils';

const getArrPairQuestAndAnsw = (counter, arrPair = []) => {
  if (counter === 0) {
    return arrPair;
  }
  const initialNumber = getRandInt(15);
  const difference = getRandInt(9);
  const collon = getRandInt(8);

  const getNumberSeries = (array = [initialNumber], count = 0) => {
    if (count >= 9) {
      return array;
    }
    array.push(array[count] + difference);
    return getNumberSeries(array, count + 1);
  };
  const seriesNumber = getNumberSeries();
  const seriesNumberWithCollon = seriesNumber.splice(collon, 1, '..');
  arrPair.push(cons(seriesNumberWithCollon, String(collon)));
  return getArrPairQuestAndAnsw(counter - 1, arrPair);
};

const rule = 'What number is missing in the progression?';
export default () => runBrainGame(rule, getArrPairQuestAndAnsw(totalCounter));
