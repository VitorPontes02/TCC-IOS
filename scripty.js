// Botão do navbar
const container = document.querySelector(".caixa-container");
const navmenu = document.querySelector(".Nav-Menu");

container.addEventListener("click", () => {
    container.classList.toggle("active");
    navmenu.classList.toggle("active");
})
