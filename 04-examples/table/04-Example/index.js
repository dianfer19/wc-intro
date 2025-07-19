const cargarUsuarios = async (n = 20) => {
    const response = await fetch(`https://randomuser.me/api/?results=${n}&?gender=male`);
    const json = await response.json()
    console.log("datos 🎇", json)
    return json.results.map(user => ({
        nombre: user.name.first,
        edad: user.dob.age,
        email: user.email,
        city: user.location.city,
        id: user.login.uuid,
    }));
}
window.addEventListener('DOMContentLoaded', async () => {
    let data = await cargarUsuarios();
    let data_anterior = data
    document.querySelector('#table').data = data;
    document.querySelector('#selector').addEventListener('cambio-cantidad', async (e) => {
        console.log("cambio de cantidad...", e.detail.cantidad);
        data = await cargarUsuarios(e.detail.cantidad);
        document.querySelector('#table').data = data;
        data_anterior = data;
    })
    const inputBuscar = document.querySelector('#busqueda');
    inputBuscar.addEventListener('input', (e) => {
        const query = inputBuscar.value.trim().toLowerCase();
        if (query.length >= 3) {
            const filtrado = data_anterior.filter(user => user.nombre.toLowerCase().includes(query));
            console.log("🔎 data filtrada", filtrado)
            document.querySelector('#table').data = filtrado;
        } else {
            document.querySelector('#table').data = data;
        }
    })
})