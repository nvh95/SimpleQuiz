function submitAnswers() {
	var total = 5;
	var score = 0;

	// Get User input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	// Validation
	for(var i=1; i <= total; i++) {
		if (eval('q'+i) == null || eval('q'+i) == '') {
			alert("You missed question "+i);
			return false;
		}
	}

	// Set Correct Answer
	var answers = ['b', 'b', 'c', 'd','b'];
	
	// Check Answers
	for (i=1; i <=total; i++)
	{
		if (eval('q'+i) == answers[i-1])
			score++;
	}

	alert("You score " + score +" out of " +total);
}