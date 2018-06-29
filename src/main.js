const loadData = require("./async.js");
const awaitFunctions = require("./await.js");

// Async
loadData( 1 ).then( response => console.log( response ) );
// loadData( 0 ).catch( error => console.error( error ) );

// Await
awaitFunctions.delayedPromise();
