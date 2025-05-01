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
    question: "Fill in the blank: 'She ___ to school every day.'",
    options: [
      "go",
      "goes",
      "going",
      "gone"
    ],
    correct: 1
  },
  {
    question: "What does 'honest' mean?",
    options: [
      "Lying",
      "Truthful",
      "Rude",
      "Secretive"
    ],
    correct: 1
  },
  {
    question: "Choose the sentence with correct punctuation:",
    options: [
      "where is my book",
      "Where is my book",
      "Where is my book?",
      "where is my book?"
    ],
    correct: 2
  },
  {
    question: "Which sentence is correct?",
    options: [
      "I can’t hardly wait for the movie.",
      "I can hardly wait for the movie.",
      "I hardly can’t wait for the movie.",
      "I can wait hardly for the movie."
    ],
    correct: 1
  },
  {
    question: "What does 'to run out of' mean in the sentence: 'We ran out of milk'?",
    options: [
      "To spill something",
      "To leave the house",
      "To finish something",
      "To stop running"
    ],
    correct: 2
  },
  {
    question: "Fill in the blank: 'I have been living here ___ 5 years.'",
    options: [
      "since",
      "for",
      "from",
      "during"
    ],
    correct: 1
  },
  {
    question: "What does the word 'enormous' mean?",
    options: [
      "small",
      "light",
      "tiny",
      "huge"
    ],
    correct: 3
  },
  {
    question: "Which is the correct past tense?",
    options: [
      "I see a bird.",
      "I saw a bird.",
      "I seen a bird.",
      "I am seeing a bird."
    ],
    correct: 1
  },
  {
    question: "What does 'grab a bite' mean?",
    options: [
      "To take a small bite of food",
      "To eat something quickly",
      "To steal food",
      "To cook a meal"
    ],
    correct: 1
  },
  {
    question: "Which is a correct sentence?",
    options: [
      "She don’t knows the answer.",
      "She don’t know the answer.",
      "She doesn’t know the answer.",
      "She doesn’t knows the answer."
    ],
    correct: 2
  },
];

function loadQuestion() {
  if (currentQuestion >= quiz.length) {
    clearInterval(timer);
    //alert
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
