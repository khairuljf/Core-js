
var n= -12;

if(n>0){
	var result = "This number " + n+ " is positive";
}else{
	var result = "This number " + n + " is negative";
}

console.log(result);

var item = 13;

var result;

var remainder = item % 2;

if(0 == item){
	result ="This is neutral number";
}	

else if(0==remainder){
	result ="This Number is even";
}else{
	result = "This number is odd";
}

console.log(result);


var myage = 1;

var result;


if(myage<=1){
	result = "Baby";
}else if(myage<=3){
	result = "Toddler";
}else if(myage<=12){
	result = " Kid";
}else if(myage<18){
	result = "Teenager";
}else if(myage>=18){
	result = "Adult";
}

console.log("You are a", result );


//ternary

var result2;

remainder = item % 2;

result =  (0==remainder) ? "Even" : "odd";

result2 = (item<0) ? "This number is negative" : " positive";

console.log(result);
console.log(result2);



var i,j;

for(i=0, j=10; i<=10; i++, j--){
	console.log(i,j);
}





var series = "";

var n;

for(var i=0; i<10; i++){
	series = series + i*2 +" ";
}

console.log(series);


var series = "1 ";

var n=1;

for(var i=1; i<10; i++){ 
	n = n+3;
	series = series + n + " ";
}

console.log(series);

var series = ""

var n=0;


for(var i = 1; i<10; i++){
	n=(i*i)-1;
	series = series + n + " ";
}

console.log(series);


var series = "";

var n = 145;

for(var i=0; i<=n; i++ ){
	
	if(n%i==0){
		series = series  + i + " ";
	}	
}
console.log(series);



var monthname =  "Aprl";
var startday = 1;
var totalday = 31;


console.log("Name of the Month", monthname, 2018);
console.log("Sat     Sun     Mon    Tue    Wen    Thu    Fri");



var fruits = ["Banana","Apple", "Mango"];

console.log(fruits);



var flowers = ["Rose", "beli","Sapla"];

flowers[flowers.length]="Rajoni";

flowers.push("Lili");

flowers.unshift("khairul");
flowers.pop();

flowers.shift();

console.log(flowers);


var male=["khairul", "rubel", "rohima","josim"];
var female = ["tumpa", "diti", "irin"];


// var lastel =  male.pop();

// female.push(lastel);


var toshift = male[2];

//delete(male[2]);
female.push(toshift);

male.splice(2,1);



console.log(male);

console.log(male.length, female.length);
			
			//	-7		-6	-5		-4		-3		-2		-1
var list = ["Sun" , "mon", "Tue", "wen", "thus", "fri", "sat"];


var last_tree = list.slice(-5,-1);

console.log(list); 
console.log(last_tree); 

var firstarr = ["Sun" , "mon", "Tue"];
var secondarr = ["thus", "fri", "sat"];

var allarr = firstarr.concat(secondarr);


console.log(allarr);

// var length = list.length;

// for(var i=0; i<length; i++ ){
// 	console.log(list[i]);
// }



for(k in list){
	console.log(list[k]);
}


var myllist = [
	"Sun",
	"",
	"MON",
	NaN,
	'',
	null,
	'thu'

];

console.log(myllist);


var nelist = [];

for(j in myllist){

	if(myllist[j]){
		nelist.push(myllist[j]);
	}

}
console.log(nelist);

var a= 3, b=1;

// shap variable
[a,b] = [b, a];

console.log(a,b);


var arrshort = ['khairul', 'rubel', 'josim','rihan'];

 var narray = [66,99,33,22,114,44,77,52,31];

var nlength = narray.length;

// Number shorting 
// First way
for(var i=0; i<nlength; i++){

		for(var j=0; j<nlength; j++){
			if(narray[j]>narray[j+1]){
				console.log([narray[j], narray[j+1]] = [narray[j+1], narray[j]]);
			}
		}


}

console.log(narray);

//


// string to array 

var strng =  "Hello world! I am learning JavaScript";


var nstrng = strng.split(" ");

console.log(nstrng);

for (k in nstrng){
	console.log(nstrng[k]);
}

var orgnstrrng = nstrng.join(" /");

console.log(orgnstrrng);



var name = "Khairul islam";

var revname = name.split("").reverse().join("");

console.log(revname);

console.warn("Hello khairul!");
console.info("Hello khairul!");
console.error("Hello khairul!");



// number arry sorting
var numar = [10,35,40,105,30,88,];


function arrsort(x,y){
	return (x-y);
}

numar = numar.sort(arrsort);

console.log(numar);


var person ={

	firstName: "khairul ",
	lastName: "Islam",
	age:30,
	func:function(){
		return this.firstName + this.lastName;
	}

}

console.info(person.age);



// for, switch, onclick,
//onmouseover
//ondblclick
//onmouseup - after click
//onmousedown - instant when click
//Text from id - document.getElementById("khairul").innerText;


// prototype (We can use inheritence in both object)


var fn = a=> a+b;

console.log(fn(5,10)); 


//setTimeout(()=>console.log("Hellow"), 1000);


function func(){
	console.log(this);
}


function sumUp(...toAdd){
	console.log(toAdd);
	let result=0;

	for(k in toAdd){
		result += toAdd[k
		];
	}

	return result;
}


console.log(sumUp(10,20,40,60));




var k =(a) =>{

	return a.split("").reverse().join();

}


var kstri ="Hello world!";

console.log(k(kstri));

//setTimeout
//clearTimeout


// Count by js script 
var tcount = 5;
var  countStart = () =>{
	document.getElementById('show').innerHTML = tcount;
	tcount--;
	if(tcount>=0){
		couninit = setTimeout("countStart()",1000);
	}

}
var countStop = () =>{
	clearTimeout(couninit);
	document.getElementById('show').innerHTML = "Time Cleared";
}



//background change by js

var clrbtn =document.querySelector(".bgchange");
const bodys =document.querySelector('body');

var colors = ['red', 'blue', 'yellow', 'green', 'orange']

if(clrbtn){
	clrbtn.addEventListener('click', dsnone);
}

function dsnone(){
	let random = Math.floor(Math.random()*colors.length);
	// let color=null;
	// while(!color){
 // 	color = prompt("Enter a color")
	// }

	let rendomclr = Math.floor(Math.random()*colors.length);
	// bodys.style.backgroundColor =color;
	bodys.style.backgroundColor =colors[random];
}


const count_show = document.querySelector('.counter_show');
const minus_count = document.querySelector('.low_count');
const add_count = document.querySelector('.add_count');


add_count.addEventListener('click', add_count_fun);
minus_count.addEventListener('click', minus_count_fun);

var count_var=0;

function add_count_fun(){
	count_var = count_var+1;

	if(count_var==0){
		count_show.style.color='white';
	}
	else if(count_var>0){
		count_show.style.color='green';
	}

	count_show.innerHTML = count_var;

}

function minus_count_fun(){
	count_var = count_var-1;

	if(count_var==0){
		count_show.style.color='white';
		count_show.style.backgroundColor='orange';
	}
	else if(count_var<0){
		count_show.style.color='red';
	}
	count_show.innerHTML = count_var;

}








