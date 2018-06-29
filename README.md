## Table of Contents

- [Asyncronous functions](#async)
- [await operator](#await)
- [Combining async and await](#combining)
- [Parallel execution without await](#parallel)
- [Position of the async keyword](#position)

## Async

**Asyncronous functions**
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

**await operator:**
```js
function codes() {
  // paste real code
}
```

## Combining

Combining async and await

```js
function codes() {
  // paste real code
}
```

## Parallel

Parallel execution without await

```js
function codes() {
  // paste real code
}
```

## Position

Position of the async keyword

```js
function codes() {
  // paste real code
}
```
