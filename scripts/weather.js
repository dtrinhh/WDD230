const currenttemp = document.querySelector('.currenttemp');
const weathericon = document.querySelector('.weathericon');
const weatherdesc = document.querySelector('.weatherdesc');
const currentday = document.querySelector('.currentday');
const currentlowtemp = document.querySelector('.currentlowtemp');
const currenthightemp = document.querySelector('.currenthightemp');

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.53&lon=-122.70&units=imperial&appid=75e5d21741e0a238a4a07368091e1c8e";

// async function apifetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             displayresults(data); 
//         } 
//         else {
//             throw Error(await response.text());
//         }
//     }
//         catch (error) {
//             console.log(error);
//         }
//     }


// function displayresults(data) {
//     currenttemp.innerHTML = `${data.main.temp}&deg;F`;
//     weathericon.src =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     weatherdesc.textContent = data.weather[0].description;


// }
    
// apifetch();


// 3 day Forecast
const daytwoweathericon = document.querySelector(".daytwoweathericon");
const daytwoweatherdesc = document.querySelector(".daytwoweatherdesc");
// const daytwocurrenttemp = document.querySelector(".daytwocurrenttemp");
const daytwolowtemp = document.querySelector('.daytwolowtemp');
const daytwohightemp = document.querySelector('.daytwohightemp');

const daythreeweathericon = document.querySelector(".daythreeweathericon");
const daythreeweatherdesc = document.querySelector(".daythreeweatherdesc");
// const daythreecurrenttemp = document.querySelector(".daythreecurrenttemp");
const daythreelowtemp = document.querySelector('.daythreelowtemp');
const daythreehightemp = document.querySelector('.daythreehightemp');


const threedayforecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=45.53&lon=-122.70&units=imperial&appid=26f7edf123f4c00ecdcd83bd0de1aa1d";

async function apifetch() {
    try {
        const response = await fetch(threedayforecasturl);
        // const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayresults(data); 
        } 
        else {
            throw Error(await response.text());
        }
    }
        catch (error) {
            console.log(error);
        }
    }


// function displayresults(data) {
//     currenttemp.innerHTML = `${data.main.temp}&deg;F`;
//     weathericon.src =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     weatherdesc.textContent = data.weather[0].description;


// }

function displayresults(data) {
    // !!CURRENT DAY TEMP DATA!!
    // currentday.textContent = data.list[0].dt_txt;
    weathericon.src =`https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    weatherdesc.textContent = data.list[0].weather[0].description;
    currentlowtemp.innerHTML = `L:${data.list[0].main.temp_min}&deg;F`;
    currenthightemp.innerHTML = `H:${data.list[0].main.temp_max}&deg;F`;

    // !!SECOND DAY TEMP DATA!!
    // currentday.textContent = data.list[0].dt_txt;
    daytwoweathericon.src =`https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    daytwoweatherdesc.textContent = data.list[8].weather[0].description;
    daytwolowtemp.innerHTML = `L:${data.list[8].main.temp_min}&deg;F`;
    daytwohightemp.innerHTML = `H:${data.list[8].main.temp_max}&deg;F`;

    // !!THIRD DAY TEMP DATA!!
    // currentday.textContent = data.list[0].dt_txt;
    daythreeweathericon.src =`https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    daythreeweatherdesc.textContent = data.list[16].weather[0].description;
    daythreelowtemp.innerHTML = `L:${data.list[16].main.temp_min}&deg;F`;
    daythreehightemp.innerHTML = `H:${data.list[16].main.temp_max}&deg;F`;

}
    
apifetch();