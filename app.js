const path = require("path");
const express = require("express"); 
const app = express();
const port = 5000; 
app.use(express.static("public"));  
app.use(express.json()); 

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});



const {
    getAllPlayers,
    addPlayer
} = require('./models/players');
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
);
app.get("/scoreboard", async function (req,res){
    const players = await getAllPlayers();
    res.json({success: true, payload: players});
    console.log(players);
});
app.post("/scoreboard", async function (req,res){
    const { name } = req.body;
    const { score } = req.body;
    const id = await addPlayer(name, score);
    res.json({success: true, message: `player has been created with ${id}`})
    console.log("WORKING")
});