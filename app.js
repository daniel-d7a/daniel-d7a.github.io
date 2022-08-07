document.addEventListener("keypress", function (event) {
  let key = event.code.slice(-1);
  let music = document.getElementById(key);

  if (!music) return;

  let div = music.closest(".btn");
  div.classList.add("playing");
  music.currentTime = 0;
  music.play();

  div.addEventListener("transitionend", function (e) {
    if (e.propertyName != "transform") return;
    div.classList.remove("playing");
  });
});

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("pointerdown", function (event) {
    let music = btn.querySelector("audio");
    btn.classList.add("playing");
    music.currentTime = 0;
    music.play();
  });
  btn.addEventListener("transitionend", function (e) {
    if (e.propertyName != "transform") return;
    btn.classList.remove("playing");
  });
})


