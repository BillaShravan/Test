module.exports = (app) =>{
    
    const fileRead  = require('../fileread');
    const Q = require('q'); 
    const fs = require('fs');
    const path = require('path');

let filepath = path.join(__dirname,'../start.txt');

    app.get('/',(req,res)=>{
        res.json({"message":"success"});
    });

    app.get('/getWords',(req,res)=>{
        fs.readFile(filepath,'utf-8',function(err,data){
            if(err){
                res.json({"message":"failure"});
            }
            else{
                const resultPromise = fileRead.getWords();
                resultPromise.then(function(data){
                    res.json({"message":data});
                }).catch(err);
            }
        });
    });

}