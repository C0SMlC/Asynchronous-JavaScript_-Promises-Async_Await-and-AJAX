"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryBtn = document.querySelector(".inp");
const Btn = document.querySelector(".btn");

let countryname;

function loadCountries(country) {
  function renderCountry(data, className = " ") {
    console.log(data);
    const html = `<article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} M People
              </p>
              <p class="country__row"><span>🗣️</span>${Object.values(
                data.languages
              ).at(0)}</p>
              <p class="country__row"><span>💰</span>${Object.keys(
                data.currencies
              ).at(0)}</p>
            </div>
          </article>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
  }

  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    const neighbors = data.borders;
    console.log(neighbors);
    neighbors.forEach((con) => {
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${con}`);
      request2.send();
      request2.addEventListener("load", function () {
        const [data2] = JSON.parse(this.responseText);
        renderCountry(data2, "neighbour");
      });
    });
  });
}

Btn.addEventListener('click', function (e) {
  e.preventDefault();
  countryname = countryBtn.value;
  console.log(countryname);
  countryBtn.value=' ';
  loadCountries(countryname);
});
