var swapText = document.querySelector(".swap");
function onScrollSwap() {
  if (swapText === null) return;
  if (window.scrollY > 100) {
    (swapText as any).style.opacity = "0%";
    (swapText as any).style.letterSpacing = "4em";
  } else if (window.scrollY < 100) {
    (swapText as any).style.opacity = "100%";
    (swapText as any).style.letterSpacing = "0";
  }
}
document.addEventListener("scroll", onScrollSwap);
