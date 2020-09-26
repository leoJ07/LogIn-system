const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
    fs.readFile("./site/index.html", (err, data) => {
        if(err){
            console.log(err);
            res.send();
        } else {
            res.send(data.toString());
        }
    });
});


app.get("/register", (req, res) => {
    fs.readFile("./site/reg.html", (err, data) => {
        if(err){
            console.log(err);
            res.send();
        } else {
            res.send(data.toString());
        }
    });
});

app.listen(3000, () => {
    console.log("server is runing");
});