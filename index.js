const express = require("express");
var bodyParser = require('body-parser');
var request = require('request');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get("/", (req, res)=>{
    res.status(200);
    res.send("Hello World");
})

app.post("/resumetoBase64", (req, res)=>{
   const resumeFile = req.body.message;
   console.log(resumeFile);
    request.get(resumeFile, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
            res.send(data);
        }
    });
})
app.listen(port, ()=>{
    console.log("Server is listening on PORT: "+port);
})