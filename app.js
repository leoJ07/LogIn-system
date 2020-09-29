const express = require("express");
const fs = require("fs");
const app = express();

var users = []

app.get("/users", (req, res) => {
    res.json(users)
});

app.listen(process.env.PORT || 3000, () => {
    console.log("server is runing");
});