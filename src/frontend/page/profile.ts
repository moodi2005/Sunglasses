import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/userData";

@customElement("s-profile")
export class Profile extends LitElement {
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
    return html` <s-user-profile></s-user-profile> `;
  }
}
