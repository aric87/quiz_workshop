//questions - question, correct answer, 4 options
//game - # of correct answers, group of questions, current question, number of current question
//user interactions - start a game, choose an answer, finish the game 
!function(){

function Question(questionText,correctAnswer,answerOption1,answerOption2,answerOption3,answerOption4){
	this.questionText = questionText;
	this.correctAnswer = correctAnswer;
	this.answerOptions = [answerOption1,answerOption2,answerOption3,answerOption4]
}
var question1 = new Question('Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?','TINA TURNER','TINA TURNER','Random','Random2','random3');
var question2 = new Question('Vodka, Galliano and orange juice are used to make which classic cocktail?','HARVEY WALLBANGER','HARVEY WALLBANGER','Random','Random2','random3');
var question3 = new Question('Which American state is nearest to the former Soviet Union?','HARVEY WALLBANGER','HARVEY WALLBANGER','Random','Random2','random3')
var question4 = new Question('In which year did Foinavon win the Grand National?','1967','1967','1966','1968','1969');
var question5 = new Question('At which battle of 1314 did Robert The Bruce defeat the English forces?','BANNOCKBURN','BANNOCKBURN','Random','Random2','random3')


var data = {
	questionsArray:[question1, question2,question3,question4,question5],
	currentNumber : 0,
	numberCorrect:0,
}

var controller = {
	currentQuestion:data.questionsArray[0],
	setCurrentQuestion:function(){
		this.currentQuestion = data.questionsArray[data.currentNumber]
	},
	iterateQuestion:function(button){
		var userGuess = button.text();
		if(userGuess == this.currentQuestion.correctAnswer){
			data.numberCorrect++
		}
		data.currentNumber++
		this.setCurrentQuestion();
		view.render();
	}
}

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
	},
	render:function(){
		console.log(controller.currentQuestion);
		this.questionHeading.text(controller.currentQuestion.questionText);
		this.button1.text(controller.currentQuestion.answerOptions[0]); 
		this.button2.text(controller.currentQuestion.answerOptions[1]); 
		this.button3.text(controller.currentQuestion.answerOptions[2]);  
		this.button4.text(controller.currentQuestion.answerOptions[3]);
		this.questionNumber.text(controller.currentQuestionNumber);
	}
}
window.game = {
	view : view,
	data: data,
	controller : controller
}


$(document).ready(function(){
	view.init();
	view.render();
});

}()











