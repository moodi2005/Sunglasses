function onScroll() {
  var swapText = document.querySelector(".swap-text");
  // var isText = document.querySelector(".is");
  // if (window.screenY > isText.getBoundingClientRect().top) {
  // typing();
  if (swapText === null) return;
  if (window.scrollY > 150) {
    (swapText as any).style.bottom = "100vh";
    (swapText as any).style.opacity = "0";
  } else if (window.scrollY < 150) {
    (swapText as any).style.bottom = "0";
    (swapText as any).style.opacity = "100%";
  }
}

document.addEventListener("scroll", onScroll);

// var isText = document.querySelector(".is");
// typing();
// function typing() {
//   if (isText === null) return;

//   var txt = "Are these reasons not enough to use sunglasses?";
//   var speed = 200;

//   console.log(isText.innerHTML.length, txt.length);
//   if (txt.length > isText.innerHTML.length - 1) {
//     isText.innerHTML += txt.charAt(isText.innerHTML.length);
//     setTimeout(typing, speed);
//   }
// }
