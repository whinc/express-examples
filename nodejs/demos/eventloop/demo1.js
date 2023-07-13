const {readFile} = require('fs');

readFile('./demo1.js', (err, data) => {
  if (err) throw err;
  console.log('readFile done');
});
setImmediate(() => console.log('setImmediate done'));
// setTimeout(() => console.log('after readFile'))
