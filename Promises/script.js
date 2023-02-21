"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryBtn = document.querySelector(".inp");
const Btn = document.querySelector(".btn");
let countryname;

function renderCountry(data, className = " ") {
  console.log("country", data);
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

function loadCountryInfo(country) {
  let neighbors;
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resolution) => resolution.json())
    .then(function (data) {
      console.log("neighbr", data[0].borders);
      renderCountry(data[0]);
      return data[0].borders;
    })
    .then(function (neighbors) {
      neighbors?.forEach((neighbor) => {
        fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
          .then((response) => response.json())
          .then((data) => renderCountry(data[0]));
      });
    })
    .catch(err);
  {
    alert(err.message);
  }
}

loadCountryInfo("Sofia");
