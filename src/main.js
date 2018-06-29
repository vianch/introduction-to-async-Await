const loadData = require("./async.js");

// Async
loadData( 1 ).then( response => console.log( response ) );
// loadData( 0 ).catch( error => console.error( error ) );
