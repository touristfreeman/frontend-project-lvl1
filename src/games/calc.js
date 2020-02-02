
import {
  GreetAndSayRuls, askName, sayHi, sayResult, getUseAnswer,
  getRandInt, checkValAndAnswUse, getResArithOperat, getRandomOperator,
} from '../index';

const gameBrainCalc = () => {
  GreetAndSayRuls('What is the result of the expression?');
  const name = askName();
  sayHi(name);

  let i = 0;
  while (i !== 3) {
    const questionForUser = getResArithOperat(getRandInt(99), getRandInt(99), getRandomOperator());
    const curUseAnw = Number(getUseAnswer());
    const resultOfChecking = checkValAndAnswUse((questionForUser), curUseAnw, name);
    sayResult(resultOfChecking);
    i = resultOfChecking === 'Correct!' ? i += 1 : i = 0;
    if (i === 0) break;
  }
  return i === 3 ? console.log(`Congratulations, ${name}`) : null;
};
export default gameBrainCalc;
