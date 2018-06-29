const loadData = async function( value ) {
  if ( value > 0 ) {
      return { data: value };
  } else {
      throw new Error( 'Value must be greater than 0' );
  }
}

module.exports = loadData;
