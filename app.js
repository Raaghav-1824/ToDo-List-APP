const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var tasks=[];
var title="Working Title";

app.get("/",(req,res)=>{
    const today=date.getDate();

    if(title===""){
        title="Working Title";
    }
    res.render("list",{worktitle:title,Day:today,newItem:tasks})
   

})

app.get("/work",(req,res)=>{
    res.render("heading",{worktitle:title})
})

app.post("/work",(req,res)=>{
    title=req.body.newWork;
    // console.log(title);
    res.redirect("/");

})

app.post("/",(req,res)=>{
    var task=req.body.newItem
    tasks.push(task)
    res.redirect("/");
})


app.listen(3000,(req,res)=>{
    console.log("Port 3000 Stared")
    // console.log(n)
})



