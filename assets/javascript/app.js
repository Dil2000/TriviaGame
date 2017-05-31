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
	  	ques: "Dumb Laws - It is illegal for stores to sell corn flakes on Sunday. ",
	    a1:"Nashville - TN",
	    a2:"Columbus - GA",
	    a3:"Columbus - OH",
	    a4:"Stamford - CT",
	    ca:"a2" 
	  },{
	  	ques: "Dumb Laws - Persons may not wear hoods in public.",
	    a1:"Austin - TX",
	    a2:"Knoxville - TN",
	    a3:"Dublin - GA",
	    a4:"Atlanta - GA",
	    ca:"a3" 
	  },{
	  	ques:"Dumb Laws - Every head of household must own a gun.",
	    a1:"Atlanta - GA",
	    a2:"Marietta - GA",
	    a3:"Alpharetta - GA",
	    a4:"Kennasaw - GA",
	    ca:"a4" 
	  },{
	  	ques: "Dumb Laws - It is illegal to say Oh Boy.",
	    a1:"Gainesville - GA",
	    a2:"Marietta - GA",
	    a3:"Jonesboro - GA",
	    a4:"Kennasaw - GA",
	    ca:"a3" 
	  },{
	  	ques: "Dumb Laws - Masks may not be worn in public.",
	    a1:"Alabama",
	    a2:"Florida",
	    a3:"North Carolina",
	    a4:"Tennessee",
	    ca:"a1" 
	  },{
	  	ques: "It is a crime to share your Netflix password.",
	    a1:"Alabama",
	    a2:"Florida",
	    a3:"North Carolina",
	    a4:"Tennessee",
	    ca:"a4" 
	  }

	];


	var NoOfCorrAns = 0;		// No of Correct answers
	var NoOfIncAns = 0;			// No of Incorrect answers
    var currentQuestion =0;		// question number	
	var correctAnswer = "";		// Correct answer for the current question
    var CountDown = 60;			// No of seconds left to answer the question
    var interval = 0;			// Timers left to answer the question
    var reminder
    
/*****************************************************************************/

// Time Out for question
	function tenSeconds(){
		$("#TimeLeft").html("<h2>Ten Seconds left</h2>");
		$("#TimeLeft").fadeIn('slow').delay(1000).fadeOut("slow");
	};


//  Timer for questions
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
      function myStopFunction() {
    		clearTimeout(reminder);
	  }
      clearInterval(interval);
      //wait 2 seconds to show the correct answer
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

	  } , 2000);	  
    }


/*****************************************************************/

//  Start Button
	$("#startgame").on("click",function(){
		// FadeIn's and outs
		$(".jumbotron").fadeIn('fast'); 
   	    $("#congrats").fadeOut('fast'); 
   	    $("#Incorrects").fadeOut('fast');   	  
        $("#startgame").fadeOut('fast');
        $("#FinalImge").fadeOut('fast');

        var NoOfCorrAns = 0;		// No of Correct answers
		var NoOfIncAns = 0;			// No of Incorrect answers
	    var currentQuestion = 0;	// question number	
		var correctAnswer = "";		// Correct answer for the current question
	    var interval = 0;			// Timers left to answer the question

		FindNextQuestion();
	});


//  Questions

	FindNextQuestion = function(){

	 	$("#question").html("<h3>" + "Question No : " + (parseInt(currentQuestion)+1) + "</br></br>" + questions[currentQuestion].ques + "</h3>");
	    $("#ans1").html("<h4>" + questions[currentQuestion].a1 + "</h4>");	        
	    $("#ans2").html("<h4>" + questions[currentQuestion].a2 + "</h4>");
	    $("#ans3").html("<h4>" + questions[currentQuestion].a3 + "</h4>");
	    $("#ans4").html("<h4>" + questions[currentQuestion].a4 + "</h4>");

	    correctAnswer = questions[currentQuestion].ca;
		currentQuestion++;

		startTimer();
		reminder = setTimeout(tenSeconds,11000);


		$("#congrats").text("");
		// Audio to when starts a new question
		var x = document.getElementById("waitaudio");
		x.play();

	};


//  Click events

	$("#ans1").on("click",function(){
		if (correctAnswer === "a1"){
			ClickedCorrect(this);
		}
		else {
			NoOfIncAns++;
			DisplayCorrectAnswer(this);	
		}
		stopTimer();
	});

	$("#ans2").on("click",function(){
		if (correctAnswer === "a2"){
			ClickedCorrect(this);	
		}
		else {
			NoOfIncAns++;
			DisplayCorrectAnswer(this);	
		}

		stopTimer();
	});

	$("#ans3").on("click",function(){
		if (correctAnswer === "a3"){
			ClickedCorrect(this);	
		}
		else {
			NoOfIncAns++;
			DisplayCorrectAnswer(this);	
		}
		stopTimer();
	});

	$("#ans4").on("click",function(){
		if (correctAnswer === "a4"){
			ClickedCorrect(this);	
		}
		else {
			NoOfIncAns++;
			DisplayCorrectAnswer(this);
		}
		stopTimer();
	});

//  When clicked the correct answer
	ClickedCorrect = function(a){
		NoOfCorrAns++;	
		$("#congrats").text("Congratulations");
		$(a).attr("class","btn btn-success btn-lg qanda");
	};


//  Display the correct answer at the end
	DisplayCorrectAnswer = function(b){
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
		$(b).attr("class","btn btn-warning btn-lg qanda");	
	};


//  End of questions give no of correct answers
    TotalCorrect = function(){
   	  $(".jumbotron").fadeOut('slow'); 
   	  $("#congrats").html("<h1>Number of Correct Answers : " + NoOfCorrAns + "</h1>");
   	  $("#congrats").fadeIn('slow'); 
   	  $("#Incorrects").html("<h1>Number of Incorrect Answers : " + NoOfIncAns + "</h1>")
   	  $("#Incorrects").fadeIn('slow');   	  
      $("#startgame").fadeIn('slow');
      $("#FinalImge").fadeIn('slow');
    };

});