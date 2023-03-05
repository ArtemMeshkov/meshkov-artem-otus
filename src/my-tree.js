import { LitElement, html, css, property } from "lit-element"
import "./my-leaf.js"

class MyTree extends LitElement {
  @property({ type: Object }) data

  static get styles() {
    return css`
      div {
        padding: 10px;
        margin: 10px;
        border: 1px solid #aaa;
      }
    `
  }

  render() {
    return html`<div id="my-tree">
      <my-leaf data="${this.data.id}">
        ${this.data?.items?.map(
          (item) => html`<my-tree data="${JSON.stringify(item)}"></my-tree>`
        )}
      </my-leaf>
    </div>`
  }
}

customElements.define("my-tree", MyTree)
