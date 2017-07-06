var fs = require('fs');
var argv = process.argv;
var path = argv[2];
var extension = '.' + argv[3];
fs.readdir(path, (err, files) => {
  if (err) throw err;
  var res = files.filter(function(file){
    return file.indexOf(extension) !== -1;
  });
  for (var i=0; i<res.length; i++){
    console.log(res[i]);
  }
});
