const buf=Buffer.from("Hello Node.js");
console.log("Buffer:",buf);
console.log("String:",buf.toString());
console.log("Length:",buf.length);
const buffer=Buffer.alloc(20);
buffer.write("Welcome");
console.log("Buffer data:",buffer);
console.log("Buffer String:",buffer.toString());