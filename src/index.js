import readlineSync from 'readline-sync';

export const GreetAndSayRuls = (rulsOfGame) => console.log(`Welcome to the Brain Games! \n${rulsOfGame}`);
export const askName = () => readlineSync.question(' \nMay I have your name? ');
export const sayHi = (name) => console.log(`Hi ${name} !\n`);
export const askQuestion = (question) => console.log(`Question: ${question}`);
export const sayResult = (result) => console.log(result);
export const getUseAnswer = () => readlineSync.question('Your answer: ');

export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));
export const getRandomOperator = () => {
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

export const checkNumIsEven = (randInt) => (randInt % 2 === 0 ? 'yes' : 'no');
export const checkValAndAnswUse = (correctAnswer, useAnswer, useName) => (correctAnswer === Number(useAnswer) ? 'Correct!' : `\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
