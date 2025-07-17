class WcSelectorPages extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="./selector.css">
        <div class="select-container">
          <label for="cantidad" class="select-label">Cantidad de páginas</label>
          <select id="cantidad" class="custom-select">
            <option value="5">5</option>
            <option value="10" >10</option>
            <option value="20" selected>20</option>
          </select>
        </div>
        `
    }

    connectedCallback() {
        console.log("Connected");
        this.shadowRoot.querySelector('#cantidad').addEventListener('change', (e) => {
            const cantidad = e.target.value;
            this.dispatchEvent(new CustomEvent('cambio-cantidad', {
                detail: {cantidad},
                bubbles: true,
                composed: true,
            }));
        })
    }
}

customElements.define('wc-selector-pages', WcSelectorPages);