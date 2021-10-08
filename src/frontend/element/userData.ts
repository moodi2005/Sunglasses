import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import axios from "axios";

interface UserData {
  username: string;
  email: string;
  twitter?: string;
  github?: string;
}

@customElement("s-user-profile")
export class UserProfile extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Ubuntu", sans-serif;
    }

    :host {
      --dark-color: #1f1e26;
      --light-clor: #fefeff;
      --there-color: #4f5950;
      --shadow-color: rgba(0, 1, 26, 0.17);

      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .username {
      font-size: 10vh;
      margin-bottom: 2vh;
      color: var(--there-color);
      font-weight: 700;
    }

    .id {
      font-size: 4vh;
      margin-bottom: 1vh;
      color: var(--dark-color);
      font-weight: 300;
    }

    .id a {
      font-weight: 400;
      text-decoration: none;
      color: var(--dark-color);
    }
  `;

  @property({ type: Object })
  data: UserData = { username: "", email: "" };

  connectedCallback() {
    super.connectedCallback();
    this.getProfile();
  }

  // get user data from api
  async getProfile() {
    const username = window.location.pathname.replace("/", "");
    const result = await axios.get(
      `http://localhost:8000/api/getProfile?username=${username}`
    );
    const data: UserData = (<any>result).data.result;
    this.data = data;
    this.requestUpdate();
  }

  render() {
    return html`
      <h1 class="username">${this.data.username}</h1>
      <p class="id">
        Email:
        <a target="_blank" href="mailto:${this.data.email}"
          >${this.data.email}</a
        >
      </p>

      <p class="id">
        Twitter:
        <a target="_blank" href="https://twitter.com/${this.data.twitter}"
          >${this.data.twitter}</a
        >
      </p>

      <p class="id">
        Github:
        <a target="_blank" href="https://github.com/${this.data.github}"
          >${this.data.github}</a
        >
      </p>
    `;
  }
}
