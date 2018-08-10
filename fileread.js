const fs = require('fs');
const path = require('path');

//let filepath = path.join(__dirname,'start.txt');
let filepath = path.join(__dirname,'numbers.txt');
exports.getWords = ()=>{

    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,'utf-8',function(err,data){
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                //return data;
                data = data.split('\n');
                console.log(data);
                const numbers = data.map(Number);
                console.log(numbers);
                const oddNum = numbers.filter(i => i%2===1);
                console.log(`odd num count : ${oddNum.length}`);
                resolve(numbers);
            }
        });
    })

    
};

this.getWords();

