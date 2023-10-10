const mainnav = document.querySelector('.nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("nav");
    hambutton.classList.toggle("open");
});