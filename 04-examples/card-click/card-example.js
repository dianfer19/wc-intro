class CardExample extends HTMLElement {
    constructor() {
        super();
        console.log("Card");
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        console.log("Creando Card");
        const name = this.getAttribute('name');
        const position = this.getAttribute('position');
        this.shadowRoot.innerHTML /*html*/ = ` 
          <link rel="stylesheet" href="card.css">
         <div class="card">
            <img src="https://i.pravatar.cc/150?imag=2" alt="John">
            <div class="content">
              <h1>${name}</h1>
              <p>${position}</p>
              <button id="boton">Clik on me </button>
            </div>
          </div>
            <wc-modal id="modal" titulo="Empleado 😎" mensaje="Empleado ${name}"></wc-modal>
            `
        this.shadowRoot.querySelector("#boton").addEventListener("click", () => {
            const modal = this.shadowRoot.querySelector("#modal");
            modal.open();
        });
    }

    disconnectedCallback() {
        console.log("Eliminado Card");
    };
}

customElements.define("card-example", CardExample);