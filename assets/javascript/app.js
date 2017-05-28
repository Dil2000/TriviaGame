$(document).ready(function(){

	  var questions = [{   
	    //question
	    ques: "In the standard English Scrabble game, what is the letter worth the maximum 10 points",
	  	//answers
	    a1:"z",
	    a2:"x",
	    a3:"j",
	    a4:"w",
	    ca:"a1" // Correct answer
	  },{
	  	ques: "The Oompa-Loompas feature in",
	    a1:"Tellytubbies",
	    a2:"Charlie and the Chocolate Factory",
	    a3:"Alice in Wonderland",
	    a4:"Star Wars",
	    ca:"a2"
	  },{
	  	ques: "Technically lugumes/beans, cereals and nuts are defined as what category of foodstuff",
	    a1:"Edible seeds",
	    a2:"Fruits",
	    a3:"Flowers",
	    a4:"Leaves",
	    ca:"a1"
	  },{
	  	ques: "Technically called the masseter, what is the common name of the human muscle able to exert the most force",
	    a1:"Jaw",
	    a2:"Thigh",
	    a3:"Tongue",
	    a4:"Heart",
	    ca:"a1"
	  },{
	  	ques: "Six inches equates to how many millimetres",
	    a1:"75",
	    a2:"96",
	    a3:"152",
	    a4:"235",
	    ca:"a3" 
	  },{
	  	ques: "",
	    a1:"",
	    a2:"",
	    a3:"",
	    a4:"",
	    ca:"" 
	  }


	]


/*****************************************************************************/

	var NoOfCorrAns = 0;
	var correctAnswer = "";
    var CountDown = 60;
    var interval = 0;
    var currentQuestion =0;


// Time Out for question
/*
	var TimeOutQuestion = setTimeout(function(){ 
		//alert("time out");
	} , 15000); 

	function fiveSeconds(){
		$("#timeLeft").html("<h2>Five Seconds left</h2>");
	};

	function tenSeconds(){
		$("#timeLeft").html("<h2>Ten Seconds left</h2>");
		startTimer();
	};

    function timeOut(){
        $("#timeLeft").html("<h2>Time Out</h2>");
    };

//  Clear Time after question answered
	$("#restart").on("click",function(){
		clearTimeout(TimeOutQuestion);
	});
	
// Clear time after a correct answer
	setTimeout(fiveSeconds,5000);

// Clear time after a wrong answer
	setTimeout(tenSeconds,10000);

// time done
    setTimeout(timeOut,15000);
*/
// Running Timer
	function startTimer() {
      interval = setInterval(decrement, 1000);
    }

//  The decrement function.
    function decrement() {
      CountDown--;
      $("#countDownNumber").html("<h2>" + CountDown + "</h2>");
      if (CountDown <= 0) {
        stopTimer();          
      }
    }

//  The stop function
    function stopTimer() {
      console.log("stopTimer");
      interval = 0;
      clearInterval(interval);
      $("#countDownNumber").html("<h2>Times Up</h2>");
   	  //show correct answer
   	  if (currentQuestion === questions.length){
			console.log("Game Over");
		}
	  else {
	  	   	 FindNextQuestion();
	  }
    }


/*****************************************************************/


// Loop of questions

	FindNextQuestion = function(){
	 	$("#question").html(questions[currentQuestion].ques);
	    $("#ans1").html("<h3>" + questions[currentQuestion].a1 + "</h3>");	        
	    $("#ans2").html("<h3>" + questions[currentQuestion].a2 + "</h3>");
	    $("#ans3").html("<h3>" + questions[currentQuestion].a3 + "</h3>");
	    $("#ans4").html("<h3>" + questions[currentQuestion].a4 + "</h3>");
	    correctAnswer = questions[currentQuestion].ca;
	    //console.log("correct Answer " + correctAnswer);

		if (currentQuestion === questions.length){
			console.log("Game Over");
			stopTimer();
		}
		else {
			currentQuestion++;
		    startTimer();
		}

	};

    FindNextQuestion();


// Start Game
/*	StartGame = function(){
		for (i = 0 ; i < question.length ; i++){
			FindNextQuestion(i);
			startTimer();
		}
	};
*/
    //startTimer();

// Answer click events
	$("#ans1").on("click",function(){
		if (correctAnswer === "a1"){
			console.log("Correct Answer");
			correctAnswer++;
		}
		else {
			console.log("Wrong Answer");
			//show correct answer;			
		}
		stopTimer();
	});

	$("#ans2").on("click",function(){
		if (correctAnswer === "a2"){
			console.log("Correct Answer");
			correctAnswer++;
		}
		else {
			console.log("Wrong Answer");
			//show correct answer;			
		}
		stopTimer();
	});

	$("#ans3").on("click",function(){
		if (correctAnswer === "a3"){
			console.log("Correct Answer");
			correctAnswer++;
		}
		else {
			console.log("Wrong Answer");
			//show correct answer;			
		}
		stopTimer();
	});

	$("#ans4").on("click",function(){
		if (correctAnswer === "a4"){
			console.log("Correct Answer");
			correctAnswer++;
		}
		else {
			console.log("Wrong Answer");
			//show correct answer;			
		}
		stopTimer();
	});

// If times up show right answer

// End of questions give no of correct answers










});