
import {
  GreetAndSayRuls, askName, sayHi, sayResult, getUseAnswer,
  getRandInt, checkValAndAnswUse, getResArithOperat, getRandomOperator,
} from '../index';

const gameBrainCalc = (acc) => {
  GreetAndSayRuls('What is the result of the expression?');
  const name = askName();
  sayHi(name);

  const recursIter = (ac) => {
    if (ac === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const questionForUser = getResArithOperat(getRandInt(99), getRandInt(99), getRandomOperator());
    const curUseAnw = getUseAnswer();
    const resultOfChecking = checkValAndAnswUse((questionForUser), curUseAnw, name);
    sayResult(resultOfChecking);
    return resultOfChecking === 'Correct!' ? recursIter(ac + 1) : null;
  };
  return recursIter(acc);
};
export default gameBrainCalc;

/*
// функция с циклом внутри
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
*/
