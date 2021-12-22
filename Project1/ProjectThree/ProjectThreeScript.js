const correctans = document.querySelectorAll("#correct+label");
const correct = document.querySelectorAll("#correct");
const check = document.querySelector(".check");
const check2 = document.querySelector(".check2");
var scoreclass = document.querySelector(".score");
scoreclass.innerHTML = "Click Check";

function checkRadio() {
	let cc = correct;
	let score = 0;

	if (cc[0].checked) {
		score++;
	}

	if (cc[1].checked) {
		score++;
	}

	if (cc[2].checked) {
		score++;
	}

	if (cc[3].checked) {
		score++;
	}

	if (cc[4].checked) {
		score++;
	}

	if (cc[5].checked) {
		score++;
	}

	if (cc[6].checked && cc[7].checked) {
		score++;
	}

	if (cc[8].checked && cc[9].checked && cc[10].checked) {
		score++;
	}

	if (cc[11].checked && cc[12].checked) {
		score++;
	}

	if (cc[13].checked && cc[14].checked && cc[15].checked && cc[16].checked) {
		score++;
	}

	scoreclass.innerHTML = "Result: " + score;
}

check2.addEventListener("click", function () {
	correctans.forEach((item) => {
		item.style.color = "rgb(82,255,145)";
	});
});
