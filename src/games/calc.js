
import {
  Greet, sayResult, getUseAnswer,
  getRandInt, checkValAndAnswUse, getResArithOperatAndAskUs, getRandomOperator,
  sayRules, getNameSayHi,
} from '../index';

const gameBrainCalc = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What is the result of the expression?');

  const recursIter = (ac = 0) => {
    if (ac === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const questUse = getResArithOperatAndAskUs(getRandInt(99), getRandInt(99), getRandomOperator());
    const curUseAnw = getUseAnswer();
    const resultOfChecking = checkValAndAnswUse((questUse), curUseAnw, name);
    sayResult(resultOfChecking);
    return resultOfChecking === 'Correct!' ? recursIter(ac + 1) : null;
  };
  return recursIter();
};
export default gameBrainCalc;
