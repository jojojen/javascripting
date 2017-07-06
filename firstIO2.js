var fs = require('fs');
var argv = process.argv;
var path = argv[2];
fs.readFile(path, (err, data) => {
  if (err) throw err;
  str = data.toString();
  arr = str.split('\n');
  cnt = arr.length;
  console.log(cnt-1);
});
