

/***************************Constants********************************************/
const c2 = new Audio("keys/C2.mp3");
const cSharp2 = new Audio("keys/Csharp2.mp3");
const d2 = new Audio("keys/D2.mp3");
const dSharp2 = new Audio("keys/Dsharp2.mp3");
const e2 = new Audio("keys/E2.mp3");
const f2 = new Audio("keys/F2.mp3");
const fSharp2 = new Audio("keys/Fsharp2.mp3");
const g2 = new Audio("keys/G2.mp3");
const gSharp2 = new Audio("keys/Gsharp2.mp3");
const a2 = new Audio("keys/A2.mp3");
const b2 = new Audio("keys/B2.mp3");
const c3 = new Audio("keys/C3.mp3");
const cSharp3 = new Audio("keys/Csharp3.mp3");
const d3 = new Audio("keys/D3.mp3");
const dSharp3 = new Audio("keys/Dsharp2.mp3");
const e3 = new Audio("keys/E3.mp3");
const f3 = new Audio("keys/F3.mp3");
const fSharp3 = new Audio("keys/Fsharp2.mp3")
const g3 = new Audio("keys/G3.mp3");
const gSharp3 = new Audio("keys/Gsharp3.mp3")
const a3 = new Audio("keys/A3.mp3");
const b3 = new Audio("keys/B3.mp3");


/***************************************Click Functions******************************************/


const playSound = audio =>{
	const clone = audio.cloneNode();
	clone.play();
	setTimeout(() => (clone.volume = 0.8), 400);
	setTimeout(() => (clone.volume = 0.6), 800);
	setTimeout(() => (clone.volume = 0.4), 1200);
	setTimeout(() => (clone.volume = 0.2), 1600);
	setTimeout(() => (clone.volume = 0), 2000);
};

const c2Key = document.querySelector(".c2");
const playC2 = () => {
	playSound(c2);
	c2Key.classList.add("active");
	setTimeout(() => c2Key.classList.remove("active"),200);
};
c2Key.addEventListener("click", playC2);

const cSharp2Key = document.querySelector(".c-sharp2");
const playCsharp2 = () => {
	playSound(cSharp2);
	cSharp2Key.classList.add("active");
	setTimeout(() => cSharp2Key.classList.remove("active"),200);
};
cSharp2Key.addEventListener("click", playCsharp2);


const d2Key = document.querySelector(".d2");
const playD2 = () => {
	playSound(d2);
	d2Key.classList.add("active");
	setTimeout(() => d2Key.classList.remove("active"),200);
};
d2Key.addEventListener("click", playD2);

const dSharp2Key = document.querySelector(".d-sharp2");
const playDsharp2 = () => {
	playSound(dSharp2);
	dSharp2Key.classList.add("active");
	setTimeout(() => dSharp2Key.classList.remove("active"),200);
};
dSharp2Key.addEventListener("click", playDsharp2);


const e2Key = document.querySelector(".e2");
const playE2 = () => {
	playSound(e2);
	e2Key.classList.add("active");
	setTimeout(() => e2Key.classList.remove("active"),200);
};
e2Key.addEventListener("click", playE2);

const f2Key = document.querySelector(".f2");
const playF2 = () => {
	playSound(f2);
	f2Key.classList.add("active");
	setTimeout(() => c2Key.classList.remove("active"),200);
};
f2Key.addEventListener("click", playF2);

const fSharp2Key = document.querySelector(".f-sharp2");
const playFsharp2 = () => {
	playSound(fSharp2);
	fSharp2Key.classList.add("active");
	setTimeout(() => fSharp2Key.classList.remove("active"),200);
};
fSharp2Key.addEventListener("click", playFsharp2);

const g2Key = document.querySelector(".g2");
const playG2 = () => {
	playSound(g2);
	g2Key.classList.add("active");
	setTimeout(() => g2Key.classList.remove("active"),200);
};
g2Key.addEventListener("click", playG2);

const gSharp2Key = document.querySelector(".g-sharp2");
const playGsharp2 = () => {
	playSound(gSharp2);
	gSharp2Key.classList.add("active");
	setTimeout(() => gSharp2Key.classList.remove("active"),200);
};
gSharp2Key.addEventListener("click", playGsharp2);

const a2Key = document.querySelector(".a2");
const playA2 = () => {
	playSound(a2);
	a2Key.classList.add("active");
	setTimeout(() => a2Key.classList.remove("active"),200);
};
a2Key.addEventListener("click", playA2);


const b2Key = document.querySelector(".b2");
const playB2 = () => {
	playSound(b2);
	b2Key.classList.add("active");
	setTimeout(() => b2Key.classList.remove("active"),200);
};
b2Key.addEventListener("click", playB2);

const c3Key = document.querySelector(".c3");
const playC3 = () => {
	playSound(c3);
	c3Key.classList.add("active");
	setTimeout(() => c3Key.classList.remove("active"),200);
};
c3Key.addEventListener("click", playC3);

const cSharp3Key = document.querySelector(".c-sharp3");
const playCsharp3 = () => {
	playSound(cSharp3);
	cSharp3Key.classList.add("active");
	setTimeout(() => cSharp3Key.classList.remove("active"),200);
};
cSharp3Key.addEventListener("click", playCsharp3);

const d3Key = document.querySelector(".d3");
const playD3 = () => {
	playSound(d3);
	d3Key.classList.add("active");
	setTimeout(() => d3Key.classList.remove("active"),200);
};
d3Key.addEventListener("click", playD3);

const dSharp3Key = document.querySelector(".d-sharp3");
const playDsharp3 = () => {
	playSound(dSharp3);
	dSharp3Key.classList.add("active");
	setTimeout(() => dSharp3Key.classList.remove("active"),200);
};
dSharp3Key.addEventListener("click", playDsharp3);

const e3Key = document.querySelector(".e3");
const playE3 = () => {
	playSound(e3);
	e3Key.classList.add("active");
	setTimeout(() => e3Key.classList.remove("active"),200);
};
e3Key.addEventListener("click", playE3);

const f3Key = document.querySelector(".f3");
const playF3 = () => {
	playSound(f3);
	f3Key.classList.add("active");
	setTimeout(() => f3Key.classList.remove("active"),200);
};
f3Key.addEventListener("click", playF3);

const fSharp3Key = document.querySelector(".f-sharp3");
const playFsharp3 = () => {
	playSound(fSharp3);
	fSharp3Key.classList.add("active");
	setTimeout(() => fSharp3Key.classList.remove("active"),200);
};
fSharp3Key.addEventListener("click", playFsharp3);

const g3Key = document.querySelector(".g3");
const playG3 = () => {
	playSound(g3);
	g3Key.classList.add("active");
	setTimeout(() => g3Key.classList.remove("active"),200);
};
g3Key.addEventListener("click", playG3);

const gSharp3Key = document.querySelector(".g-sharp3");
const playGsharp3 = () => {
	playSound(gSharp3);
	gSharp3Key.classList.add("active");
	setTimeout(() => gSharp3Key.classList.remove("active"),200);
};
gSharp3Key.addEventListener("click", playGsharp3);

const a3Key = document.querySelector(".a3");
const playA3 = () => {
	playSound(a3);
	a3Key.classList.add("active");
	setTimeout(() => a3Key.classList.remove("active"),200);
};
a3Key.addEventListener("click", playA3);


const b3Key = document.querySelector(".b3");
const playB3 = () => {
	playSound(b3);
	b3Key.classList.add("active");
	setTimeout(() => b3Key.classList.remove("active"),200);
};
b3Key.addEventListener("click", playB3);


/*******************************Keyboard Functions***************************************/
window.addEventListener("keydown",({keyCode}) => {
	//Press Q
	if (keyCode === 81) return playC2(); 
	//Press 1
	if (keyCode === 49) return playCsharp2();
	//Press W
	if (keyCode === 87) return playD2();
	//Press 2
	if (keyCode === 50) return playDsharp2();
	//Press E
	if (keyCode === 69) return playE2();
	//Press R
	if (keyCode === 82) return playF2();
	//Press 3
	if (keyCode === 51) return playFsharp2();
	//Press T
	if (keyCode === 84) return playG2();
	//Press 4
	if (keyCode === 52) return playGsharp2();
	//Press Y
	if (keyCode === 89) return playA2();
	//Press U
	if (keyCode === 85) return playB2();
	//Press A
	if (keyCode === 65) return playC3();
	//Press 6
	if (keyCode === 54) return playCsharp3();
	//Press S
	if (keyCode === 83) return playD3();
	//Press 7
	if (keyCode === 55) return playDsharp3();
	//Press D
	if (keyCode === 68) return playE3();
	//Press F
	if (keyCode === 70) return playF3();
	//Press 8
	if (keyCode === 56) return playFsharp3();
	//Press G
	if (keyCode === 71) return playG3();
	//Press 9
	if (keyCode === 57) return playGsharp3();
	//Press H
	if (keyCode === 72) return playA3();
	//Press J
	if (keyCode === 74) return playB3();
});


