// const newPromise = function () {
//   return new Promise(function (resolve, reject) {
//     if (Math.random() > 0.5) {
//       return resolve("Success");
//     } else reject("Failure");
//   });
// };

// newPromise()
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err));

// Promisifying setTimeout function

const wait = function (secs) {
  return new Promise(function (resolve) {
    console.log("waiting");
    setTimeout(() => {
      console.log("2 Seconds Passed");
    }, secs * 1000);
    return secs;
  });
};

wait(2).then((sec) => console.log(sec));
