// Function to generate random integers from 0 to 255 for rgb values
function getRandomInt(){
	min = 0;
	max = 256;
	return Math.floor(Math.random() * (max-min)) + min;
}

//Function to Generate a random int from 0 to 6
function getRandomN(){
	min = 0;
	max = 6;
	return Math.floor(Math.random() * (max-min)) + min;
}

// Color Object - To hold three color values if r,g,b and also to set rgb() string for background color style.
function Color(a, b, c){
	this.r = a;
	this.b = b;
	this.g = c;

	this.setColor = function(){
		var rgb = "rgb(" + this.r + "," + this.b + "," + this.g + ")";
		return rgb;
	};
}

//Creates an array which creates 6 instances of color object - 1 for each color box.
function generateColor(){
	var colorArray = [];

	for(var i=0; i<6; i++){
		var r = getRandomInt();
		var g = getRandomInt();
		var b = getRandomInt();

		colorArray[i] = new Color(r, g, b);
	}
	return colorArray;
}

var newColors = generateColor(); // Generating new random colors
var box = document.getElementsByClassName("boxes");

// Assigning random colors to the color boxes
for(var i=0; i<6; i++){
	box[i].style.backgroundColor = newColors[i].setColor();
}

//Setting one of those random colors as out choice for the color to be guessed
var x = getRandomN();
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");

r.textContent = newColors[x].r;
g.textContent = newColors[x].g;
b.textContent = newColors[x].b;


//6 click event listeners, 1 for each color box. Removes the color box if wrong choice, otherwise show message correct color chosen.
box[0].addEventListener("click", function(){
	if((r.textContent == newColors[0].r) && (g.textContent == newColors[0].g) && (b.textContent == newColors[0].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
}) 

box[1].addEventListener("click", function(){
	if((r.textContent == newColors[1].r) && (g.textContent == newColors[1].g) && (b.textContent == newColors[1].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
})

box[2].addEventListener("click", function(){
	if((r.textContent == newColors[2].r) && (g.textContent == newColors[2].g) && (b.textContent == newColors[2].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
})

box[3].addEventListener("click", function(){
	if((r.textContent == newColors[3].r) && (g.textContent == newColors[3].g) && (b.textContent == newColors[3].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
})

box[4].addEventListener("click", function(){
	if((r.textContent == newColors[4].r) && (g.textContent == newColors[4].g) && (b.textContent == newColors[4].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
})

box[5].addEventListener("click", function(){
	if((r.textContent == newColors[5].r) && (g.textContent == newColors[5].g) && (b.textContent == newColors[5].b)){
		alert("Congrats, you chose the correct color");
		setInterval(window.location.reload(), 2000);
	}
	else{
		var d = document.getElementById("boxes");
		this.style.backgroundColor = "#232323";
		alert("Wrong Choice. Please choose again.");
	}
})

//Reset button coding
var new_start = document.getElementById("new");

new_start.addEventListener("click", function(){
	window.location.reload();
})