const baseURL = "https://dtrinhh.github.io/wdd230/";
const linksURL = "https://dtrinhh.github.io/wdd230/data/links.json";

async function getlinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
   
    populatelesson(data);
    populatelinks(data);
}

function populatelesson() {
    const card1 = document.querySelector(".card1");
    const myh3 = document.createElement("h3");
    myh3.textContent = "Learning Activities";
    card1.appendChild(myh3);
}

function populatelinks(obj) {
    const card1 = document.querySelector(".card1");
    const lessons = obj.lessons;
    const unorderedli = document.createElement("ul");

    for (const lesson of lessons) {
        const orderedli = document.createElement("li");
        // const alinks = document.createElement("a");

        orderedli.textContent = `Week ${lesson.lesson}: `;

        const links = lesson.links;
        for (const link of links) {
            const alinks = document.createElement("a");
            alinks.textContent = `${link.title}`;
            alinks.href = link.url;
            orderedli.append(alinks);
            const space = " | ";
            orderedli.append(space);
        }

        card1.appendChild(unorderedli);
        unorderedli.appendChild(orderedli);
        
        

        // unorderedli.textContent = link.lesson;
        // activities.appendChild(unorderedli); 
        // unorderedli.textContent = link.title;
        // activities.appendChild(unorderedli); 
    }
}
    // activities.appendChild(unorderedli); 
    
    // orderedli.textContent = links.title;
    // unorderedli.appendChild(orderedli);

getlinks();