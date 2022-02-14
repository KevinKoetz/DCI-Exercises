import express from "express";

const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello fellow Traveller!");
})

app.get("/time", (req, res) => {
    const date = new Date()
    res.send(`Date: ${date.toDateString()}\nTime:  ${date.toTimeString()}`)
})

app.get("/random", (req, res) => {
    res.send(Math.floor((Math.random()*Number.MAX_SAFE_INTEGER)).toString());
})

app.get("/isNumber/:value", (req, res) => {
    const {value} = req.params;
    if(Number.isNaN(Number.parseFloat(value))){
        res.send("This is not a number!")
        return
    }
    res.send("This is a number!")
})

app.listen(3003)