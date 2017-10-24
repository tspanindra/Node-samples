var fs = require("fs");
process.stdout.write("hello");

fs.mkdir("temp", function() {
  console.log("created");
  fs.exists("temp", function(exists) {
    if (exists) {
      process.chdir("temp");
      fs.writeFile("test.txt", "This is some sample text");
      fs.rename("test.txt", "new.txt");
    }
  });
});

var buffer = new Buffer("hello");
console.log(buffer.toString());
console.log(buffer.toString("base64"));
console.log(buffer.toString("utf8", 0, 2));
