import { LitElement, html, property } from "lit-element"

class MyLeaf extends LitElement {
  @property({ type: String }) data

  render() {
    return html`<div>${this.data}<slot></slot></div>`
  }
}

customElements.define("my-leaf", MyLeaf)