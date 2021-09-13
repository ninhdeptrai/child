document.onclick = (e) => {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
};

document.getElementById("bird-fly").onclick = (e) => {
  let audio = new Audio("./lib/images/M2/voices/bird.mp3");
  audio.play();
}

document.getElementById("dani").onclick = (e) => {
  let audio = new Audio("./lib/images/M2/voices/dani.mp3");
  audio.play();
}
document.getElementById("emma").onclick = (e) => {
  let audio = new Audio("./lib/images/M2/voices/emma.mp3");
  audio.play();
}
document.getElementById("julie").onclick = (e) => {
  let audio = new Audio("./lib/images/M2/voices/julie.mp3");
  audio.play();
}
document.getElementById("mike").onclick = (e) => {
  let audio = new Audio("./lib/images/M2/voices/mike.mp3");
  audio.play();
}
