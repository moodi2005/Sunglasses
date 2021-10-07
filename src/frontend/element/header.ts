import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("s-header")
export class Header extends LitElement {
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

      width: 100vw;
      z-index: 1;
      position: fixed;
    }

    header {
      backdrop-filter: blur(5px);
      background-color: var(--light-clor);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 2vh 2vw;
      color: var(--dark-color);
      box-shadow: 0 0 20px 0 var(--shadow-color);
    }

    header a .logo {
      cursor: pointer;
      width: 5vw;
    }

    header .links {
      display: flex;
      flex-direction: row;
    }

    header .links > * {
      border-radius: 2px;
      padding: 0.3vw;
      user-select: none;
      cursor: pointer;
      font-size: 1.8vw;
      list-style: none;
      margin: 0 1vw;
      transition: color 0.3s;
    }

    header .links .link:hover {
      color: var(--there-color);
    }
  `;

  render() {
    return html`
      <header>
        <a src="/"
          ><img
            src="/public/img/logo.svg"
            title="Sunglasses logo"
            class="logo"
            alt="sunglasses logo"
        /></a>

        <div class="links">
          <li class="link">API</li>
          <li class="link">Explore</li>
          <li class="link">Documention</li>
        </div>
      </header>
    `;
  }
}
