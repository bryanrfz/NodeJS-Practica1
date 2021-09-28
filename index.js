const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express();
const { readFile, readFileSync } = require('fs');

app.get('/',(req,res)=> {
    readFile('./home.html','utf8',(err,html)=> {
        if(err){
            res.status(500).send('sorrrrry')
        }
        res.send(html);
    })
});

app.listen(process.env.PORT || 3000, ()=> console.log(`Server running at http://${hostname}:${port}/`));

