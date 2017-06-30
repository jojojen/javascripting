var fs = require('fs');
var argv = process.argv;
var path = argv[2];
str = fs.readFileSync(path);
str = str.toString();
arr = str.split('\n');
cnt = arr.length;
console.log(cnt-1);
