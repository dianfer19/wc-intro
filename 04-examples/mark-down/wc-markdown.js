const template = document.createElement('template');
import {marked} from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

template.innerHTML = /*html*/`
<link rel="stylesheet" href="./markdown.css">
<slot></slot>
  <div id="content">
  <span id="loader" class="loader"></span>
</div>
`

class WcMarkdown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Creando Markdown");
        const loader = this.shadowRoot.getElementById('loader');
        const md_src = this.getAttribute('md-file');
        fetch(md_src)
            .then(res => res.text())
            .then(md => {
                this.shadowRoot.getElementById('content').innerHTML = marked.parse(md);
            });
    }
}

customElements.define('wc-markdown', WcMarkdown);