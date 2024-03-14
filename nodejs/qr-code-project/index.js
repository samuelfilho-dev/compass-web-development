import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const answers = inquirer.prompt([
  {
    name: "link",
    message: "Link of Website? ",
    type: "input",
  },
]);

answers.then((answers) => {
  const qr_png = qr.image(answers.link, { type: "png" });
  qr_png.pipe(fs.createWriteStream(`./qr_input.png`));

  fs.writeFile("link.txt", answers.link, (err) => {
    if (err) throw err;
    console.log("The link saved");
  });
});
