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

// function getJSON(url) {
//   return fetch(url).then((res) => res.json());
// }

async function getJSON(url) {
  const res = await fetch(url);
  return res.json();
}

//  `https://restcountries.com/v3.1/name/${country}`;

async function loadThreeCountries(country1, country2, country3) {
  try {
    // Note : Sequential
    // const [con1] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country1}`
    // );
    // renderCountry(con1);
    // const [con2] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country2}`
    // );
    // renderCountry(con2);
    // const [con3] = await getJSON(
    //   `https://restcountries.com/v3.1/name/${country3}`
    // );
    // renderCountry(con3);
    //
    // Note : Parallel
    //Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
    const data = await Promise.all([ //Known as combinator Function
      getJSON(`https://restcountries.com/v3.1/name/${country1}`),
      getJSON(`https://restcountries.com/v3.1/name/${country2}`),
      getJSON(`https://restcountries.com/v3.1/name/${country3}`),
    ]);

    const newdata = data.map((map) => map[0]);
    newdata.forEach((data) => renderCountry(data));
    console.log(newdata);
  } catch (err) {
    alert(err.message);
  }
}

loadThreeCountries("India", "usa", "brazil");
