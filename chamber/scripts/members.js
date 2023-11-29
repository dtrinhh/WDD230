const baseURL = "https://dtrinhh.github.io/wdd230/chamber";
const linksURL = "https://dtrinhh.github.io/wdd230/chamber/data/members.json";

async function getmemberinfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
   
    createheadings(data);
    createbusinesscards(data);
}

function createheadings(obj) {
    const dirpage = document.querySelector(".memberinfo");
    const mainheading = document.createElement("h1");
    const orgheading = document.createElement("h3");
    const levelheading = document.createElement("h3");
    const categoryheading = document.createElement("h3");
    const contactheading = document.createElement("h3");
    const locationheading = document.createElement("h3");
    const orgdiv = document.createElement("div");
    const leveldiv = document.createElement("div");
    const categorydiv = document.createElement("div");
    const contactdiv = document.createElement("div");
    const locationdiv = document.createElement("div");
    
    orgheading.classList.add('orgheading');
    levelheading.classList.add('levelheading');
    categoryheading.classList.add('categoryheading');
    contactheading.classList.add('contactheading');
    locationheading.classList.add('locationheading');
    orgdiv.classList.add('orgdiv');
    leveldiv.classList.add('leveldiv');
    categorydiv.classList.add('categorydiv');
    contactdiv.classList.add('contactdiv');
    locationdiv.classList.add('locationdiv');

    mainheading.textContent = obj.dirheader;

    orgheading.textContent = obj.orgheader;
    levelheading.textContent = obj.levelheader;
    categoryheading.textContent = obj.categoryheader;
    contactheading.textContent = obj.contactheader;
    locationheading.textContent = obj.locationheader;

    dirpage.appendChild(mainheading);    
    
    dirpage.appendChild(orgheading);
    dirpage.appendChild(levelheading);
    dirpage.appendChild(categoryheading);
    dirpage.appendChild(contactheading);
    dirpage.appendChild(locationheading);
    
}
// getmemberinfo();

function createbusinesscards(obj) {
    const dirpage = document.querySelector(".memberinfo")
    const orgheading = document.querySelector(".orgheading")
    const levelheading = document.querySelector(".levelheading")
    const categoryheading = document.querySelector(".categoryheading")
    const contactheading = document.querySelector(".contactheading")
    const locationheading = document.querySelector(".locationheading")
    const memberinfo = document.createElement("ul");
    const informations = obj.directory;

    // GIVES UNIQUE CLASS
    for (let i = 0; i < informations.length; i++) {
        const information = informations[i];
        const createlist = document.createElement("li");
        
        // ADDING BUSINESS NAME, IMG, AND URL TO ORGANIZATION 
        const businessclass = "Businessname";
        const uniqueClass = `${businessclass}${i}`;
        createlist.classList.add(uniqueClass);

        const businessnames = information.organization;
        

        for (const businessname of businessnames) {
            const ainfo = document.createElement("a");
            ainfo.textContent = businessname.title;
            ainfo.href = businessname.url;

        
            const businessimg = document.createElement("img");
            businessimg.src = businessname.logo;
            businessimg.textContent = businessname.logo;
        
            // SEND TO PAGE AND SORT TO CORRECT SECTION
            orgheading.appendChild(createlist);
            orgheading.appendChild(businessimg);
            createlist.appendChild(ainfo);
            dirpage.appendChild(memberinfo);
        }
    }

        // ADDING MEMBERSHIP LEVEL 
    for (let i=0 ; i < informations.length; i++) {
        const testinformation = informations[i];
        const testing = testinformation.membership;
        const creatememlevel = document.createElement("li");

        const membership = "Member";
        const testmembership = `${membership}${i}`;
        creatememlevel.classList.add(testmembership);

        creatememlevel.textContent = testing;
        levelheading.appendChild(creatememlevel);
    }
        // ADDING CATEGORY
    for (let i = 0; i < informations.length; i++) {
        const information = informations[i];
        const createlist = document.createElement("li");
        
        // ADDING BUSINESS NAME, IMG, AND URL TO ORGANIZATION 
        const categoryclass = "category";
        const uniquecategory = `${categoryclass}${i}`;
        createlist.classList.add(uniquecategory);

        const categorynames = information.category;
        

        for (const categoryname of categorynames) {
            const ainfo = document.createElement("a");
            ainfo.textContent = categoryname.industry;
            
            // SEND TO PAGE AND SORT TO CORRECT SECTION
            categoryheading.appendChild(createlist);
            createlist.appendChild(ainfo);
            dirpage.appendChild(memberinfo);
        }
    }
       // ADDING CONTACT
    for (let i = 0; i < informations.length; i++) {
    const information = informations[i];
    const createlist = document.createElement("li");
    
    const contactclass = "contact";
    const uniquecontact = `${contactclass}${i}`;
    createlist.classList.add(uniquecontact);

    const contactnames = information.contact;
        

        for (const contactname of contactnames) {
            const ainfo = document.createElement("a");
            ainfo.textContent = contactname.phonenumber;
            
            // SEND TO PAGE AND SORT TO CORRECT SECTION
            contactheading.appendChild(createlist);
            createlist.appendChild(ainfo);
            dirpage.appendChild(memberinfo);
        }
       }

       // ADDING LOCATION
    for (let i = 0; i < informations.length; i++) {
    const information = informations[i];
    const createlist = document.createElement("li");
    
    const locationclass = "Location";
    const uniquelocation = `${locationclass}${i}`;
    createlist.classList.add(uniquelocation);

    const locationnames = information.location;
    

        for (const locationname of locationnames) {
            const ainfo = document.createElement("a");
            ainfo.textContent = locationname.address;
            
            // SEND TO PAGE AND SORT TO CORRECT SECTION
            locationheading.appendChild(createlist);
            createlist.appendChild(ainfo);
            dirpage.appendChild(memberinfo);
        }
       }
}

getmemberinfo();