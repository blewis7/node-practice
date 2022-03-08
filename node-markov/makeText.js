const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { MarkovMachine } = require("./markov");


function generateText(text){
    let output = new MarkovMachine(text);
    console.log(output.makeText())
}

function makeText(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            console.log(`Error: ${path}`);
            process.exit(1);
        }
        else {
            generateText(data);
        }
    });
}

async function makeUrlText(url){
    let res;
    try {
        res = await axios.get(url);
    } catch (err) {
        console.log("URL Error");
        process.exit(1);
    }
    generateText(res.data);
}

let [method, path] = process.argv.slice(2);

if (method === 'file'){
    makeText(path);
}
else if (method === 'url'){
    makeUrlText(path);
}
else {
    console.log(`Method Error: ${method}`);
    process.exit(1);
}
