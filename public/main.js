const url = "/api";

let inputName = document.querySelector("#inputName");
let inputScore = document.querySelector("#inputScore");
let playerButton = document.querySelector("#playerButton");
let scoreButton = document.querySelector("#scoreButton");
let scoreSection = document.querySelector("#scoreboard");
let leaderboard = document.querySelector("#order");
let clearButton = document.querySelector("#clear");


playerButton.addEventListener('click', handleSubmit);
scoreButton.addEventListener('click', handleClick);
leaderboard.addEventListener('click', handleButton);
clearButton.addEventListener('click', handleClear);

function handleClick(event) {
  event.preventDefault();
  getScore();
}

async function getScore() {
  const response = await fetch(`http://localhost:5000/api/scoreboard`);
  console.log(response);
  const { payload } = await response.json();
  // scoreSection.innerHTML = '';
  console.log(payload);
  payload.forEach(renderScore);
}

function handleButton(event) {
  event.preventDefault();
  orderBy();
}

async function orderBy() {
  const response = await fetch(`http://localhost:5000/api/scoreboard`);
  console.log(response);
  const { payload } = await response.json();
  // scoreSection.innerHTML = '';
  console.log(payload);
  payload.sort(function(a,b) {
    return b.score - a.score;
  });
  payload.forEach(renderScore);
}

function handleClear(event) {
  event.preventDefault();
  clearIt();
}

function clearIt() {
  location.reload();
}

function renderScore(score) {
  const article = createScoreArticle(score);
  scoreSection.appendChild(article);
}

function createScoreArticle({ name, score }) {
  const article = document.createElement('article');
  const h2ScoreName = document.createElement('h2');
  h2ScoreName.innerText = `Name: ${name}`;
  const h3Score = document.createElement('h3');
  h3Score.innerText = `Score: ${score}`;
  article.appendChild(h2ScoreName);
  article.appendChild(h3Score);
  return article;
}



// ADD PLAYER

function handleSubmit(event) {
  event.preventDefault();
  addPlayer();
}

async function addPlayer() {
  console.log(gatherFormData());
  const response = await fetch(`http://localhost:5000/api/scoreboard`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const name = inputName.value;
  const score = inputScore.value;
  return {
    name,
    score,
  };
}

