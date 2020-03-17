// import { without } from "lodash";
// console.log(without);

var _ = require('lodash');
// console.log(_);

var array = [1,2,3,4,5,6,7];
// use without method in lodash:
console.log("the answer goes to: ", _.without(array, 3));
 
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var buttonLeft = document.querySelector(".buttonLeft");
var buttonRight = document.querySelector(".buttonRight");
var body = document.getElementById("bodyId");
var h3 = document.querySelector("h3");
var percent = 50; // percentage of the left color, default is 50.

// textContent seems better than innerText
h3.textContent = "linear-gradient(135deg, " + input1.value + " 50%, " + input2.value + ")";

function changeColor50(){
	body.style.background = "linear-gradient(135deg, " + input1.value + " 50%, " + input2.value + ")";
	h3.textContent = "linear-gradient(135deg, " + input1.value + " 50%, " + input2.value + ")";
}

// parameter presents the percentage of the left color
function changeColor(p){
	body.style.background = "linear-gradient(135deg, " + input1.value + " " + p +"%, " + input2.value + ")";
	h3.textContent = "linear-gradient(135deg, " + input1.value + " " + p +"%, " + input2.value + ")";
}

/* since that I'm using a callback function,
this would be a problem when passing a parameter
I think the function with parameter(p) has the priority.
so...diffrernt name for these two functions
*/

// listener to the input, if user input a color, then display it in the background
input1.addEventListener("input", changeColor50);

/* use closure:

function callback(p){
	return function(){
		body.style.background = "linear-gradient(135deg, " + input1.value + " 50%, " + input2.value + ")";
		h3.textContent = "linear-gradient(135deg, " + input1.value + " 50%, " + input2.value + ")";
	}
}

input1.addEventListener("input", callback(percent));
*/

input2.addEventListener("input", changeColor50);

// we can use addEventListener, or directly add an attribute in HTML <tag> "oninput"
// however, it against the separation policy,
// and also, it is limited because it can only have one oninput event.
// we also want the choosen color display on screen

// left button changes left color and it's percentage

buttonLeft.addEventListener("click",function(){
	var colorL = Math.floor(Math.random()*255); 
	percent =Math.floor(Math.random()*60)+20;  // set percentage between 20~80%
	if (colorL<16) { // default is #F7CAC9, only change the "B" part
		input1.value = "#F7CA0"+colorL.toString(16); // in case there is only one letter of color code
	}
	else{ 
		input1.value = "#F7CA"+colorL.toString(16);
	}
	changeColor(percent);
	// change the left color and percentage, and display in <h3>
})

// right button only changes right color

buttonRight.addEventListener("click",function(){
	var colorR = Math.floor(Math.random()*255); 
	if (colorR<16) {  // default is #92A8D1, only change the "R" part
		input2.value = "#0" + colorR.toString(16) + "A8D1"; // in case there is only one letter of color code
	}
	else{ 
		input2.value = "#" + colorR.toString(16) + "A8D1";
	}
	changeColor(percent);
})


/*
The specified value "rgb(34, 104, 206)" does not conform 
to the required format.  The format is "#rrggbb" 
where rr, gg, bb are two-digit hexadecimal numbers.
*/

/*
Take Away from this exercise:

1. chrome runs hex color code, not rgb code.
2. change a number to hexadecimal (16) string, use toString(16).
3. a input with type="color", gives you a palette to choose color.
4. CSS background: linear-gradient(to right, #F7CAC9, #92A8D1);
   https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
   this helps.
6. set height: 100vh to match the vertical attribut of bkg.
7. using letter spacing to beautify the context.
8. if you are using callback function, and you have two functions having the same name w/ and w/o parameter,
	then the one w/ parameter will be called.
9. the two colors on the page are colors of 2016 of pantone ：）		

*/






