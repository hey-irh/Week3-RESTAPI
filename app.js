const path = require("path");
const express = require("express");
const app = express();
const cors = require('cors'); 
const port = 5000; 

app.use(express.static("public"));  
app.use(express.json()); 
app.use(cors());

const {
  getAllPlayers,
  addPlayer,
  deletePlayer,
  updatePlayer
} = require('./models/players');

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }
);
app.get("/api/scoreboard", async function (req,res){
    const players = await getAllPlayers();
    res.json({success: true, payload: players});
    console.log(players);
});
app.post("/api/scoreboard", async function (req,res){
    const { name } = req.body;
    const { score } = req.body;
    const id = await addPlayer(name, score);
    res.json({success: true, message: `player has been created with ${id}`})
    console.log("WORKING")
});

app.delete("/api/scoreboard", async function (req, res){ 
  const { id } = req.body;
  const result = await deletePlayer(id);
  res.json(result);
})

app.put("/api/scoreboard", async function (req, res){
  const { id } = req.body;
  const { score } = req.body;
  const result = await updatePlayer(id, score);
  res.json(result);
  console.log(id);
  console.log(score);
  // console.log(result);
})