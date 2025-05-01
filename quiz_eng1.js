const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const timerElement = document.getElementById('time');

let currentQuestion = 0;
let timeLeft = 15;
let timer;

const quiz = [
  {
    question: "What is the opposite of 'big'?",
    options: [
      "Large",
      "Small",
      "Tall",
      "Wide"
    ],
    correct: 1
  },
  {
    question: "Fill in the blank: 'I ___ a new car.'",
    options: [
      "has",
      "have",
      "am",
      "is"
    ],
    correct: 1
  },
  {
    question: "Choose the correct spelling:",
    options: [
      "Tabel",
      "Table",
      "Tabal",
      "Tabble"
    ],
    correct: 1
  },
  {
    question: "What is the color of the sky on a clear day?",
    options: [
      "Blue",
      "Green",
      "Red",
      "Yellow"
    ],
    correct: 0
  },
  {
    question: "How many days are in a week?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2
  },
  {
    question: "Which is a fruit?",
    options: [
      "Carrot",
      "Banana",
      "Potato",
      "Spinach"
    ],
    correct: 1
  },
  {
    question: "Fill in the blank: 'She is ___ teacher.'",
    options: [
      "a",
      "an",
      "the",
      "none"
    ],
    correct: 0
  },
  {
    question: "What sound does a cat make?",
    options: [
      "Meow",
      "Bark",
      "Moo",
      "Chirp"
    ],
    correct: 0
  },
  {
    question: "What is the past tense of 'jump'?",
    options: [
      "Jumps",
      "Jumped",
      "Jumping",
      "Jumpt"
    ],
    correct: 1
  },
  {
    question: "Which is a question?",
    options: [
      "I like coffee.",
      "You like coffee.",
      "Coffee is delicious.",
      "Do you like coffee?"
    ],
    correct: 3
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
