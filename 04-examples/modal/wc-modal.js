class WcModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        console.log(`Cosntructor ${this.id}`)
    }

    connectedCallback() {
        console.log("Creando Modal");
        const titulo = this.getAttribute('titulo');
        const mensaje = this.getAttribute('mensaje');
        this.shadowRoot.innerHTML =  /*html*/ `
             <style>
                /* Fondo oscuro semitransparente */
                .modal {
                    display: none;
                    position: fixed;
                    z-index: 999;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                
                /* Contenedor del modal */
                .modal-content {
                    background-color: white;
                    margin: 10% auto;
                    padding: 20px;
                    border-radius: 10px;
                    width: 80%;
                    max-width: 400px;
                    position: relative;
                    text-align: center;
                    animation: fadeIn 0.3s ease-in-out;
                }
                
                /* Botón de cerrar */
                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 16px;
                    font-size: 24px;
                    font-weight: bold;
                    color: #666;
                    cursor: pointer;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
             </style>
             
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close-button" id="closeModal">&times;</span>
                    <h2>${titulo}</h2>
                    <p>${mensaje}</p>
                </div>
            </div>
        `
        this.modal = this.shadowRoot.getElementById("myModal");
        this.closeModal = this.shadowRoot.getElementById("closeModal");
        this.closeModal.addEventListener("click", () => {
            this.modal.style.display = "none";
        });
        this.modal.addEventListener('click', (event) => {
            const fondo = this.shadowRoot.getElementById('myModal');

            // Si se hace clic en el fondo pero no dentro del contenido
            if (event.target === fondo) {
                this.close(); // Llama al método_ público close()
            }
        });
    }

    open() {
        console.log("Open Modal");
        this.modal.style.display = "block";
    }

    close() {
        console.log("Close Modal");
        this.modal.style.display = "none";
    }
}

window.customElements.define('wc-modal', WcModal);