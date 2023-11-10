const baseURL = "https://dtrinhh.github.io/wdd230/";
const linksURL = "https://dtrinhh.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}
getlinks();
   
//     populatelesson(lessons);
//     populatelinks(lessons);
    
// function populatelesson(obj) {
//     const lessons = document.querySelector(".card1");
//     const myh3 = document.createElement("h3");
//     myh3.textContent = "Learning Activities";
    
// }

// function populatelinks(obj) {
//     const unorderedli = document.querySelector("ul");
//     const orderedli = document.createElement("li");
//     orderedli.textContent = obj.lesson;
//     unorderedli.appendChild(orderedli);
//     orderedli.textContent = obj.links;} 
// }