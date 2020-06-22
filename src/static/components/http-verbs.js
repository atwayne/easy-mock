"use strict";

const template = document.createElement("template");
template.innerHTML = `
    <input type="text" list="httpmethods" class="http-verb-selector pure-input-1-2" placeholder="Type or Select" value="GET">
    <datalist id="httpmethods">
      <option value="GET"></option>
      <option value="POST"></option>
      <option value="DELETE"></option>
      <option value="PUT"></option>
    </datalist>
`;

class HttpVerbs extends HTMLElement {
  constructor() {
    super();

    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("http-verb-selector", HttpVerbs);
