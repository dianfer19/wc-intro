class UserCard extends HTMLElement {
    constructor() {
        super();

        // 🛡 Encapsulamiento total con Shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name') || 'Sin nombre';
        const avatar = this.getAttribute('avatar') || '';

        this.shadowRoot.innerHTML = `
      <style>
        .card {
          font-family: sans-serif;
          border: 2px solid green;
          border-radius: 10px;
          padding: 16px;
          width: 250px;
          background-color: #e7f7e7;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }

        h2 {
          margin: 10px 0 0;
          color: green;
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }
      </style>

      <div class="card">
        <img src="${avatar}" alt="Avatar de ${name}" />
        <h2>${name}</h2>
      </div>
    `;
    }
}

customElements.define('user-card', UserCard);
