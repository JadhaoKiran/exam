var express = require("express")
var app = express();

app.get("/",(req,resp)=>{
    resp.send("<h3>Welcome to My world</h3>"
    +"Hi....................");
});
app.get("/aboutus",(req,resp)=>{

    resp.send("<h2>This is XYZ</h2>");
});

app.listen(9000);
console.log("server start at port 9000");