import ListItem from "./controller/listItem";

let express = require('express'); 
let app = express(); 
let listItem=new ListItem;

app.listen(3000,function(){
    console.log("hello"+process.cwd());
});

app.get('/abc', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let log=JSON.stringify(req.query)
    console.log(log);
    res.send('Hello World!'+log);
});

app.get('/refresh', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let info=listItem.handlerefresh();
    console.log(info);
    res.send(info);
});

app.get('/add', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let name=req.query.name;
    let info=listItem.handleAdd(name);
    console.log(info);
    res.send(info);
});

app.get('/finish', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id=req.query.id;
    let info=listItem.handleFinished(id);
    console.log(info);
    res.send(info);
});

app.get('/delete', (req:any, res:any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id=req.query.id;
    let info=listItem.handleDelete(id);
    console.log(info);
    res.send(info);
});

