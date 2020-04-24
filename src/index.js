import readlineSync from 'readline-sync';

export const numberRounds = 3;

export const runBrainGame = (task, [questions, answers]) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(task);
  console.log(`Hello ${name}`);

  for (let i = 0; i < numberRounds; i += 1) {
    const question = questions[i];
    const answer = answers[i];

    console.log(`Question: ${question}`);
    console.log(`hint: ${answer}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

// hint уберу после завершения проекта =)
