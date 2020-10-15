const { query } = require("../index");


const initialUpload = [
  {
    name: "bob moses",
    score: 20
  },
  {
    name: "Ruth Mudley",
    score: 12
  }
]

let sqlStatement = `
INSERT INTO scoreboard (name, score)
VALUES ($1, $2)`

async function uploadScores(){
  console.log("UPLOADING SCORES...");
  initialUpload.forEach(async function({name, score}){
    await query (sqlStatement, [name, score])
    console.log (`${name} added to the database`)
  });
}

uploadScores();

