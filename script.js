
const questions = [
  {
    id: 1,
    qns: "What does JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Creating database tables",
      "Adding interactivity to websites",
      "Designing images",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    qns: "Which keyword is used to declare a variable in modern JavaScript?",
    options: ["var", "let", "const", "Both let and const"],
    correctAnswer: 3,
  },
  {
    id: 3,
    qns: "Which method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0,
  },
  {
    id: 4,
    qns: "What is the output type of typeof null in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: 1,
  },
  {
    id: 5,
    qns: "Which symbol is used for strict equality comparison?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    id: 6,
    qns: "Which function is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    qns: "Which array method creates a new array by applying a function to each element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: 1,
  },
  {
    id: 8,
    qns: "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "0", "undefined", "false"],
    correctAnswer: 2,
  },
  {
    id: 9,
    qns: "Which event occurs when a user clicks on an HTML element?",
    options: ["onchange", "onclick", "onload", "onsubmit"],
    correctAnswer: 1,
  },
  {
    id: 10,
    qns: "Which method is used to remove the last element from an array?",
    options: ["push()", "pop()", "shift()", "splice()"],
    correctAnswer: 1,
  },
];


const question = document.getElementById("Quizqns");
const option = document.getElementById("option");
const nextBtn = document.getElementById("nextbtn");
const Qnsnumber = document.getElementById("Qnsnumber");
const result = document.getElementById("result");
const timer = document.getElementById("timer");


let count = 0;
let selectAnswer = null;
let userScore = 0;
let timeLeft = 30; 


function loadQuestion() {

    const currentQuestion = questions[count];

    question.innerText = currentQuestion.qns;

    Qnsnumber.innerText =
        `Question ${count + 1}/${questions.length}`;

    option.innerHTML = "";


    currentQuestion.options.forEach((e, index) => {

        let col = document.createElement("div");

        col.classList.add("col-md-6");


        let button = document.createElement("button");

        button.innerText = e;

        button.classList.add(
            "btn",
            "btn-outline-dark",
            "option-btn"
        );


        button.onclick = function () {

            selectAnswer = index;
            nextbtn()

        };


        col.appendChild(button);

        option.appendChild(col);

    });
startTimer();
}



nextBtn.onclick = nextbtn;


function nextbtn() {

    if (selectAnswer === questions[count].correctAnswer) {

        userScore++;

    }


    if (count < questions.length - 1) {

        count++;

        selectAnswer = null;

        loadQuestion();

    }

    else {

        TotalResult();

    }
}

let timerInterval;

function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 30;

    timer.innerHTML = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {

        timeLeft--;

        timer.innerHTML = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            selectAnswer = null;

            nextbtn();

        }

    }, 1000);

}


function TotalResult() {

    question.innerText = "Quiz Completed ";

    option.innerHTML = "";

    Qnsnumber.innerText = "";

    nextBtn.style.display = "none";


    result.innerHTML = `
        <h4 class="text-center mt-3">
             Total Score : ${userScore}/${questions.length}
        </h4>
    `;

}


loadQuestion();

function ScoreResult(){

  const result = document.getElementById("result");

  result.innerHTML = `
   <h4 class="text-center">Total Score </h4>

  
 <h4 class="text-center">${score}/${quizQuestions.length}</h4>
 <br>
 <div class = "list">
 
 <h3 class = "text-center">Review Summary</h3>

 <ul class="list-group">
  ${userAnswer.map((answer,index)=>
    `

   <li class="list-group-item">

   <h5 class="text-center">Question No :- ${index + 1} ${answer.question}</h5>

   <br>

   <h6 class="text-center">Your Answer :- ${answer.selectAnswer !== null ? answer.selectAnswer:"not answered"}</h6>
   
   <br>


   <h6 class ="text-center">Correct Answer :-${answer.correct}</h6>
   
   </li>
    ` 
  )}
  


 </ul >


 </div>
 
 
 `
}




