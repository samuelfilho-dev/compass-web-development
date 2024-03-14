import fs from "fs";

// White File
fs.writeFile("nodejs/message.txt", "Hello from Node JS", (err) => {
  if (err) throw err;
  console.log("The file was save");
});

// Read File
fs.readFile("nodejs/message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
