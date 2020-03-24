import { runBrainGame } from '../index';
import getRandInt from './utils';

const getNumberSeries = () => {
  const initialNumber = getRandInt(9);
  const difference = getRandInt(9);

  const getNumArray = (arr = [initialNumber], count = 0) => {
    const array = arr;
    if (count >= 9) {
      return array;
    }
    array.push(array[count] + difference);
    return getNumArray(array, count + 1);
  };
  return getNumArray();
};

const getArrNumberSeries = (resArray = []) => {
  for (let i = 0; i < 3; i += 1) {
    resArray.push(getNumberSeries());
  }
  return resArray;
};

const getArrColon = (resArray = []) => {
  for (let i = 0; i < 3; i += 1) {
    resArray.push(getRandInt(8));
  }
  return resArray;
};

const getArrColonValue = (serNum, colon, resArray = []) => {
  const getColonValue = (seriesNum, colonValue) => seriesNum[colonValue];

  for (let i = 0; i < serNum.length; i += 1) {
    resArray.push(getColonValue(serNum[i], colon[i]));
  }
  return resArray;
};

const getStringNumSeries = (numberSeries, colon) => {
  const arrWishConon = numberSeries;
  arrWishConon.splice(colon, 1, '..');
  return arrWishConon;
};

const getArrStringNumSeries = (arr, arrColon, resArray = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    resArray.push(getStringNumSeries(arr[i], arrColon[i]));
  }
  return resArray;
};

const arrRandomColon = getArrColon();
const arrNumberSeries = getArrNumberSeries();
const arrColonValue = getArrColonValue(arrNumberSeries, arrRandomColon);
const arrStringNumSeries = getArrStringNumSeries(arrNumberSeries, arrRandomColon);

const questionOfuse = arrStringNumSeries;
const correctАnswer = arrColonValue;
const rule = 'What number is missing in the progression?';

export default () => runBrainGame(rule, questionOfuse, correctАnswer);
