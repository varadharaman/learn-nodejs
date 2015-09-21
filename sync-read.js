var fs=require("fs");
var contents=fs.readFileSync("./foo.txt").toString();
console.log(contents);
console.log("Do something else.");
