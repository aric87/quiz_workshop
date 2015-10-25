//questions - question, correct answer, 4 options
//game - # of correct answers, group of questions, current question, number of current question
//user interactions - start a game, choose an answer, finish the game 
!function(){
//create the question constructor
function Question(questionText,correctAnswer,answerOption1,answerOption2,answerOption3,answerOption4){
	this.questionText = questionText;
	this.correctAnswer = correctAnswer;
	this.answerOptions = [answerOption1,answerOption2,answerOption3,answerOption4]
}
//create our questions
var question1 = new Question('Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?','Tina Turner','Tina Turner','Larry King','Bionce','Michael Jackson');
var question2 = new Question('Vodka, Galliano and orange juice are used to make which classic cocktail?','Harvey Wallbanger','Harvey Wallbanger','Long Island Ice Tea','Whiskey Sour','Lamba Squeeze');
var question3 = new Question('Which American state is nearest to the former Soviet Union?','Alaska','Alaska','Oregon','Hawaii','California')
var question4 = new Question('In which year did Foinavon win the Grand National?','1967','1967','1966','1968','1969');
var question5 = new Question('At which battle of 1314 did Robert The Bruce defeat the English forces?','Bannockburn','Bannockburn','Isle of Sky','Rowan Tree','Brannagh')

//data object that is responsible for handling the data
var data = {
	questionsArray:[question1, question2,question3,question4,question5],
	currentNumber : 0,
	numberCorrect:0,
	currentQuestion:question1,
	setCurrentQuestion:function(){
		this.currentQuestion = this.questionsArray[this.currentNumber]
	}
}
//controller that handles the interaction between data and view
var controller = {
	iterateQuestion:function(button){
		var userGuess = button.text();
		if(userGuess == data.currentQuestion.correctAnswer){
			data.numberCorrect++
		}
		data.currentNumber++
		if(data.currentNumber == data.questionsArray.length){
			view.quizDone()
		} else{
			data.setCurrentQuestion();
			view.render();			
		}
	}
}
//view object handles changing the DOM
var view = {
	init:function(){
		this.questionHeading = $('.question');
		this.button1 = $('button.one');
		this.button2 = $('button.two');
		this.button3 = $('button.three');
		this.button4 = $('button.four');
		this.questionNumber = $('.number');
		this.questionTotal = $('.total');
		$('button').click(function(){
			controller.iterateQuestion($(this));
		})	
		this.questionTotal.text(data.questionsArray.length);
		view.render();
	},
	render:function(){
		this.questionHeading.text(data.currentQuestion.questionText);
		this.button1.text(data.currentQuestion.answerOptions[0]); 
		this.button2.text(data.currentQuestion.answerOptions[1]); 
		this.button3.text(data.currentQuestion.answerOptions[2]);  
		this.button4.text(data.currentQuestion.answerOptions[3]);
		this.questionNumber.text(data.currentNumber);
		
	},
	quizDone:function(){
		$('button').hide();
		this.questionNumber.parent().hide();
		this.questionHeading.text('Congratulations you got ' + data.numberCorrect + ' correct out of ' + data.questionsArray.length)
	}
}
//allow our game to be accessed through a single global variable 
window.game = {
	view : view,
	data: data,
	controller : controller
}
//call the init function when the page is ready
$(document).ready(function(){
	view.init();
});

}()











