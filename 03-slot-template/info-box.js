class InfoBox extends HTMLElement {
    constructor() {
        super();
        // console.log("InfoBox");
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        // console.log("Creando InfoBox");
        const titulo = this.getAttribute('titulo');
        this.shadowRoot.innerHTML = /*html*/`
                <style>
                .box {
                  border: 2px solid #f39c12;
                  background-color: #fff8e1;
                  padding: 16px;
                  border-radius: 8px;
                  margin: 10px 0;
                }
                .box h2 {
                  color: #00d331;
                  margin-top: 0;
                }
                </style>            
                <div class="box">
                  <h2>${titulo}</h2>
                  <slot></slot>
                </div>
        `
    }
}

customElements.define("info-box", InfoBox);