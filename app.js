/*
var fs = require('fs');
var fileContent = fs.readFileSync('sync.js','utf8');
console.log('fileContent',fileContent);
console.log('somethingElse');
*/

/*

var fs = require('fs');
 setTimeout(function(){
     console.log('after 4 sec');
 },4000);

console.log("something else 111111111");
console.log("something else 22222222");


setTimeout(function () {
    console.log('after 2 second');
}, 2000);
*/

/*
var fs = require('fs');
fs.readFile('async.js','utf8',function(err,data){
    if(!err){
        console.log('>>>>>>>>',data)
    }
});
console.log('somehing Else');


*/

var promise = require('bluebird');

var fs = promise.promisifyAll(require('fs'));

fs.readFileAsync('async.js','utf8').then(function(data){
        console.log('data>>>>>>>>>' ,data)
    })

.catch(function(err){
        console.log('errrrrrrr',err);
    })






























