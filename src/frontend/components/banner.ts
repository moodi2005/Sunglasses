import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("s-banner")
export class Banner extends LitElement {
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

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      background: var(--light-clor);
      padding: 5vw;
    }

    .banner {
      height: 100%;
      padding: 2vw;
      color: var(--dark-color);
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .sunglasses {
      user-select: none;
      float: right;
      width: 40vw;
      transition: filter 0.5s;
    }

    .sunglasses:hover {
      filter: drop-shadow(20px 20px 0 var(--shadow-color));
    }

    .banner .slogan h1 {
      padding: 0 20px;
      font-weight: 700;
      color: var(--dark-color);
      font-size: 5vw;
    }

    .banner .slogan p {
      padding-left: 40px;
      padding-top: 10px;
      color: var(--there-color);
      font-size: 2vw;
      color: var(--there-color);
    }

    .swap {
      margin-bottom: 1vh;
      display: flex;
      justify-content: center;
      position: relative;
      transition: bottom 1s ease, opacity 0.5s;
    }

    .swap .text {
      user-select: none;
      font-size: 1vw;
      color: var(--dark-clor);
      padding: 3px;
    }
  `;

  render() {
    return html`
      <div class="banner">
        <div class="slogan">
          <h1>${this.heading}</h1>
          <p class="about">${this.innerHTML}</p>
        </div>
        <img
          src="/public/img/sunglasses.svg"
          title="be a professional with sun gelasses"
          class="sunglasses"
          alt="sunglasses"
        />
      </div>
      <div class="swap">
        <p class="text">Scroll down</p>
      </div>
    `;
  }
  @property({ type: String })
  heading!: string;
}
