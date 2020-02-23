import {
  Greet, getNameSayHi, sayRules, car, cdr, askQuestion, getUseAnswer,
  getRandInt, checkUseAnswAndSayRes, getNumberSeries, getStringNumSeries,
} from '../index';

const gameBrainProgression = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What number is missing in the progression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const stringNumSeries = getStringNumSeries(getNumberSeries(), getRandInt(8));
    askQuestion(car(stringNumSeries));
    console.log(`hint ${cdr(stringNumSeries)}`);
    const checkResult = checkUseAnswAndSayRes(cdr(stringNumSeries), getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameBrainProgression;
