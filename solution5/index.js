const fs = require("fs");
fs.unlink("nodejs_architecture.txt", function(err){
    if(err){
    console.log('err');
}
    else{
        console.log('success')
    }
});