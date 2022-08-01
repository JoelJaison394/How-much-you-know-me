const quizData = [
  {
    question: 'Which is my favorite color ?',
    a: 'Red',
    b: 'Green',
    c: 'Blue',
    d: 'Black',
    correct: 'c'
  },
  {
    question: 'What was my hobby that I loved growing up?',
    a: 'Drawing',
    b: 'Singing',
    c: 'Writing',
    d: 'Gaming',
    correct: 'd'
  },
  {
    question: 'What genre of movies is my favourite?',
    a: 'action films.',
    b: 'comedies',
    c: 'romantic films',
    d: 'adventure films',
    correct: 'd'
  },
  {
    question: 'Where do I want to travel the most?',
    a: 'Maldives',
    b: 'Paris, France',
    c: 'Dubai, U.A.E.',
    d: 'Rome, Italy',
    correct: 'b'
  },
  {
    question: 'What sport do I hate the most?',
    a: 'Chess',
    b: 'Football',
    c: 'Badminton',
    d: 'Uno',
    correct: 'a'
  },
  {
    question: 'What\'s my least favorite activity to do?',
    a: 'Studying',
    b: 'Playing video games',
    c: 'Traveling',
    d: 'Exercising',
    correct: 'd'
  },
  {
    question: 'What\'s my favorite thing in my room?',
    a: 'Pillow',
    b: 'Earphone',
    c: 'PC',
    d: 'Bed',
    correct: 'b'
  },
  {
    question: ' What is the last thing I do at night?',
    a: 'Watch movies',
    b: 'Chatting',
    c: 'Listen songs',
    d: 'Turn Off my pc',
    correct: 'c'
  },
  {
    question: ' Which is my favorite movie?',
    a: 'Shiddat',
    b: 'After',
    c: 'One Day(2016)',
    d: 'The Fault in Our Stars',
    correct: 'd'
  }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBTN = document.getElementById("submit"); 

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerHTML=currentQuizData.question;

  a_text.innerHTML=currentQuizData.a;
  b_text.innerHTML=currentQuizData.b;
  c_text.innerHTML=currentQuizData.c;
  d_text.innerHTML=currentQuizData.d;

}


function getSelected() {

  let answer = undefined;

  answerEls.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
    return answer;
}

function deselectAnswer(){
  answerEls.forEach(answerEl =>{
    answerEl.checked = false;
  });
}

function showScore(){
  quiz.innerHTML = `<h2>Your Score is ${score}/${quizData.length}</h2>`
}

submitBTN.addEventListener('click', () => {
  

  const answer = getSelected();

  console.log(answer);


  if(answer){
    if(answer === quizData[currentQuiz].correct ){
      score++
    }
    currentQuiz++;

    if(currentQuiz<quizData.length){
      loadQuiz();
    } else {

      if(score<2){
        quiz.innerHTML = `<h2>You dont know me.  &#x1F61E;</h2><button onclick="showScore()">Your score</button>`
      }

      else if(score<3){
        quiz.innerHTML = `<h2>We have meet somewhere. &#128570; </h2><button onclick="showScore()">Your score</button>`
      }

      else if(score<5){
        quiz.innerHTML = `<h2>We might had a brief talk. &#128522;</h2><button onclick="showScore()">Your score</button>`
      }

      else if(score<=7){
        quiz.innerHTML = `<h2>You are my friend . &#128515;</h2><button onclick="showScore()">Your score</button>`
      }
      else if(score===8){
        quiz.innerHTML = `<h2>You are my Best Friend . &#128525;</h2><button onclick="showScore()">Your score</button>`
      }
      else{
        quiz.innerHTML = `<h2>You know me better&#128519;</h2> <button onclick="showScore()">Your score</button>`
      }

    }
  }
  
});