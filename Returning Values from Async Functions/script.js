"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryBtn = document.querySelector(".inp");
const Btn = document.querySelector(".btn");
let countryname;

function renderCountry(data, className = " ") {
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

const loadCountryInfo = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!response.ok) throw new Error("Error - Country Not Found 🚫");

    const res = await response.json();
    renderCountry(res[0]);
    // fetch(`https://restcountries.com/v3.1/alpha/${res[0].borders[0]}`);
    return "I Am Second";
  } catch (err) {
    alert(err.message);
    throw err;
  }
};

// console.log("I Am First");
// loadCountryInfo("India")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message))
//   .finally(() => console.log("I Am Third"));

// console.log(returnPromise);

(async function () {
  try {
    console.log("I Am First");
    const res = await loadCountryInfo("Indiana");
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
  console.log("I Am Third");
})();
