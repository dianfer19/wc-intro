window.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("myModal");

// Mostrar el modal
    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

// Cerrar con la X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

// Cerrar si hacen clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});