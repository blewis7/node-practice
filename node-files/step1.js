const fs = require('fs');
const process = require('process');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            console.log(`Error: ${path}`);
            process.exit(1);
        }
        else {
            console.log(data);
        }
    });
}

module.exports = {
    cat: cat
};

// Needed to comment below out to make sure step2.js ran smoothly

// cat(process.argv[2]);