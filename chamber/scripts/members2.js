const baseURL = "https://dtrinhh.github.io/wdd230/chamber";
const linksURL = "https://dtrinhh.github.io/wdd230/chamber/data/members2.json";

async function getmemberinfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
   
    createheadings(data);
    createbusinesscards(data);
}

function createheadings(obj) {
    const dirpage = document.querySelector(".memberinfo");
    const bucontainer = document.createElement("div");
    const buname1 = document.createElement("h1");
    const buname2 = document.createElement("h3");
    const buname3 = document.createElement("h3");
    const buname4 = document.createElement("h3");
    const buname5 = document.createElement("h3");
    const buname6 = document.createElement("h3");
    const buname7 = document.createElement("h3");

    bucontainer.classList.add('bucontainer');
    buname1.classList.add('buname1');
    buname2.classList.add('buname2');
    buname3.classList.add('buname3');
    buname4.classList.add('buname4');
    buname5.classList.add('buname5');
    buname6.classList.add('buname6');
    buname7.classList.add('buname7');

    buname1.textContent = obj.directory.organization[1];
    buname1.textContent = obj.dirheader;

    // orgheading.textContent = obj.orgheader;
    // levelheading.textContent = obj.levelheader;
    // categoryheading.textContent = obj.categoryheader;
    // contactheading.textContent = obj.contactheader;
    // locationheading.textContent = obj.locationheader;

    // dirpage.appendChild(buname1);    
    
    // dirpage.appendChild(orgheading);
    // dirpage.appendChild(levelheading);
    // dirpage.appendChild(categoryheading);
    // dirpage.appendChild(contactheading);
    // dirpage.appendChild(locationheading);
}