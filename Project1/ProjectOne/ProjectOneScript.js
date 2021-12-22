//const stala
//let zmienna

const number_d = document.querySelector(".number");
const numbers = document.querySelector(".numbers");

function cloneNumbers() {
	let clone_n = number_d.cloneNode(true);
	numbers.appendChild(clone_n);
}

for (let i = 0; i <= 100; i++) {
	cloneNumbers();
}

for (let i = 0; i <= 100; i++) {
	numbers.children[i].innerHTML = i;
}

const rectangles = document.querySelector(".rectangle1");

function cloneRectangles() {
	let clone_r = rectangles.cloneNode(true);
	document.querySelector(".rectangles_middle").appendChild(clone_r);
}

for (let i = 0; i <= 7; i++) {
	cloneRectangles();
}

const squaresTop = document.querySelector(".square");
const squaresBot = document.querySelector(".square2");

function cloneSquares() {
	let clone_st = squaresTop.cloneNode(true);
	document.querySelector(".squares_top").appendChild(clone_st);
	let clone_sb = squaresBot.cloneNode(true);
	document.querySelector(".squares_bottom").appendChild(clone_sb);
}

for (let i = 0; i <= 7; i++) {
	cloneSquares();
}

var field1 = document.querySelector("body > div.rectangles_middle > div:nth-child(1) > div.numbers");
var field2 = document.querySelector("body > div.rectangles_middle > div:nth-child(2) > div.numbers");
var field3 = document.querySelector("body > div.rectangles_middle > div:nth-child(3) > div.numbers");
var field4 = document.querySelector("body > div.rectangles_middle > div:nth-child(4) > div.numbers");
var field5 = document.querySelector("body > div.rectangles_middle > div:nth-child(5) > div.numbers");
var field6 = document.querySelector("body > div.rectangles_middle > div:nth-child(6) > div.numbers");
var field7 = document.querySelector("body > div.rectangles_middle > div:nth-child(7) > div.numbers");
var field8 = document.querySelector("body > div.rectangles_middle > div:nth-child(8) > div.numbers");
var field9 = document.querySelector("body > div.rectangles_middle > div:nth-child(9) > div.numbers");
var squarefill1 = document.querySelector("body > div.squares_top > div:nth-child(1) > div > div");
var squarefill2 = document.querySelector("body > div.squares_top > div:nth-child(2) > div > div");
var squarefill3 = document.querySelector("body > div.squares_top > div:nth-child(3) > div > div");
var squarefill4 = document.querySelector("body > div.squares_top > div:nth-child(4) > div > div");
var squarefill5 = document.querySelector("body > div.squares_top > div:nth-child(5) > div > div");
var squarefill6 = document.querySelector("body > div.squares_top > div:nth-child(6) > div > div");
var squarefill7 = document.querySelector("body > div.squares_top > div:nth-child(7) > div > div");
var squarefill8 = document.querySelector("body > div.squares_top > div:nth-child(8) > div > div");
var squarefill9 = document.querySelector("body > div.squares_top > div:nth-child(9) > div > div");
var squarefill11 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div > div");
var squarefill12 = document.querySelector("body > div.squares_bottom > div:nth-child(2) > div > div");
var squarefill13 = document.querySelector("body > div.squares_bottom > div:nth-child(3) > div > div");
var squarefill14 = document.querySelector("body > div.squares_bottom > div:nth-child(4) > div > div");
var squarefill15 = document.querySelector("body > div.squares_bottom > div:nth-child(5) > div > div");
var squarefill16 = document.querySelector("body > div.squares_bottom > div:nth-child(6) > div > div");
var squarefill17 = document.querySelector("body > div.squares_bottom > div:nth-child(7) > div > div");
var squarefill18 = document.querySelector("body > div.squares_bottom > div:nth-child(8) > div > div");
var squarefill19 = document.querySelector("body > div.squares_bottom > div:nth-child(9) > div > div");
var rectangle1 = document.querySelector("body > div.rectangles_middle > div:nth-child(1)");
var rectangle2 = document.querySelector("body > div.rectangles_middle > div:nth-child(2)");
var rectangle3 = document.querySelector("body > div.rectangles_middle > div:nth-child(3)");
var rectangle4 = document.querySelector("body > div.rectangles_middle > div:nth-child(4)");
var rectangle5 = document.querySelector("body > div.rectangles_middle > div:nth-child(5)");
var rectangle6 = document.querySelector("body > div.rectangles_middle > div:nth-child(6)");
var rectangle7 = document.querySelector("body > div.rectangles_middle > div:nth-child(7)");
var rectangle8 = document.querySelector("body > div.rectangles_middle > div:nth-child(8)");
var rectangle9 = document.querySelector("body > div.rectangles_middle > div:nth-child(9)");
var square1 = document.querySelector("body > div.squares_top > div:nth-child(1)");
var square2 = document.querySelector("body > div.squares_top > div:nth-child(2)");
var square3 = document.querySelector("body > div.squares_top > div:nth-child(3)");
var square4 = document.querySelector("body > div.squares_top > div:nth-child(4)");
var square5 = document.querySelector("body > div.squares_top > div:nth-child(5)");
var square6 = document.querySelector("body > div.squares_top > div:nth-child(6)");
var square7 = document.querySelector("body > div.squares_top > div:nth-child(7)");
var square8 = document.querySelector("body > div.squares_top > div:nth-child(8)");
var square9 = document.querySelector("body > div.squares_top > div:nth-child(9)");
var middlesquare1 = document.querySelector("body > div.squares_top > div:nth-child(1) > div");
var middlesquare2 = document.querySelector("body > div.squares_top > div:nth-child(2) > div");
var middlesquare3 = document.querySelector("body > div.squares_top > div:nth-child(3) > div");
var middlesquare4 = document.querySelector("body > div.squares_top > div:nth-child(4) > div");
var middlesquare5 = document.querySelector("body > div.squares_top > div:nth-child(5) > div");
var middlesquare6 = document.querySelector("body > div.squares_top > div:nth-child(6) > div");
var middlesquare7 = document.querySelector("body > div.squares_top > div:nth-child(7) > div");
var middlesquare8 = document.querySelector("body > div.squares_top > div:nth-child(8) > div");
var middlesquare9 = document.querySelector("body > div.squares_top > div:nth-child(9) > div");
var square11 = document.querySelector("body > div.squares_bottom > div:nth-child(1)");
var square12 = document.querySelector("body > div.squares_bottom > div:nth-child(2)");
var square13 = document.querySelector("body > div.squares_bottom > div:nth-child(3)");
var square14 = document.querySelector("body > div.squares_bottom > div:nth-child(4)");
var square15 = document.querySelector("body > div.squares_bottom > div:nth-child(5)");
var square16 = document.querySelector("body > div.squares_bottom > div:nth-child(6)");
var square17 = document.querySelector("body > div.squares_bottom > div:nth-child(7)");
var square18 = document.querySelector("body > div.squares_bottom > div:nth-child(8)");
var square19 = document.querySelector("body > div.squares_bottom > div:nth-child(9)");
var middlesquare11 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare12 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare13 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare14 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare15 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare16 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare17 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare18 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");
var middlesquare19 = document.querySelector("body > div.squares_bottom > div:nth-child(1) > div");

field1.onscroll = () => {
	if (field1.scrollTop == 100) {
		squarefill1.style.background = "#00ed7e";
		squarefill11.style.background = "#00ed7e";
		rectangle1.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square1.style.transform = "rotate(315deg)";
		middlesquare1.style.transform = "rotate(315deg)";
		square11.style.transform = "rotate(315deg)";
		middlesquare11.style.transform = "rotate(315deg)";
	} else {
		squarefill1.style.background = "white";
		squarefill11.style.background = "white";
		rectangle1.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square1.style.transform = "";
		middlesquare1.style.transform = "";
		square11.style.transform = "";
		middlesquare11.style.transform = "";
	}
};

field2.onscroll = () => {
	if (field2.scrollTop == 200) {
		squarefill2.style.background = "#00ed7e";
		squarefill12.style.background = "#00ed7e";
		rectangle2.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square2.style.transform = "rotate(315deg)";
		middlesquare2.style.transform = "rotate(315deg)";
		square12.style.transform = "rotate(315deg)";
		middlesquare12.style.transform = "rotate(315deg)";
	} else {
		squarefill2.style.background = "white";
		squarefill12.style.background = "white";
		rectangle2.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square2.style.transform = "";
		middlesquare2.style.transform = "";
		square12.style.transform = "";
		middlesquare12.style.transform = "";
	}
};

field3.onscroll = () => {
	if (field3.scrollTop == 300) {
		squarefill3.style.background = "#00ed7e";
		squarefill13.style.background = "#00ed7e";
		rectangle3.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square3.style.transform = "rotate(315deg)";
		middlesquare3.style.transform = "rotate(315deg)";
		square13.style.transform = "rotate(315deg)";
		middlesquare13.style.transform = "rotate(315deg)";
	} else {
		squarefill3.style.background = "white";
		squarefill13.style.background = "white";
		rectangle3.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square3.style.transform = "";
		middlesquare3.style.transform = "";
		square13.style.transform = "";
		middlesquare13.style.transform = "";
	}
};

field4.onscroll = () => {
	if (field4.scrollTop == 400) {
		squarefill4.style.background = "#00ed7e";
		squarefill14.style.background = "#00ed7e";
		rectangle4.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square4.style.transform = "rotate(315deg)";
		middlesquare4.style.transform = "rotate(315deg)";
		square14.style.transform = "rotate(315deg)";
		middlesquare14.style.transform = "rotate(315deg)";
	} else {
		squarefill4.style.background = "white";
		squarefill14.style.background = "white";
		rectangle4.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square4.style.transform = "";
		middlesquare4.style.transform = "";
		square14.style.transform = "";
		middlesquare14.style.transform = "";
	}
};

field5.onscroll = () => {
	if (field5.scrollTop == 500) {
		squarefill5.style.background = "#00ed7e";
		squarefill15.style.background = "#00ed7e";
		rectangle5.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square5.style.transform = "rotate(315deg)";
		middlesquare5.style.transform = "rotate(315deg)";
		square15.style.transform = "rotate(315deg)";
		middlesquare15.style.transform = "rotate(315deg)";
	} else {
		squarefill5.style.background = "white";
		squarefill15.style.background = "white";
		rectangle5.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square5.style.transform = "";
		middlesquare5.style.transform = "";
		square15.style.transform = "";
		middlesquare15.style.transform = "";
	}
};

field6.onscroll = () => {
	if (field6.scrollTop == 600) {
		squarefill6.style.background = "#00ed7e";
		squarefill16.style.background = "#00ed7e";
		rectangle6.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square6.style.transform = "rotate(315deg)";
		middlesquare6.style.transform = "rotate(315deg)";
		square16.style.transform = "rotate(315deg)";
		middlesquare16.style.transform = "rotate(315deg)";
	} else {
		squarefill6.style.background = "white";
		squarefill16.style.background = "white";
		rectangle6.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square6.style.transform = "";
		middlesquare6.style.transform = "";
		square16.style.transform = "";
		middlesquare16.style.transform = "";
	}
};

field7.onscroll = () => {
	if (field7.scrollTop == 700) {
		squarefill7.style.background = "#00ed7e";
		squarefill17.style.background = "#00ed7e";
		rectangle7.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square7.style.transform = "rotate(315deg)";
		middlesquare7.style.transform = "rotate(315deg)";
		square17.style.transform = "rotate(315deg)";
		middlesquare17.style.transform = "rotate(315deg)";
	} else {
		squarefill7.style.background = "white";
		squarefill17.style.background = "white";
		rectangle7.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square7.style.transform = "";
		middlesquare7.style.transform = "";
		square17.style.transform = "";
		middlesquare17.style.transform = "";
	}
};

field8.onscroll = () => {
	if (field8.scrollTop == 800) {
		squarefill8.style.background = "#00ed7e";
		squarefill18.style.background = "#00ed7e";
		rectangle8.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square8.style.transform = "rotate(315deg)";
		middlesquare8.style.transform = "rotate(315deg)";
		square18.style.transform = "rotate(315deg)";
		middlesquare18.style.transform = "rotate(315deg)";
	} else {
		squarefill8.style.background = "white";
		squarefill18.style.background = "white";
		rectangle8.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square8.style.transform = "";
		middlesquare8.style.transform = "";
		square18.style.transform = "";
		middlesquare18.style.transform = "";
	}
};

field9.onscroll = () => {
	if (field9.scrollTop == 900) {
		squarefill9.style.background = "#00ed7e";
		squarefill19.style.background = "#00ed7e";
		rectangle9.style.boxShadow = "0px 0px 3px 2px rgb(0, 253, 135)";
		square9.style.transform = "rotate(315deg)";
		middlesquare9.style.transform = "rotate(315deg)";
		square19.style.transform = "rotate(315deg)";
		middlesquare19.style.transform = "rotate(315deg)";
	} else {
		squarefill9.style.background = "white";
		squarefill19.style.background = "white";
		rectangle9.style.boxShadow = "0px 0px 0px 0px rgb(225, 225, 225)";
		square9.style.transform = "";
		middlesquare9.style.transform = "";
		square19.style.transform = "";
		middlesquare19.style.transform = "";
	}
};
document.body.addEventListener("mousemove", () => {
	if (
		squarefill11.style.background == "rgb(0, 237, 126)" &&
		squarefill12.style.background == "rgb(0, 237, 126)" &&
		squarefill13.style.background == "rgb(0, 237, 126)" &&
		squarefill14.style.background == "rgb(0, 237, 126)" &&
		squarefill15.style.background == "rgb(0, 237, 126)" &&
		squarefill16.style.background == "rgb(0, 237, 126)" &&
		squarefill17.style.background == "rgb(0, 237, 126)" &&
		squarefill18.style.background == "rgb(0, 237, 126)" &&
		squarefill19.style.background == "rgb(0, 237, 126)"
	) {
		window.open("/ProjectOne/Main.html", "_self");
	}
});
