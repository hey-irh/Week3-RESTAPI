const { query } = require("../index");


const initialUpload = [
  {
    name: "bob moses",
    score: 20
  }
  {
    name: "Ruth Mudley",
    score: 12
  }
]

let sqlStatement = `
INSERT INTO scoreboard (name, score)
VALUES ($1, $2, $3)`