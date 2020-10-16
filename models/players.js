const { query } = require("../db");
async function getAllPlayers(){
    const result = await query (`SELECT * FROM scoreboard;`);
    return result.rows;
}
async function addPlayer(name, score){
    const result = await query (`INSERT INTO scoreboard ( name, score ) VALUES ($1, $2) RETURNING id;`, [name, score]) //check this is coming in the correct format
    return result.rows[0].id;  
}

async function deletePlayer(id){
  console.log(id)
  const result = await query (`DELETE FROM scoreboard WHERE id = ${id}`);
  console.log(`${id} Deleted`)
  //return result.row[0].name;
}

async function updatePlayer(id, score){
  const result = await query (`UPDATE scoreboard SET score = ${score} WHERE id = ${id}`)
  console.log(result);
  return result;  
}


  module.exports = {
    getAllPlayers,
    addPlayer,
    deletePlayer,
    updatePlayer
  };