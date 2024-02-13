// run `node index.js` in the terminal
var cryptojs = require('crypto-js');

var decrypt = function (data, gwstoken) {
  var key = cryptojs.MD5(gwstoken).toString();
  var dec = cryptojs.AES.decrypt(data, key);
  var encs = dec.toString(cryptojs.enc.Utf8);
  console.log(encs);
};

var encPass='U2FsdGVkX18sf7Nr1Pd1j1aSZeJEavKq/BuwEhWgq0k=';
var gwstoken='ff8726de-e64c-48a0-80b8-c8fb397ce37a';
decrypt(encPass,gwstoken);

