const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const timerElement = document.getElementById('time');

let currentQuestion = 0;
let timeLeft = 14;
let timer;

const quiz = [
  {
    question: "Fill in the blank: 'Hardly ___ left the house when it started to rain.'",
    options: [
      "I had",
      "had I",
      "I have",
      "have I"
    ],
    correct: 1
  },
  {
    question: "Choose the correct sentence:",
    options: [
      "No sooner she arrived, the meeting started.",
      "No sooner she had arrived, the meeting started.",
      "No sooner had she arrived, the meeting started.",
      "No sooner had she arrived, did the meeting started."
    ],
    correct: 2
  },
  {
    question: "Which sentence uses 'affect' correctly?",
    options: [
      "The weather will affect our plans.",
      "This movie has a positive affect on me.",
      "He has a good affect on his students.",
      "His words didn’t affect his mood."
    ],
    correct: 0
  },
  {
    question: "Identify the figure of speech in the sentence: 'The world is a stage, and we are merely players.'",
    options: [
      "Simile",
      "Metaphor",
      "Hyperbole",
      "Personification"
    ],
    correct: 1
  },
  {
    question: "Fill in the blank: 'It’s high time you ___ your homework.'",
    options: [
      "do",
      "did",
      "have done",
      "will do"
    ],
    correct: 1
  },
  {
    question: "Choose the word that best replaces the phrase in brackets: 'His behavior was (not appropriate) for the situation.'",
    options: [
      "Indignant",
      "Inadequate",
      "Improper",
      "Irrelevant"
    ],
    correct: 2
  },
  {
    question: "What does the phrase 'to beat around the bush' mean?",
    options: [
      "To avoid the main topic",
      "To talk directly",
      "To argue loudly",
      "To repeat yourself"
    ],
    correct: 0
  },
  {
    question: "Which sentence is in the subjunctive mood?",
    options: [
      "If I have money, I will buy a car.",
      "He runs every morning.",
      "I wish I were taller.",
      "They are going to the park."
    ],
    correct: 2
  },
  {
    question: "What does the word 'ubiquitous' mean?",
    options: [
      "Rare",
      "Present everywhere",
      "Large and powerful",
      "Of great importance"
    ],
    correct: 1
  },
  {
    question: "Identify the error in the sentence: 'Each of the players have their own locker.'",
    options: [
      "'Each' should be 'Every'",
      "'Players' should be 'Player'",
      "'Have' should be 'Has'",
      "'Their' should be 'His or her'"
    ],
    correct: 2
  },
];

function loadQuestion() {
  if (currentQuestion >= quiz.length) {
    clearInterval(timer);
    alert("Quiz completed!");
    return;
  }

  const currentQuiz = quiz[currentQuestion];
  questionElement.textContent = `${currentQuestion + 1}. ${currentQuiz.question}`;
  options.forEach((option, index) => {
    option.textContent = currentQuiz.options[index];
    option.classList.remove('correct', 'wrong');
    option.onclick = () => checkAnswer(index);
  });

  progressText.textContent = `Question ${currentQuestion + 1} of ${quiz.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / quiz.length) * 100}%`;
}

function checkAnswer(index) {
  const correctIndex = quiz[currentQuestion].correct;
  if (index === correctIndex) {
    options[index].classList.add('correct');
  } else {
    options[index].classList.add('wrong');
    options[correctIndex].classList.add('correct');
  }

  setTimeout(() => {
    currentQuestion++;
    timeLeft = 14;
    loadQuestion();
  }, 1000);
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      loadQuestion();
    } else {
      timeLeft--;
      timerElement.textContent = timeLeft < 15 ? `${timeLeft}` : timeLeft;
    }
  }, 1000);
}

loadQuestion();
startTimer();
