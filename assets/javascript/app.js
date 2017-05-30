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
	  }/*,{
	  	ques: "",
	    a1:"",
	    a2:"",
	    a3:"",
	    a4:"",
	    ca:"" 
	  }*/


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
	  CountDown = 21;
      interval = setInterval(decrement, 1000);      
    }

//  The decrement function.
    function decrement() {
      CountDown--;
      $("#countDownNumber").html("<h2>" + CountDown + "</h2>");
      if (CountDown <= 0) {
      	$("#countDownNumber").html("<h3>Times<br/>Up</h3>");
      	DisplayCorrectAnswer();
        stopTimer();                   
      }
    }

//  The stop function
    function stopTimer() {
      console.log(currentQuestion);
      $(".qanda").attr("disabled","disabled");
      clearInterval(interval);
      //wait 3 seconds to see the correct answer
      var TimeOutQuestion = setTimeout(function(){ 
	   	  if (currentQuestion === questions.length){
				TotalCorrect();
				console.log("cQ : " + currentQuestion + " ques len : " + questions.length);
			}
		  else {
		  	    FindNextQuestion();
		  	    $(".qanda").attr("disabled",false);
		  	    $(".qanda").attr("class","btn btn-info btn-lg qanda");
		  }

	  } , 3000);
    }


/*****************************************************************/


// Loop of questions

	FindNextQuestion = function(){
	 	$("#question").html("<h3>" + "Question No : " + (parseInt(interval)+1) + "</br></br>" + questions[currentQuestion].ques + "</h3>");
	    $("#ans1").html("<h3>" + questions[currentQuestion].a1 + "</h3>");	        
	    $("#ans2").html("<h3>" + questions[currentQuestion].a2 + "</h3>");
	    $("#ans3").html("<h3>" + questions[currentQuestion].a3 + "</h3>");
	    $("#ans4").html("<h3>" + questions[currentQuestion].a4 + "</h3>");
	    correctAnswer = questions[currentQuestion].ca;
		currentQuestion++;
		startTimer();
	};

    FindNextQuestion();


// Answer click events
	$("#ans1").on("click",function(){
		if (correctAnswer === "a1"){
			$("#ans1").attr("class","btn btn-success btn-lg qanda");	
			NoOfCorrAns++;		
		}
		else {
			$("#ans1").attr("class","btn btn-warning btn-lg qanda");
			DisplayCorrectAnswer();	
		}
		stopTimer();
	});

	$("#ans2").on("click",function(){
		if (correctAnswer === "a2"){
			console.log("Correct Answer");
			$("#ans2").attr("class","btn btn-success btn-lg qanda");
			NoOfCorrAns++;	
		}
		else {
			$("#ans2").attr("class","btn btn-warning btn-lg qanda");	
			DisplayCorrectAnswer();	
		}

		stopTimer();
	});

	$("#ans3").on("click",function(){
		if (correctAnswer === "a3"){
			$("#ans3").attr("class","btn btn-success btn-lg qanda");
			NoOfCorrAns++;	
		}
		else {
			$("#ans3").attr("class","btn btn-warning btn-lg qanda");	
			DisplayCorrectAnswer();	
		}
		stopTimer();
	});

	$("#ans4").on("click",function(){
		if (correctAnswer === "a4"){
			$("#ans4").attr("class","btn btn-success btn-lg qanda");
			NoOfCorrAns++;	
		}
		else {
			$("#ans4").attr("class","btn btn-warning btn-lg qanda");	
			DisplayCorrectAnswer();
		}
		stopTimer();
	});


// Display the correct answer at the end
	DisplayCorrectAnswer = function(){
		if (correctAnswer ==="a1"){
			$("#ans1").attr("class","btn btn-success btn-lg qanda");
		}
		if (correctAnswer === "a2"){
			$("#ans2").attr("class","btn btn-success btn-lg qanda");
		}
		if (correctAnswer === "a3"){
			$("#ans1").attr("class","btn btn-success btn-lg qanda");
		}
		if (correctAnswer === "a4"){
			$("#ans1").attr("class","btn btn-success btn-lg qanda");
		}
	};


// End of questions give no of correct answers
   TotalCorrect = function(){
   	  alert(" Total number of correct answers : " + NoOfCorrAns); 
   	  $(".jumbotron").fadeOut('slow'); 	  
   };





});