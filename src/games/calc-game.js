
import {
  getRandInt, car, cdr, cons,
} from '../index';

const cons = (x, y) => (f) => f(x, y);
const car = (p1) => p1((x) => x);
const cdr = (p2) => p2((x, y) => y);

const getArithOperat = (num1, num2, operator) => {
  let operationResult = num1 * num2;

  if (operator === '-') {
    operationResult = num1 - num2;
  } else if (operator === '+') {
    operationResult = num1 + num2;
  } else {
    operationResult = num1 * num2;
  }
  const QuestionToUse = `${num1} ${operator} ${num2}`;
  return cons(operationResult, QuestionToUse);
};

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[getRandInt(2)];
};

const getRigthAnsw = () => {

}

const getArrResArithOperat = () => {
  let arrArifOper = [];
  
  for
}

getArithOperat(getRandInt(99), getRandInt(99), getRandomOperator());

const questionOfuse = cdr(arrQuestionOfuse());
const correctАnswer = car(ResArithOperat);
const rule = 'What is the result of the expression?';

export default () => brainGame(rule, questionOfuse, correctАnswer);

/*
const gameBrainCalc = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What is the result of the expression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const ResultArithOper = getArithOperat(getRandInt(99), getRandInt(99), getRandomOperator());
    askQuestion(cdr(ResultArithOper));
    const checkResult = checkUseAnswAndSayRes((car(ResultArithOper)), getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameBrainCalc;
*/
