const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=1885cd7be793675a1f8392cf2e35b75e";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); 
            capitalize(data);
        } 
        else {
            throw Error(await response.text());
        }
    }
        catch (error) {
            console.log(error);
        }
    }


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Non Capitalized Method to add Weather "Desc" 
    captionDesc.textContent = data.weather[0].description;
}
    
    // Capitalize Each Word in "Desc"
function capitalize(data) {
    const weatherdescription = data.weather[0].description;
    const firstletter = weatherdescription.charAt(0);
    


    console.log(weatherdescription);
    console.log(firstletter);

}

apiFetch();