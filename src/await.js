const delayedPromise = async () => {
  let promise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Promise completed..."), 3000);
  });

  const promiseValue = await promise
  console.log(`Promise value: ${promiseValue}`);
};

module.exports = { delayedPromise };
