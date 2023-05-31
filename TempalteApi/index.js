const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors  = require("cors");



const templateData = require("./templates.json");
const extendedTemplateData = require("./extendedTemplate.json");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("i am live")
});

app.get("/templateData",(req,res)=>{
    res.send(templateData)
});
app.get("/extendedTemplateData",(req,res)=>{
    res.send(extendedTemplateData)
});

app.listen(port,()=>{
    console.log("i am port live");
});
