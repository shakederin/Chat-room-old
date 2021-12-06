const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let clientIndex = 0;
const clients = [];
const allUsers = [];
const allMessage = [];

app.post("/chat", (req,res)=>{
    const {user, content} = req.body;
    const date = new Date().toTimeString().substr(0,8);
    const data = {user, content, date};
    for(let clientResponse of clients){
        clientResponse.write(`data: ${JSON.stringify(data)}\n\n`);
    }
    res.send("success");
})

app.get("/chat", (req, res)=>{
    console.log("get2");
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      });
    clients.push(res);
    clientIndex++;
})

app.listen(port, ()=>{
    console.log("listening to", port);
})

const Tosend = {"name":"gso"}