const url = '/api';

const playerButton = document.querySelector("#playerButton");
const scoreButton = document.querySelector("#scoreButton");
const inputBox = document.querySelector("#inputBox");
const scoreSection = document.querySelector("#scoreSection");


playerButton.addEventListener('click', handleSubmit);
scoreButton.addEventListener('click', handleClick);


function handleClick(event) {
  event.preventDefault();
  getScores();
}

async function getScores() {
  const response = await fetch(`${url}/scoreboard`);
  const { payload } = await response.json();
  scoreSection.innerHTML = '';
  console.log(payload);
  payload.forEach(renderScore);
}

function renderScore(score) {
  const article = createScoreArticle(score);
  scoreSection.appendChild(article);
}

function createScoreArticle({name}) {
  const article = document.createElement('article');
  const h2ScoreName = document.createElement('h2');
  h2Name.innerText = `Name ${name}`;
  const h3HumanName = document.createElement('h3');
  h3HumanName.innerText = `Human servant: ${humanName}`;
  const h3Hobby = document.createElement('h3');
  h3Hobby.innerText = `Favorite hobby: ${hobby}`;
  article.appendChild(h2CatName);
  article.appendChild(h3HumanName);
  article.appendChild(h3Hobby);
  return article;
}