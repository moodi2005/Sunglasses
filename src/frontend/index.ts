import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { setOutlet } from "./router/router";

import "./components/header";
import "./components/footer";

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
      <s-header></s-header>
      <div class="main"></div>
      <s-footer></s-footer>
    `;
  }

  @query(".main") main!: HTMLElement;
  firstUpdated() {
    setOutlet(this.main);
  }
}
