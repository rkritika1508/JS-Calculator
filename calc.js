// I click a number and then i click an operator and again i click a number, the calclation is then performed
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var content = document.querySelector("textarea");
var num1;
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
content.textContent = "";
console.log(num1);

for(var j=0;j<operator.length;j++){
	operator[j].addEventListener("click", function(){
		content.textContent = this.value;
	})
}
content.textContent = "";

