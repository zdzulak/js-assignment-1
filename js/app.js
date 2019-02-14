
// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('#dot6');
// Creating the arrays of words
var noun1 = ["The turkey ", "Mom ", "Dad ", "The dog ", "My teacher ", "The elephant ", "The cat "];
var verb = ["sat on ", "ate ", "danced with ", "saw ", "doesn't like ", "kissed "];
var adjective = ["a funny ", "a scary ", "a goofy ", "a slimy ", "a barking ", "a fat "];
var noun2 = ["goat ", "monkey ", "fish ", "cow ", "frog ", "bug ", "worm "];
var place = ["on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes."];
// Creating the buttons
var button1 = document.querySelector("#dot1");
var button2 = document.querySelector("#dot2");
var button3 = document.querySelector("#dot3");
var button4 = document.querySelector("#dot4");
var button5 = document.querySelector("#dot5");
var button7 = document.querySelector("#dot7");
// Creating a defult sentance??
var part1 = "";
var part2 = "";
var part3 = "";
var part4 = "";
var part5 = "";

var displayText = document.querySelector('h1');



/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// function to choose a random word in the array
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

function buttonOnePressed() {
	part1 = randomValueFromArray(noun1);
	changeText();
	speakNow(part1);
}

function buttonTwoPressed() {
	part2 = randomValueFromArray(verb);
	changeText();
	speakNow(part2);
}

function buttonThreePressed() {
	part3 = randomValueFromArray(adjective);
	changeText();
	speakNow(part3);
}

function buttonFourPressed() {
	part4 = randomValueFromArray(noun2);
	changeText();
	speakNow(part4);
}

function buttonFivePressed() {
	part5 = randomValueFromArray(place);
	changeText();
	speakNow(part5);
}

function changeText() {
	textToSpeak = part1 + part2 + part3 + part4 + part5;
	displayText.textContent = part1 + part2 + part3 + part4 + part5;
	displayText.style.color = "black";
}

function supriseMe() {
	part1 = randomValueFromArray(noun1);
	part2 = randomValueFromArray(verb);
	part3 = randomValueFromArray(adjective);
	part4 = randomValueFromArray(noun2);
	part5 = randomValueFromArray(place);
	changeText();
}

function output() {

}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

button1.addEventListener("click", buttonOnePressed);
button2.addEventListener("click", buttonTwoPressed);
button3.addEventListener("click", buttonThreePressed);
button4.addEventListener("click", buttonFourPressed);
button5.addEventListener("click", buttonFivePressed);
button7.addEventListener("click", supriseMe);

button6.addEventListener("click", speakNow(textToSpeak));
