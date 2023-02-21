// "use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// const countryBtn = document.querySelector(".inp");
// const Btn = document.querySelector(".btn");
// let countryname;

// function renderCountry(data, className = " ") {
//   const html = `<article class="country ${className}">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name.common}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)} M People
//               </p>
//               <p class="country__row"><span>🗣️</span>${Object.values(
//                 data.languages
//               ).at(0)}</p>
//               <p class="country__row"><span>💰</span>${Object.keys(
//                 data.currencies
//               ).at(0)}</p>
//             </div>
//           </article>`;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   return "Done";
// }

// async function getJSON(url) {
//   const res = await fetch(url);
//   const rest = await res.json();
//   return rest[0];
// }

// //  `https://restcountries.com/v3.1/name/${country}`;

// function timer(sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error("Request Took Too Long!"));
//     }, sec * 1000);
//   });
// }
// Promise.race => returns first promise and including rejected
// // Promise.race 

// (async function () {
//   Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/spain`),
//     timer(3),
//   ])
//     .then((res) => renderCountry(res))
//     .catch((err) => alert(err));
// })();

// Promise.allSettled

// Promise.resolve("Success"),
  Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Success"),
  ]).then((res) => console.log(res));

// Promise.all

// Promise.resolve("Success"),
//   Promise.all([
//     Promise.resolve("Success"),
//     Promise.reject("Error"),
//     Promise.resolve("Success"),
//   ])
//     .then((res) => console.log(res))
//     .catch((er) => console.log(er));

// Promise.any => returns first resolved promise and ignores all rejected

// Promise.any([
//   Promise.reject("Success 1"),
//   Promise.reject("Error"),
//   Promise.resolve("Success 2"),
// ])
//   .then((res) => console.log(res))
//   .catch((er) => console.log(er));
