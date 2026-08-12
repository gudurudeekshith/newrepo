var studentStr='{"name":"Deekshith","age":20, \
    "courses":["Node.js","MongoDB"],\
    "rollno":279,"college":"KITSW"}'
var studentObj=JSON.parse(studentStr);
console.log(studentObj.name);
console.log(studentObj.courses);
console.log(studentObj.rollno);