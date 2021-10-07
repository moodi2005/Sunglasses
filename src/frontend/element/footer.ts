import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-footer")
export class Footer extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      --dark-color: #1f1e26;
      --light-clor: #fefeff;
      --there-color: #4f5950;
      --shadow-color: rgba(0, 1, 26, 0.17);
    }

    footer {
      margin-top: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5vh 5vw;
      background-color: var(--dark-color);
      box-shadow: 0 0 20px 0 var(--shadow-color);
    }

    footer .link {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    footer .link a {
      padding: 5px;
      margin: 0 0.8vw;
      list-style: none;
      font-size: 1.5vw;
      color: var(--light-clor);
      text-decoration: none;
      transition: color 0.3s;
      user-select: none;
      cursor: pointer;
    }

    footer .link a:hover {
      color: var(--there-color);
    }

    footer p {
      font-size: 1.5vw;
      color: var(--light-clor);
    }
  `;

  render() {
    return html`
      <footer>
        <p>Copyright © 2021, All Right Reserved Sunglasses</p>
        <div class="link">
          <a href="/">Home</a>
          <a>Terms</a>
          <a>Privacy Policy</a>
          <a>Contact</a>
        </div>
      </footer>
    `;
  }
}
