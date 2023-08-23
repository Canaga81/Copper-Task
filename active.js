const navbarContent = document.querySelector(".navbar-content");
const barsButton = document.querySelector(".fa-bars");

barsButton.addEventListener("click", () => {
    navbarContent.classList.toggle("active");
})