function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	
	
  function showQuestions(questions, quizContainer){
	var output = [];
	var answers;
    for(var i=0; i<questions.length; i++){
		answers=[];
		//va a ser necesario que vaya vacío cada vez ya que no queremos que se carguen las respuestas de las preguntas anteriores.
		for(letter in questions[i].answers){
			//printeamos preguntas
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter] + '<br>'
				+ '</label>'
			);
		}
		output.push(
			'<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	quizContainer.innerHTML = output.join('');
    
}

function showResults(questions, quizContainer, resultsContainer){
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
	

	//for para verificar cada caso
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		//if answer is empty
		if (!userAnswer){
			alert("Hay preguntas sin responder, inténtalo de nuevo!");
		}

		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].innerHTML += '<span class="checkmark" style="color: lightgreen;">✓</span>';}
		//if answer is wrong
		else{
			answerContainers[i].innerHTML += '<span class="wrong" style="color: red;">X</span>';
		}


	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = 'Has acertado ' + numCorrect + ' preguntas';
}

showQuestions(preguntasTiburon, quizContainer);

submitButton.onclick = function(){
	showResults(preguntasTiburon, quizContainer, resultsContainer);
};

}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

let preguntasTiburon = [
    {
      question: "Los tiburones existen desde hace...",
      answers: {
        a: "5000 millones de años.",
        b: "400 millones de años",
        c: "100 millones de años",
      },
      correctAnswer: "b",
    },
    {
        question: "Hay más probabilidad de morir por",
        answers: {
        a: "Por un ataque de un perro",
        b: "Por un ataque de un caballo",
        c: "Por un ataque de tiburón",
      },
      correctAnswer: "b",
    },
    {
        question: "Los embarazos de tiburón duran..",
        answers: {
        a: "> 9 meses.",
        b: " < 3 años",
        c: "> 3 años",
      },
      correctAnswer: "c",
    },
    {
        question: "¿Cuál es el pez más grande del mundo?",
        answers: {
        a: "Tiburón ballena",
        b: "Pez luna",
        c: "Tiburón peregrino",
      },
      correctAnswer: "a",
    },
  ];

generateQuiz(preguntasTiburon, quizContainer, resultsContainer, submitButton);