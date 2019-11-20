const isOnline = require('is-online');

(async () => {
  console.log('Has online connection: ', await isOnline());
  //=> true
})();
