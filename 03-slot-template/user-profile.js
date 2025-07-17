class UserProfile extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = /*html*/`
        <link rel="stylesheet" href="./user-profile.css">
        <div class="profile">
            <h3 id="nombre"></h3>
            <img src="" id="avatar" alt="user-image">
            <slot name="cargo"></slot>
            <slot name="alias"></slot>       
        </div>
        `
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        console.log("Connected");
        // setTimeout(() => {
        this.shadowRoot.getElementById('avatar').src = this.getAttribute('avatar');
        this.shadowRoot.getElementById('nombre').textContent = this.getAttribute('nombre');
        // }, 6000)
    }
}

customElements.define('user-profile', UserProfile);