/** @customElement user-card-no-shadow */
class UserCardNoShadow extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || 'Sin nombre';
        const avatar = this.getAttribute('avatar') || '';

        // 🔴 Sin shadowRoot, va directo al DOM global
        this.innerHTML = `
      <style>
        .card {
          font-family: sans-serif;
          border: 2px dashed red;
          padding: 16px;
          margin: 10px 0;
          background-color: #ffeeee;
        }

        h2 {
          color: red;
        }
      </style>

      <div class="card">
        <h2>${name}</h2>
        <img src="${avatar}" width="80" height="80" style="border-radius: 50%" alt="imagen"/>
      </div>
    `;
    }
}

customElements.define('user-card-no-shadow', UserCardNoShadow);
