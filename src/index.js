import readlineSync from 'readline-sync';

export const numberRounds = 3;

export const runBrainGame = (rule, [questions, answers]) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(rule);
  console.log(questions);

  for (let i = 0; i < numberRounds; i += 1) {
    console.log(`hint: ${answers[i]}`);
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answers[i]) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answers[i]}'. \nLet's try again, ${name}\n`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

// hint уберу после завершения проекта
