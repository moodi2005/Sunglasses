import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./element/header";
import "./element/loading";
import "./element/banner";
import "./element/footer";
import "./element/about";
import "./script/loader";

@customElement("s-home")
export class Home extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Ubuntu", sans-serif;
    }
  `;
  render() {
    return html`
      <s-header></s-header>
      <s-banner></s-banner>
      <s-about
        heading="Create a CV for your future"
        src="../public/img/photo.jpg"
        >Writing a CV is a tedious chore. Boring, confusing, time-consuming.
        With the Zety CV maker, you’ll create a document that shows you at your
        best—fast. Get the job you want, not whatever’s on offer:</s-about
      >
      <s-about
        heading="Golden opportunities"
        order="-1"
        src="../public/img/photo.jpg"
        >Don’t let opportunities pass you by. You’ll be skeptical at first. Just
        like millions of users who landed their dream jobs with help from our CV
        editor.</s-about
      >
      <s-about heading="Be professional" src="../public/img/photo.jpg"
        >See for yourself. Choose between 20+ professional CV templates, fill in
        the blanks, and have the CV wizard help you from start to finish.
      </s-about>
      <s-about
        heading="Less than drinking a cup of coffee"
        order="-1"
        src="../public/img/photo.jpg"
      >
        FAST You’ll make a CV in minutes. You should be out there building a
        career, not fixing the margin size on your CV. Zety’s CV helper gives
        you the format right, modern designs, and fills in tried and tested
        information. Upload your old CV and give it a makeover. Or create a new
        one. Either way, you’ll save time.</s-about
      >
      <s-footer></s-footer>
    `;
  }
}

// hide swap location
function onScroll() {
  var swap: Element = document
    .querySelector("s-home")
    ?.shadowRoot?.querySelector("s-banner")
    ?.shadowRoot?.querySelector(".swap")!;
  if (swap.getBoundingClientRect().top - 30 < window.scrollY) {
    swap.setAttribute("style", "bottom: 80vh; opacity: 0;");
  } else if (swap.getBoundingClientRect().top + 30 > window.scrollY) {
    swap.setAttribute("style", "bottom: 0; opacity: 100;");
  }
}
document.addEventListener("scroll", onScroll);
