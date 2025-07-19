const template = document.createElement('template');
template.innerHTML = /*html*/`
<link rel="stylesheet" href="table.css">
<table id="tabla">
<thead>
<tr id="table-header"></tr>
</thead>
<tbody id="table-body"></tbody>
</table>
`

class WCTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    set data(value) {
        const header = this.shadowRoot.getElementById('table-header');
        const body = this.shadowRoot.getElementById('table-body');
        if (value.length === 0) {
            body.innerHTML = '';
            return;
        }
        header.innerHTML = '';
        body.innerHTML = '';
        const headers = Object.keys(value[0]);
        // console.log(headers)
        headers.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column.toUpperCase();
            header.appendChild(th);
        });
        value.forEach(row => {
            const tr = document.createElement('tr');
            headers.forEach(column => {
                const td = document.createElement('td');
                td.textContent = row[column];
                tr.appendChild(td);
            });
            body.appendChild(tr);
        });

    }

    connectedCallback() {
        this.shadowRoot.querySelector('#tabla').addEventListener('click', (e) => {
            console.log("click en tabla")
        });
    }
}

customElements.define('wc-table', WCTable);