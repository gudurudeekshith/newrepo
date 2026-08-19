import fs from 'fs'
const readableStream=fs.createReadStream('input.txt');
const writableStream=fs.createWriteStream('output.txt');
readableStream.on("data",(chunk)=>{
    console.log("Reading chunk:",chunk);
    writableStream.write(chunk);
});
readableStream.on("end",()=>{
    console.log("Reading Completed.");
    writableStream.end();
});
readableStream.on('error',(err)=>{
    console.log("Read Error:",err.message);
});
writableStream.on('error',(err)=>{
    console.log("Write error:",err.message);
});
writableStream.on('finish',()=>{
    console.log("Data Successfully written to output.txt");
});