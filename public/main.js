const url = "/api";

let inputName = document.querySelector("#inputName");
let inputScore = document.querySelector("#inputScore");
let playerButton = document.querySelector("#playerButton");
let scoreButton = document.querySelector("#scoreButton");
let scoreboard = document.querySelector("#scoreboard");

// playerButton.addEventListener('click', handleSubmit);
scoreButton.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  getScore();
}

async function getScore() {
  const response = await fetch(`${url}/scoreboard`);
  const { payload } = await response.json();
  scoreSection.innerHTML = '';
  console.log(payload);
  payload.forEach(renderScore);
}

function renderScore(score) {
  const article = createCatArticle(score);
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

getScore();
