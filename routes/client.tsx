
import { html, render as litRender } from "lit-html";

const css = String.raw;


class NoturnoWeb extends HTMLElement {
  static css = css`
    :host {
      display: block;
    }

    .bg-black {
      background-color: blue;
    }
  `

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }


  connectedCallback() {
    return litRender(html`
      <style>
        ${NoturnoWeb.css}
      </style>
      <div class="bg-black">
        <h1>Noturno Web</h1>
        <slot></slot>
      </div>
    `, this.shadowRoot!)
  }
}

if (!customElements.get("noturno-web")) {
  customElements.define("noturno-web", NoturnoWeb);
}
