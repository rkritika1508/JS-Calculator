// I click a number and then i click an operator and again i click a number, the calclation is then performed
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var content = document.querySelector("textarea");
var ac = document.querySelector("#allclear");
var clear = document.querySelector("#clear");
var oppsign = document.querySelector("#oppsign");
var num1, ops, opsIndex,result;
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var multiply = document.getElementById("*");
var divide = document.getElementById("/");

for(var i=0;i<number.length;i++){
  	number[i].addEventListener("click", function(){
  		var numr = this.value;
  		content.textContent = content.textContent + numr;
  		num1 = Number(content.textContent.substr(0,opsIndex));
  		num2 = Number(content.textContent.substr(opsIndex+1));
	})
}

for(var j=0;j<operator.length;j++){
	operator[j].addEventListener("click", function(){
		ops = this.value;
		content.textContent+=ops;
		opsIndex = content.textContent.indexOf(ops);
	})
}

ac.addEventListener("click", function(){
	content.textContent = "";
	num1 = 0;
	num2 = 0;
	result = 0;
})

clear.addEventListener("click", function(){
	content.textContent = content.textContent.slice(0,-1);
})

function add(){
	plus.addEventListener("click", function(){
	result = num1+num2;
})
}



// minus.addEventListener("click", function(){
// 	result = num1-num2;
// })

// multiply.addEventListener("click", function(){
// 	result = num1*num2;
// })

// divide.addEventListener("click", function(){
// 	result = num1/num2 ;
// })