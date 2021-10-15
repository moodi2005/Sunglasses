import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import axios from "axios";
import "../components/loading";
import "../components/banner";
import "../components/about";
import "../script/loader";

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

    .about-container {
      margin: 40vh 0;
    }
  `;

  render() {
    if (this.about === undefined || this.slogan === undefined) {
      return html`<s-header></s-header>`;
    } else {
      return html`
        <s-banner heading="${this.slogan.heading}"
          >${this.slogan.text}</s-banner
        >
        <div class="about-container">
          <s-about
            heading="${this.about[0].heading}"
            src="/public/img/photo.jpg"
            >${this.about[0].text}</s-about
          >
          <s-about
            heading="${this.about[1].heading}"
            order="-1"
            src="/public/img/photo.jpg"
            >${this.about[1].text}</s-about
          >
          <s-about
            heading="${this.about[2].heading}"
            src="../public/img/photo.jpg"
            >${this.about[2].text}</s-about
          >
          <s-about
            heading="${this.about[3].heading}"
            order="-1"
            src="/public/img/photo.jpg"
            >${this.about[3].text}</s-about
          >
        </div>
      `;
    }
  }

  @property({ type: Array }) about!: Array<{ heading: string; text: string }>;
  @property({ type: Object }) slogan!: { heading: string; text: string };

  async loadText() {
    const json = await axios.get("http://localhost:8000/public/json/home.json");
    this.about = (<any>json).data.about;
    this.slogan = (<any>json).data.slogan;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadText();
    document.addEventListener("scroll", this.onScroll);
  }

  // hide swap location
  onScroll() {
    var swap: Element = document
      .querySelector("body > s-main")
      ?.shadowRoot?.querySelector("div > s-home")
      ?.shadowRoot?.querySelector("s-banner")
      ?.shadowRoot?.querySelector("div.swap")!;
    if (swap.getBoundingClientRect().top - 30 < window.scrollY) {
      swap.setAttribute("style", "bottom: 80vh; opacity: 0;");
    } else if (swap.getBoundingClientRect().top + 30 > window.scrollY) {
      swap.setAttribute("style", "bottom: 0; opacity: 100;");
    }
  }
}
