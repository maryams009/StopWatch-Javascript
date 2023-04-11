let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = false;

function startTime() {
	timer = true;
	runTime();
	document.querySelector(".fa-apple").classList.add("fa-spin");
}

function pausTime() {
	timer = false;
	printPausTime();
	document.querySelector(".fa-apple").classList.remove("fa-spin");
}

function resetTime() {
	timer = false;
	hours = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	document.querySelector("#milliseconds").innerHTML = "000";
	document.querySelector("#seconds").innerHTML = "00";
	document.querySelector("#minutes").innerHTML = "00";
	document.querySelector("#hours").innerHTML = "00";
	document.querySelector(".result").innerHTML = "";
}

function runTime() {
	if (timer) {
		milliseconds++;
	}

	if (milliseconds == 100) {
		seconds++;
		milliseconds = 0;
	}

	if (seconds == 60) {
		minutes++;
		seconds = 0;
	}

	if (minutes == 60) {
		hours++;
		minutes = 0;
	}

	document.querySelector("#milliseconds").innerHTML = twoDigits(milliseconds);
	document.querySelector("#seconds").innerHTML = twoDigits(seconds);
	document.querySelector("#minutes").innerHTML = twoDigits(minutes);
	document.querySelector("#hours").innerHTML = twoDigits(hours);

	setTimeout(runTime, 10); //metod för att räkna upp tid.
}

function twoDigits(number) {
	if (number < 10) {
		return "0" + number;
	} else {
		return number.toString();
	}
}

function printPausTime() {
	let str = "Laptime is: ";
	let timeStr = `${str} ${twoDigits(hours)} ${twoDigits(minutes)} ${twoDigits(
		seconds
	)} ${twoDigits(milliseconds)}`;
	let newTime = document.createElement("p");
	newTime.innerText = timeStr;
	document.querySelector(".result").appendChild(newTime);
}
