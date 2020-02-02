import readlineSync from 'readline-sync';

const GreetAndSayRuls = (rulsOfGame) => console.log(`Welcome to the Brain Games! \n${rulsOfGame}`);
const askName = () => readlineSync.question(' \nMay I have your name? ');
const sayHi = (name) => console.log(`Hi ${name} !`);
const askQuestion = (question) => console.log(`Question: ${question}`);
const sayResult = (result) => console.log(result);
const getUseAnswer = () => readlineSync.question('Your answer: ');

const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[getRandInt(2)];
};

export const getResArithOperat = (num1, num2, operator) => {
  let operationResult = num1 * num2;

  if (operator === '-') {
    operationResult = num1 - num2;
  } else if (operator === '+') {
    operationResult = num1 + num2;
  } else {
    operationResult = num1 * num2;
  }
  askQuestion(`${num1} ${operator} ${num2}`);
  return operationResult;
};

const checkNumIsEven = (randInt) => (randInt % 2 === 0 ? 'yes' : 'no');
const checkValAndAnswUse = (correctAnswer, useAnswer, useName) => (correctAnswer === useAnswer ? 'Correct!' : `\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);

export const gameParityCheck = () => {
  GreetAndSayRuls('Answer "yes" if the number is even, otherwise answer "no".');
  const name = askName();
  sayHi(name);

  let i = 0;
  while (i !== 3) {
    const RandInt = getRandInt(99);
    askQuestion(RandInt);
    const resultOfChecking = checkValAndAnswUse(checkNumIsEven(RandInt), getUseAnswer(), name);
    sayResult(resultOfChecking);
    i = resultOfChecking === 'Correct!' ? i += 1 : i = 0;
  }
  return console.log(`Congratulations, ${name}`);
};

export const gameBrainCalc = () => {
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
