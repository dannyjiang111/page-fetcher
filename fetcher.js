const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2, 3).join();
const path = process.argv.slice(3).join();

console.log(url);

request(url, (error, response, body) => {
  console.log('error:', error);
  if ('statusCode' !== 200) 
    console.log('statusCode:', response && response.statusCode);
  if (path === undefined)
     console.log("local file not found") 
  fs.appendFile(path, ('body:', body), (err) => {
    if (err) throw err;
  });
  
});