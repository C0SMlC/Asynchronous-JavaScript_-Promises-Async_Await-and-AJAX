"use strict";


const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryBtn = document.querySelector(".inp");
const Btn = document.querySelector(".btn");
const alertbox = document.querySelector(".alert");
const overlay = document.querySelector(".overlay");
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

function ToJSON(url) {
  return fetch(url).then((response) => {
    console.log(response);
    if (!response.ok) throw new Error("Country Not Found");
    return response.json();
  });
}

function loadCountryInfo(country) {
  ToJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (data) {
      renderCountry(data[0]);
      return data[0].borders;
    })
    .then(function (neighbors) {
      neighbors?.forEach((neighbor) => {
        ToJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`).then(
          (data) => renderCountry(data[0], "neighbour")
        );
      });
    })
    .catch((err) => {
      alertbox.textContent = err;
      alertbox.classList.remove("hidden");
      overlay.classList.remove("hidden");
    }); // will throw error
}

btn.addEventListener("click", function () {
  loadCountryInfo("india");
});
