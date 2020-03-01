import { getRandInt, cons } from './index';

export const getResArithOperat = (num1, num2, operator) => {
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

export const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[getRandInt(2)];
};
