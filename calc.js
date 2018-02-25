// I click a number and then i click an operator and again i click a number, the calclation is then performed
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var content = document.querySelector("textarea");
var ac = document.querySelector("#allclear");
var clear = document.querySelector("#clear");
var num1, ops;
// for (var i = 0; i < number.length; i++) {
//  console.log(number[i].value);
// }

for(var i=0;i<number.length;i++){
  	number[i].addEventListener("click", function(){
  		var numr = this.value;
  		content.textContent = content.textContent + numr;
  		num1 = Number(content.textContent);
	})
}

for(var j=0;j<operator.length;j++){
	operator[j].addEventListener("click", function(){
		ops = this.value;
		content.textContent+=ops;
	})
}
ac.addEventListener("click", function(){
	content.textContent = "";
})

clear.addEventListener("click", function(){
	content.textContent = content.textContent.slice(0,-1);
})