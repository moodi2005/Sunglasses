import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-loading")
export class Loader extends LitElement {
  static styles = css`
    :host {
      --dark-color: #1f1e26;
    }

    .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }

    .loader img {
      height: 5vh;
      transition: opacity 1s cubic-bezier(1, 1.76, 0.18, -0.49);
    }
  `;

  render() {
    return html`
      <div class="loader">
        <img src="../public/img/logo.svg" />
      </div>
    `;
  }
}
