const $ = document;
const btnELem = $.querySelector(".btn");
const inputElem = $.querySelector(".enter-city");
const wapperElem = $.querySelector(".wapper");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let newDate = new Date();
let activeDay = weekday[newDate.getDay()];
let clock = ` ${newDate.getHours()} : ${newDate.getMinutes()}`;
const getData = (data) => {
  wapperElem.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="city-info">
    <h5>${data.name} ${data.sys.country}</h5>
    <p class="date-parent">${activeDay} ${clock}</p>
  </div>
  <div class="weather">
    <h5>${Math.floor(273.15 - data.main.temp)}°C</h5>
    <p class="desc-weather">${data.weather[0].main}</p>
  </div>
  `
  );
};
btnELem.addEventListener("click", () => {
  let city = inputElem.value;
  city == ""
    ? inputElem.focus()
    : fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=d2d480b1e635c99e135468c5889dc597`
      )
        .then((res) => res.json())
        .then((data) => {
          wapperElem.innerHTML = "";
          getData(data);
        })
        .catch((err) => console.log(err));
});
