function loading() {
  if (document.readyState === "complete") {
    var checkExists = setInterval(() => {
      var loader = document.querySelector("s-loading");
      var page = document.querySelector("s-home");
      if (page === null || loader === null) return;
      loader?.setAttribute("style", "display:none");
      page?.setAttribute("style", "display:block");
      clearInterval(checkExists);
    }, 100);
  }
}

(function loadingEffect() {
  setInterval(() => {
    var s_loader = document.querySelector("body > s-loading");
    if (s_loader === null) return;
    var loader = s_loader.shadowRoot?.querySelector("div > img");

    const style = loader?.getAttribute("style");
    if (style === null || style === "opacity: 100%;") {
      loader?.setAttribute("style", "opacity: 30%;");
    } else {
      loader?.setAttribute("style", "opacity: 100%;");
    }
  }, 1300);
})();

document.addEventListener("readystatechange", loading);
