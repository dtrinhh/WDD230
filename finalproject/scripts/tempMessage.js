// DISPLAY BANNER
document.addEventListener("DOMContentLoaded", function () {
  weatherFetch(); 
});

const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.43&lon=-86.92&units=imperial&appid=26f7edf123f4c00ecdcd83bd0de1aa1d";

async function weatherFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const maxtemp = data.list[0].main.temp_max;
      const hightemp = document.querySelector(".highTemp");
      console.log(maxtemp);
      hightemp.append(maxtemp);
    } 
    else {
      throw Error(await response.text());
    }
  } 
  catch (error) {
    console.log(error);
  }
}

  function closebanner() {
    const banner = document.querySelector(".banner");
    banner.style.display = "none";
  }