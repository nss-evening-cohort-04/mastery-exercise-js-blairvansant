// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// print out # of stars in each row - 1,3,5,7,9
// print out actual stars for each row, *, ***, *****
// deal with spaces
// add keypress event for enter
// add validation = 

var enterHeight = document.getElementById("height");
var enterChar = document.getElementById("char");
var execute = document.getElementById("subBut");
var clearbut = document.getElementById("clear");
 document.addEventListener("keypress", growTree);
execute.addEventListener("click", growTree);
clearBut.addEventListener("click", clear);


var treeGrower = {
	rows : "",
	character : ""
}

// function validate	
// 	   (treeGrower.rows === "") {
// 	   	alert("You must eneter a number");
// 	   } else if (treeGrower.character === ""){
// 	   	alert("You must enter a character");
// 	   } else  if growTree() {
// 	   	else validate()
// 	   }
	  
function growTree (){
	treeGrower.rows = enterHeight.value;
	treeGrower.character = enterChar.value;
	
	for (var i = 0; i < treeGrower.rows; i++) {
		
		var sums = i * 2 + 1;
		var lines = treeGrower.character.repeat(sums);
		var emptyMath = ((treeGrower.rows * 2 - 1) - sums)/2;
		var newLines = " ".repeat(emptyMath);
		console.log(newLines + lines) ;	
	}
}

function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   growTree();
 }
}	

function clear (){
 	 document.getElementById("height").value = "";
 	 document.getElementById("char").value = "";
}


 