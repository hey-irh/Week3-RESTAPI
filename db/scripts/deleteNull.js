const { query } = require("../index.js");

const sqlDelete = `
    DELETE FROM scoreboard 
    WHERE name = 'null'`;


async function deleteNull() {
  let res = await query(sqlDelete);
  console.log(res);
}

deleteNull();