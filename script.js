/*Create 2 JS objects w/ a constructor:*/
function Computer(RAM, CPU, RES){
	this.RAM = RAM,
	this.CPU = CPU,
	this.RES = RES,
	this.print = function(){
		return "This computer has " + RAM + "GB of RAM, a " + CPU + 
		"GHz CPU, and a resolution of " + RES + ".";
	}
}

var c1 = new Computer(8, 3.2, "1600x900");
var c2 = new Computer(16, 3.8, "1024x800");
console.log(c1.print());
console.log(c2.print());

/*Create a JS object with literal definition*/
var car = {
	miles:1000,
	make:"Ford",
	model:"Escape",
	printData: function(){
		return "This is a " + this.make + " " + this.model + " with " + this.miles + " miles on it.";
	}
}

console.log(car.printData());

$(document).ready(
	function(){
		alert("This page is ready!");
	}
);