## Table of Contents

- [Asyncronous functions](#async)
- [await operator](#await)
- [Run commands](#run)

## Async

**Asyncronous functions:**
Asynchronous functions are functions that return a promise. We denote them by using the async keyword.

```javascript

const loadData = async function( value ) {
    if ( value > 0 ) {
        return { data: value };
    } else {
        throw new Error( 'Value must be greater than 0' );
    }
}
 
loadData( 1 ).then( response => console.log( response ) );
 
loadData( 0 ).catch( error => console.log( error ) );
```

## Await
Await is a prefix operator standing in front of a promise.

As long as the promise behind the await operator is in a pending state, await blocks execution.

As soon as the promise is resolved, await returns the fulfillment value of the promise.

As soon as the promise is rejected, await throws the value of rejection.

The await operator can only be used in asynchronous functions. If the async keyword is removed from the previous example, an error is thrown:
Uncaught SyntaxError: Unexpected identifier

**await operator:**
```js
const delayedPromise = async () => {
  let promise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("Promise completed..."), 3000);
  });

  const promiseValue = await promise
  console.log(`Promise value: ${promiseValue}`);
};
```

## Run

```
node src/main.js
```
