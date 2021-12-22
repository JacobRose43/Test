/*
Witam, Prawdopodobnie zrobiłem to troche (mozliwe ze bardzo) inaczej niz bylo w zalozeniach,
za co z gory przepraszam, zle odczytalem polecenie...
*/
const random1 = document.querySelector(".random1");
const score = document.querySelector(".score");
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const r1style = random1.style;
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");

let a = width - 80;
let b = height - 300;
let sh = 0;

function Wheel() {
	r1style.margin = "0 0 0 0 ";
	r1style.position = "absolute";
	r1style.width = "40px";
	r1style.height = "40px";
	r1style.background = "rgb(227, 159, 123)";
	r1style.borderRadius = "50px";
	r1style.top = Math.floor(Math.random() * (Math.floor(b) - Math.ceil(50) + 1)) + Math.ceil(50) + "px";
	r1style.left = Math.floor(Math.random() * (Math.floor(a) - Math.ceil(1) + 1)) + Math.ceil(1) + "px";
	if (sh == 1) {
		points++;
		sh = 0;
	}
}

let Interval;
let IntervalTimer;

var seconds = 00;
var tens = 00;

function Start() {
	document.querySelector(".message").style.display = "none";
	if (!Interval) {
		points = 1;
		score.innerHTML = "0";
		Interval = setInterval(Wheel, 1000);
	}
	if (!IntervalTimer) {
		seconds = 00;
		tens = 00;
		appendSeconds.innerHTML = "00";
		appendTens.innerHTML = "00";
		IntervalTimer = setInterval(Timer, 10);
	}
}

function Reset() {
	document.querySelector(".message").style.display = "";
	clearInterval(Interval);
	Interval = null;
	clearInterval(IntervalTimer);
	IntervalTimer = null;
	random1.style.width = "0px";
	random1.style.height = "0px";
}

let points = 1;

function Score() {
	sh = 1;
	score.innerHTML = points;
}

random1.addEventListener("click", Score);

function Timer() {
	tens++;

	if (tens <= 9) {
		appendTens.innerHTML = "0" + tens;
	}

	if (tens > 9) {
		appendTens.innerHTML = tens;
	}

	if (tens > 99) {
		console.log("seconds");
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}

	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}
}
