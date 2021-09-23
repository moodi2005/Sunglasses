// add lodaing when loading data
// remove loader when data loaded
function loader() {
  if (document.readyState === "loading") {
    createLoader();
  } else if (document.readyState === "interactive") {
    createLoader();
    const page = document.querySelector(".page");
    (<any>page).style.display = "none";
    if (page === null) return;
  } else if (document.readyState === "complete") {
    const loader = document.querySelector(".loader");
    if (loader === null) return;
    (<any>loader).style.display = "none";
    const page = document.querySelector(".page");
    if (page === null) return;
    (<any>page).style.display = "block";
  }
}

// create loader
function createLoader() {
  const loaderDiv = document.createElement("div");
  const loader = document.createElement("img");
  const loadingText = document.createElement("p");
  loaderDiv.style.display = "flex";
  loaderDiv.style.justifyContent = "center";
  loaderDiv.style.alignItems = "center";
  loaderDiv.style.width = "100vw";
  loaderDiv.style.height = "100vh";
  loaderDiv.classList.add("loader");

  loadingText.innerHTML = "loading...";
  loadingText.style.fontSize = "5vh";
  loadingText.style.marginLeft = "2vw";

  loader.src = "/static/img/logo.svg";
  loader.style.transition = "all 2s";
  loader.style.height = "5vh";

  loaderDiv.appendChild(loader);
  loaderDiv.appendChild(loadingText);

  const body = document.querySelector("body");
  body?.insertBefore(loaderDiv, body.firstChild);
}

document.onreadystatechange = loader;
