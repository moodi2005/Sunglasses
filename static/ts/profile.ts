import { LitElement, html } from "../../node_modules/lit";

class TodoView extends LitElement {
  render() {
    return html` <p>todo-view</p> `;
  }
}

customElements.define("todo-view", TodoView);
