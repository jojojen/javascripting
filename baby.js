var argv = process.argv;
var sum = 0;
var limit = argv.length;
for (var i=2; i<limit; i++) {
  var n = argv[i];
  n = Number(n);
  sum += n;
}
console.log(sum);
