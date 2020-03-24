import runBrainGame from '../index';

const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getArrRandomOperator = () => {
  const operators = ['-', '+', '*'];
  const array = [];

  for (let i = 0; i < 3; i += 1) {
    array.push(operators[getRandInt(2)]);
  }
  console.log(array);
  return array;
};

const getArrRandomInt = () => {
  const array = [];

  for (let i = 0; i < 6; i += 1) {
    array.push(getRandInt(99));
  }
  console.log(array);
  return array;
};

const getArrQuest = (arrI, arrO, array = []) => {
  let j = 0;

  for (let i = 0; i <= arrI.length - 1; i += 2) {
    array.push(`${arrI[i]} ${arrO[j]} ${arrI[i + 1]}`);
    j += 1;
  }
  return array;
};


const getCorrAnsw = (num1, num2, operator) => {
  let expressionResult = num1 * num2;

  if (operator === '-') {
    expressionResult = num1 - num2;
  } else if (operator === '+') {
    expressionResult = num1 + num2;
  } else {
    expressionResult = num1 * num2;
  }
  return expressionResult;
};

const getArrCorrAnsw = (arrI, arrO, array = []) => {
  let j = 0;

  for (let i = 0; i <= arrI.length - 1; i += 2) {
    array.push(getCorrAnsw(arrI[i], arrI[i + 1], arrO[j]));
    j += 1;
  }
  return array;
};

const arrOperator = getArrRandomOperator();
const arrInt = getArrRandomInt();

const questionOfuse = getArrQuest(arrInt, arrOperator);
const correctАnswer = getArrCorrAnsw(arrInt, arrOperator);
const rule = 'What is the result of the expression?';

export default () => runBrainGame(rule, questionOfuse, correctАnswer);
