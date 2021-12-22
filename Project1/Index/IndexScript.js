const containerborder = document.querySelector(".containerborder");
const card = document.querySelectorAll(".card");

//works for other iterable objects, including string
for (let v of card) {
	v.addEventListener("mouseover", changeStyleOver);
	v.addEventListener("mouseout", changeStyleOut);
}

function changeStyleOver() {
	containerborder.style.borderLeft = "1px solid rgb(155, 45, 189)";
}

function changeStyleOut() {
	containerborder.style.borderLeft = "1px solid rgb(255, 255, 255)";
}

card[0].addEventListener("click", () => {
	window.open("/ProjectOne/ProjectOne.html", "_self");
});

card[1].addEventListener("click", () => {
	window.open("/SkillGame/SkillGame.html", "_self");
});

card[2].addEventListener("click", () => {
	window.open("/ProjectThree/ProjectThree.html", "_self");
});

card[3].addEventListener("click", () => {
	window.open("/ToDo/ToDo.html", "_self");
});
