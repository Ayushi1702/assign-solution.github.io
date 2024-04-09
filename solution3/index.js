const fs =  require('fs');

const data = fs.readFileSync("nodejs_architecture.txt");
console.log(data.toString());