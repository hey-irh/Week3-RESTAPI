const { query } = require("../db");
async function getAllPlayers(){
    const result = await query (`SELECT * FROM scoreboard;`);
    return result.rows;
}
async function addPlayer(name, score){
    const result = await query (`INSERT INTO scoreboard ( name, score ) VALUES ($1, $2) RETURNING id;`, [name, score]) //check this is coming in the correct format
    return result.rows[0].id;  
}
  module.exports = {
    getAllPlayers,
    addPlayer
  };