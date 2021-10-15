import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { setOutlet } from "./router/router";

import "./components/header";
import "./components/footer";
import "./components/loading";

@customElement("s-main")
export class Profile extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Ubuntu", sans-serif;
    }

    .page {
      display: none;
    }

    :host {
      max-height: 100vh;
    }

    s-footer {
      position: relative;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <s-loading></s-loading>
      <div class="page">
        <s-header></s-header>
        <div class="main"></div>
        <s-footer></s-footer>
      </div>
    `;
  }
  @query(".main") main!: HTMLElement;
  @query("s-loading") loader!: HTMLElement;
  @query(".page") page!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    window.onload = () => {
      console.log(this.page);
      this.loader.setAttribute("style", "display: none;");
      this.page.setAttribute("style", "display: block;");
      this.requestUpdate();
    };
  }

  firstUpdated() {
    setOutlet(this.main);
  }
}
