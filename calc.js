// I click a number and then i click an operator and again i click a number, the calclation is then performed
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var content = document.querySelector("textarea");
var ac = document.querySelector("#allclear");
var clear = document.querySelector("#clear");
var totalString="", result;
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var multiply = document.getElementById("*");
var divide = document.getElementById("/");
var equal = document.querySelector("#equal");

for(var i=0; i<number.length; i++){
	number[i].addEventListener("click", function(){
		totalString += this.value;
		content.textContent = totalString; 
	});
}
for(var j=0; j<operator.length; j++){
	operator[j].addEventListener("click", function(){
		totalString+=this.value;
		content.textContent = totalString;
	})
}

ac.addEventListener("click", function(){
	content.textContent = "";
	totalString = "";
})

clear.addEventListener("click", function(){
	content.textContent = content.textContent.slice(0,-1);
})

equal.addEventListener("click", function(){
	result = eval(totalString);
	content.textContent = content.textContent + "\n" + result;
	totalString = "";
})