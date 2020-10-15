const { query } = require("../index.js");

const sqlStatement = `
  CREATE TABLE scoreboard (
    id SERIAL PRIMARY KEY,
    name TEXT,
    score INTEGER
  )`;


async function createScoreBoard() {
  let res = await query(sqlStatement);
  console.log(res);
}

createScoreBoard();