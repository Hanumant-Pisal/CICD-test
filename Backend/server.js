const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.send("Api is working after docker contenerizations!!!");
});

app.listen(1000, ()=>{
    console.log("server running on port 1000");
    
})