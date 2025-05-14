// Primero se debe escuchar el evento de carga completa de la pagina
document.addEventListener("DOMContentLoaded", () => {
    // Funcion open/close de menu hamburguesa
    document.getElementById('menuToggle').addEventListener('click', function () {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('hidden');
    });
});