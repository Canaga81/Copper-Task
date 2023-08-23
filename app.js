const xMarkButton = document.querySelector(".fa-xmark");
const barsButton = document.querySelector(".fa-bars");

const picture = document.querySelector(".picture");
const pictureActive = document.querySelector(".picture-active")

barsButton.addEventListener("click", () => {
    pictureActive.style.display = "block";
    picture.style.display = "none";
})

xMarkButton.addEventListener("click", () => {
    pictureActive.style.display = "none";
    picture.style.display = "block";
})