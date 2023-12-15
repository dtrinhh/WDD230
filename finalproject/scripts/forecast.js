document.addEventListener("DOMContentLoaded", function () {
  weatherFetch();
});
const currenttemp = document.querySelector(".currenttemp");
const weathericon = document.querySelector(".weathericon");
const weatherdesc = document.querySelector(".weatherdesc");
const currentday = document.querySelector(".currentday");
const currentlowtemp = document.querySelector(".currentlowtemp");
const currenthightemp = document.querySelector(".currenthightemp");

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.43&lon=-86.92&units=imperial&appid=26f7edf123f4c00ecdcd83bd0de1aa1d";

async function weatherFetch() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const currentday = document.querySelector(".currentday");
      const weatherDesc = document.querySelector(".weatherdesc");
      const secondHumidity = document.querySelector(".secondHumidity");
      const currentTemp = document.querySelector(".currentTemp");
      const secondDayTemp = document.querySelector(".dayTwoTemp");
      const todayWeather = data.list[0].weather[0].main;
      const todayHumid = data.list[0].main.humidity;
      const todayTemp = data.list[0].main.temp;
      const dayTwoTemp = data.list[2].main.temp;
      const maxtemp = data.list[0].main.temp_max;
      const hightemp = document.querySelector(".highTemp");
      console.log(maxtemp);
      hightemp.append(maxtemp);
      currentTemp.append(todayTemp);
      secondDayTemp.append(dayTwoTemp);
      currentday.append(todayWeather);
      weathericon.src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
      weatherDesc.append(data.list[0].weather[0].description);
      secondHumidity.append(todayHumid);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function closebanner() {
  const banner = document.querySelector(".banner");
  banner.style.display = "none";
}
