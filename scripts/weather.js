const currenttemp = document.querySelector('.currenttemp');
const weathericon = document.querySelector('.weathericon');
const weatherdesc = document.querySelector('.weatherdesc');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=45.53&lon=-122.70&units=imperial&appid=75e5d21741e0a238a4a07368091e1c8e";

async function apifetch() {
    try {
        const response = await fetch(url);
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


function displayresults(data) {
    currenttemp.innerHTML = `${data.main.temp}&deg;F`;
    weathericon.src =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherdesc.textContent = data.weather[0].description;
}
    
apifetch();