const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.status(200);
    res.send("Hello World");
})

app.post("/resumetoBase64", (req, res)=>{
    
    res.send(req.body);
})
app.listen(port, ()=>{
    console.log("Server is listening on PORT: "+port);
})