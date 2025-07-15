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
          <style>
                .card {
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 300px;
                    text-align: center;
                    transition: transform 0.3s ease;
                    
                }
        
                .card:hover {
                    transform: scale(1.03);
                }
        
                .card img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px 8px 0 0; /* Bordes redondeados en la parte superior */
                }
        
                .card .content {
                    padding: 16px;
                }
        
                h1 {
                    background: #4b0a0e;
                    margin-top: 0;
                    margin-bottom: 8px;
                    font-size: 20px;
                    color: white;
                }
        
                .card p {
                    font-size: 16px;
                    color: #666;
                }
            </style>
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