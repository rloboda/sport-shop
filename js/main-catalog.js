const woomanContainer = document.querySelector(".catalog__content__items-woman");
const manContainer = document.querySelector(".catalog__content__items-man");
const shoesContainer = document.querySelector(".catalog__content__items-shoes");


const catalogWoman = document.querySelector(".catalog__content__link-women");
const catalogMan = document.querySelector(".catalog__content__link-man");
const catalogShoes = document.querySelector(".catalog__content__link-shoes");
 
woomanContainer.classList.toggle("visible");

function remove_catalogs(){
    woomanContainer.classList.remove("visible");
    manContainer.classList.remove("visible");
    shoesContainer.classList.remove("visible");
}

catalogWoman.addEventListener("click", () => {
    remove_catalogs()
    woomanContainer.classList.toggle("visible");
})
catalogMan.addEventListener("click", () => {
    remove_catalogs()
    manContainer.classList.toggle("visible");
})
catalogShoes.addEventListener("click", () => {
    remove_catalogs()
    shoesContainer.classList.toggle("visible");
})

