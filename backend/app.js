const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname+"public" ))
const PORT = 3000;

app.use('/home', (req,res) => {
fs.readFile('../frontend/home.html',(err,data)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    return res.end();
})
});

app.use('/about', (req,res) => {
    fs.readFile('../frontend/about.html',(err,data)=>{
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
    });

    app.use('/contact', (req,res) => {
        fs.readFile('../frontend/contact.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
        });
app.use('/error', (req,res) => {
        fs.readFile('../frontend/error.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end("401 Error");
            })
            });
    

app.listen (PORT, () => {
    console.log(`server listening on PORT: ${PORT}`);
});