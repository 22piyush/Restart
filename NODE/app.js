const fs = require("fs/promises"); 

async function deleteFile() {
  await fs.unlink("test.txt");
  console.log("File deleted");
}

deleteFile();