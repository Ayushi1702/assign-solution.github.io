const fs = require("fs");
fs.appendFile('nodejs_architecture.txt', '____this is for appendile file' , 'utf8', function(err){
    if(err){
        console.log("unsucceful in apending")
    }
    else{
        console.log("successfullll")
    }
})