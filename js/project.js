
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

//Count script
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


// Slider script 


var sprev = document.querySelector('.sprev');
var snext = document.querySelector('.snext');
var sitem = document.querySelector('.slider-item');


var cslider = 0;

sprev.addEventListener('click',sprev_fc);

function sprev_fc(){
	 cslider++;

	 if(cslider>2){
	 	cslider=1;
	 }
	
	sitem.style.backgroundImage= `url(images/slider-${cslider}.jpg)`;
}


function autoSlider(){

		setTimeout(autoSlider,7000);
		snext_fc();

}

autoSlider();



snext.addEventListener('click',snext_fc);

function snext_fc(){
cslider--
if(cslider<1){
	cslider=2
}

	 sitem.style.background = `url(images/slider-${cslider}.jpg)`;

}


// Calculator

const allbtn = document.querySelectorAll('#calbtn .nbtn');
const cdisplay = document.querySelector('.display');
const getResult = document.querySelector('#getResult');
const dclear = document.querySelector('#clear');

for(let i=0; i<allbtn.length; i++){
	
	allbtn[i].addEventListener('click', function(){
		let result = allbtn[i].getAttribute('value');

			cdisplay.value += result;
	});

}

getResult.addEventListener('click', function(){

	if(cdisplay.value == ''){
		alert("Data empty");
	}else if(cdisplay.value == '+' || cdisplay.value == '-' || cdisplay.value == '*' || cdisplay.value == '/'){
			alert("Please enter any digitn then try Operateor");
			cdisplay.value ='';

	}else{

		let getans = eval(cdisplay.value);
		cdisplay.value = getans;
	}
	
})

dclear.addEventListener('click',function(){
	cdisplay.value ='';
});



//clock

function showTime(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds()

let formatHours = convertFormat(hours);

hours = checkTime(hours);
minutes = addzero(minutes);
second = addzero(second);
hours = addzero(hours);

document.getElementById('clock').innerHTML= `${hours} : ${minutes} : ${second} ${formatHours} `;

}


function convertFormat(time){
	let format = 'AM';
	if(time>=12){
	format = 'PM';
	}
	return format;
}


function checkTime(time){
	if(time>12){
		time = time -12;
	}

	if(time===0){
		time = 12;
	}

	return time;
}

function addzero(time){

	if(time<10){
		time = "0" + time;
	}

return time;
}


setInterval(showTime, 1000)
showTime();


// Navbar 

const navbarBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');



navbarBtn.addEventListener('click', function(){
	let value = navbarLinks.classList.contains('navbar_collapse');
	//let divHeight = navbarLinks.clientHeight;
	if(value){
		navbarLinks.classList.remove('navbar_collapse');
		navbarBtn.classList.remove('change');
	}
	else{
		navbarLinks.classList.add('navbar_collapse')
		navbarBtn.classList.add('change');
	}

});


console.log('Hello world k');





