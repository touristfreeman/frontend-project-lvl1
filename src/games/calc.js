
import {
  Greet, sayResult, getUseAnswer,
  getRandInt, checkValAndAnswUse, getResArithOperatAndAskUs, getRandomOperator, sayRules, getNameSayHi,
} from '../index';

const gameBrainCalc = (acc) => {
  Greet();
  const name = getNameSayHi();
  sayRules('What is the result of the expression?');

  const recursIter = (ac) => {
    if (ac === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const questionForUser = getResArithOperatAndAskUs(getRandInt(99), getRandInt(99), getRandomOperator());
    const curUseAnw = getUseAnswer();
    const resultOfChecking = checkValAndAnswUse((questionForUser), curUseAnw, name);
    sayResult(resultOfChecking);
    return resultOfChecking === 'Correct!' ? recursIter(ac + 1) : null;
  };
  return recursIter(acc);
};
export default gameBrainCalc;
