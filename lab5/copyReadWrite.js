import fs from 'fs'
const reader=fs.createReadStream("large.txt")
const writer=fs.createWriteStream("copy.txt")
reader.pipe(writer);
console.log("Completed Successfully");