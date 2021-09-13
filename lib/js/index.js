document.onclick = (e) => {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
};


// let audio = new Audio("./lib/images/M1/audio_cheers.mp3");
//   audio.play().loop();
// document.getElementById("screen-1").onload = function() {
//   auto_play()
// };

// function auto_play() {
//   let audio = new Audio("./lib/images/M1/funny-sound-background.mp3");
//   audio.play();
// }

document.getElementById("audio-cheers").onclick = (e) => {
  let audio = new Audio("./lib/images/M1/audio_cheers.mp3");
  audio.play();

  let back = document.getElementById('back');
  back.classList.add('animation-to-left');

  let to = document.getElementById('to');
  to.classList.add('animation-to-right');

  let school = document.getElementById('school');
  school.classList.add('animation-bottom-to-right');

  setTimeout(() => { 
    // back.classList.remove('animation-to-left');
    // to.classList.remove('animation-to-right');
    // school.classList.remove('animation-bottom-to-right');
    location.href = 'screen_2.html';
  }, 5000);
};