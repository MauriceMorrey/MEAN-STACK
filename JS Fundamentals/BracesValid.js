function BracesValid(str){
	// Checking for (), [], and {}
	var openParen = 0, closeParen = 0, openBracket = 0, closeBracket = 0
	var openCurly = 0, closeCurly = 0, valid = false

	// FOR loop to test if parens is valid
	for (var i = 0; i < str.length; i++){

		// Fast fail scenarios
		// Scenario 1: str[0] == ")"
		if(str[0] == ")" || str[0] == "]" || str[0] == "}"){
			return valid
		}
		// Scenario 2: str[str.length - 1] == "("
		if(str[str.length - 1] == "(" || str[str.length - 1] == "[" || str[str.length - 1] == "{"){
			return valid
		}

		// Default test
		if(str[i] == "("){
			openParen += 1
		}
		else if(str[i] == ")"){
			closeParen += 1
		}
		else if(str[i] == "{"){
			openCurly += 1
		}
		else if(str[i] == "}"){
			closeCurly += 1
		}
		else if(str[i] == "["){
			openBracket += 1
		}
		else if(str[i] ==  "]"){
			closeBracket += 1
		}
		else{
			continue
		}
	}

	if((openParen === closeParen) && (openBracket == closeBracket) && (openCurly == closeCurly)){
		valid = true
	}

	return valid
}

var string = ")Hi[[]]you"

BracesValid(string)