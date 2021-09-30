// var isTyping = true;
function onScroll() {
  var swapText = document.querySelector(".swap-text");
  // var isText = document.querySelector(".is");
  if (swapText === null) return;

  // if (window.screenY > isText.getBoundingClientRect().top) {
  // if (isTyping) {
  // isTyping = false;
  // typing();
  // }
  if (window.scrollY > 150) {
    (swapText as any).style.bottom = "100vh";
    (swapText as any).style.opacity = "0";
  } else if (window.scrollY < 150) {
    (swapText as any).style.bottom = "0";
    (swapText as any).style.opacity = "100%";
  }
}

document.addEventListener("scroll", onScroll);

// function typing() {
//   var isText = document.querySelector(".is");
//   if (isText === null) return;

//   var txt = "Are these reasons not enough to use sunglasses?";
//   var speed = 200;

//   console.log(isText.innerHTML.length, txt.length);
//   if (txt.length > isText.innerHTML.length - 1) {
//     isText.innerHTML += txt.charAt(isText.innerHTML.length);
//     setTimeout(typing, speed);
//   }
// }
