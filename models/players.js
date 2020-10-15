const { query } = require("../db");


async function getAllPlayers(){
    const result = await query (`SELECT * FROM scoreboard;`);
    return result.rows;
}

async function addPlayer(name){
    const result = await query (`INSERT INTO scoreboard (name) VALUES ($1) RETURNING id;`, [name]) //check this is coming in the correct format
    return result.rows[0].id;  
}


  module.exports = {
    getAllPlayers,
    addPlayer
  };