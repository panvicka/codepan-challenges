const text = document.querySelector(".text");

const textArray = text.innerText.split("");


let newTextContent = "";
textArray.map((letter) => {

	if (letter === "i" || letter === "j") {
		newTextContent =
			newTextContent +
			`<span class="letter-group"><span class="letter">${letter}</span><span class="point"></span></span>`;
	} else {
		newTextContent = newTextContent + letter;
	}

});
text.innerHTML = newTextContent;

const letterGroup = Array.from(document.querySelectorAll(".letter-group"));


letterGroup.map((group) => {
	const letter = group.querySelector(".letter");
	const point = group.querySelector(".point");

	group.addEventListener("mouseenter", (e) => {
		letter.classList.add("letter-animate");
		letter.addEventListener("animationend", () => {
			letter.classList.remove("letter-animate");
		});

		point.classList.add("point-animate");
		point.addEventListener("animationend", () => {
			point.classList.remove("point-animate");
		});
	});
});
