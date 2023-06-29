const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/public" ));

app.use('/home', (req,res) => {
fs.readFile('./home.html',(err,data)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    return res.end();
})
});

app.use('/about', (req,res) => {
    fs.readFile('./pages/about.html',(err,data)=>{
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
    });

    app.use('/contact', (req,res) => {
        fs.readFile('./pages/contact.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
        });
app.use('/error', (req,res) => {
        fs.readFile('./pages/error.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end("401 Error");
            })
            });
    

app.listen (PORT, () => {
    console.log(`server listening on PORT: ${PORT}`);
});