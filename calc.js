// I click a number and then i click an operator and again i click a number, the calclation is then performed
var number = document.querySelectorAll(".num");
var operator = document.querySelectorAll(".operator");
var content = document.querySelector("textarea");
// for (var i = 0; i < number.length; i++) {
//  console.log(number[i].value);
// }

for(var i=0;i<number.length;i++){
  	number[i].addEventListener("click", function(){
  		//console.log(this.value);
  		var numr = this.value;
  		content.textContent = content.textContent + numr;
	})
}