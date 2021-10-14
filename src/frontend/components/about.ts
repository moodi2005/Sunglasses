import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("s-about")
export class About extends LitElement {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .about {
      margin: 12vw 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .about .text {
      width: 100%;
    }

    .about .text h2 {
      color: var(--dark-color);
      font-weight: 900;
      font-size: 4vw;
    }

    .about .text p {
      color: var(--there-color);
      padding: 2vw;
      line-height: 5vh;
      font-size: 2vw;
    }

    .about .text.right {
      margin-left: 3vw;
      margin-right: 0;
    }

    .about .img {
      width: 60%;
      height: 70vh;
      border-radius: 10px;
      box-shadow: 0 0 30px 0 var(--shadow-color);
      overflow: hidden;
    }

    .about .img img {
      min-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.2s;
    }

    .about .img img:hover {
      filter: contrast(1.1);
    }
  `;

  @property()
  heading = "Title";

  @property()
  order = "";

  @property()
  src = "";

  render() {
    return html`
      <div class="about">
        <div class=${setClass(this.order)}>
          <h2>${this.heading}</h2>
          <p>${this.innerHTML}</p>
        </div>

        <div class="img" style="order: ${this.order};">
          <img src="${this.src}" alt="" />
        </div>
      </div>
    `;
  }
}

function setClass(order: string) {
  if (order === "-1") {
    return "text right";
  }
  return "text";
}
