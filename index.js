const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const routes = require('./routes');
const path = require('path');

app.use(bodyParse.json());
routes(app);
// app.get("/pub", (req,res)=>{
//     res.sendFile(path.resolve(__dirname, './public/style.css'));
// })
app.use("/pub", express.static("public"));

app.listen(7000);