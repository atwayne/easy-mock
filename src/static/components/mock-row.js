"use strict";

const template = document.createElement("template");
template.innerHTML = `
    <tr class="mock-row">
        <td class="row-id"><slot name="rowId"></slot></td>
        <td class="method"><slot name="method"></slot></td>
        <td class="path"><slot name="path"></slot></td>
    </tr>
`;

class MockRow extends HTMLTableRowElement {
  constructor() {
    super();

    const rowId = this.getAttribute("id");
    const methodName = this.getAttribute("method");
    const path = this.getAttribute("path");

    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("mock-row", MockRow, { extends: "tr" });
