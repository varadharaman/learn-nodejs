var fs = require("fs");
var path = __dirname + "\\write-foo.txt";
var data = "sample file data";
fs.writeFile(path, data, function(error) {
	if (error) {
		console.error("write error : " + error.message);
	} else {
		console.log("Successfully wrote "+ path);
	}
});

console.log("Writing to file");