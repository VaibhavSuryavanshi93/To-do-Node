const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");


const app = express();

var items = ["Study Time", "find Gf"];

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req,res)=>{
    let today = new Date(); 
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    }
    var currentday = today.toLocaleDateString("en-US", options);
    console.log(currentday);
    
    
    res.render("list",{kindofDay:currentday , newListItems: items});
    // res.write("hello \n");
    // res.send();

});
app.post("/",(req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    console.log(item);
    // res.render("list",{newData: list})
    res.redirect("/");

})


app.listen(3000, ()=>console.log("its running...."));