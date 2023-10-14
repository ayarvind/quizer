async function fetchQuestions() {
  const response = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
  const data = await response.json();
  return data;
}

async function createQuiz() {
  const questions = await fetchQuestions();

  // create an array using a loop
  const quiz = [];
  for (let i = 0; i < questions.results.length; i++) {
      quiz.push({
          numb: i+1,
          question: questions.results[i].question,
          answer: questions.results[i].correct_answer,
          // now give options as an array in random order
          options: questions.results[i].incorrect_answers.concat(questions.results[i].correct_answer).sort(function () {
              return 0.5 - Math.random();
          })
      });
  }    
  return quiz;
}

export default createQuiz;
