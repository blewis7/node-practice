const fs = require('fs');
const process = require('process');
const axios = require('axios');

const { cat } = require("./step1");

async function webcat(url){
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch (err) {
        console.log("URL Error");
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http'){
    webcat(path);
} else {
    cat(path);
}

module.exports = {
    webcat: webcat
};