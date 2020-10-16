
const url = "/api";

let inputName = document.querySelector("#inputName");
let inputScore = document.querySelector(".inputScore");
let inputId = document.querySelector("#inputId");
let playerButton = document.querySelector("#playerButton");
let scoreButton = document.querySelector("#scoreButton");
let scoreSection = document.querySelector("#scoreboard");
let leaderboard = document.querySelector("#order");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");
let updateButton = document.querySelector("#update");
let winner = document.querySelector("#winner");
let updateScore = document.querySelector(".updateScore");



playerButton.addEventListener('click', handleSubmit);
// scoreButton.addEventListener('click', handleClick);
leaderboard.addEventListener('click', handleButton);
clearButton.addEventListener('click', handleClear);
deleteButton.addEventListener('click', handleDelete);
updateButton.addEventListener('click', handleUpdate);


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
  winner.innerText = `Winner: ${payload[0].name} ⭐ ⭐ ⭐`;

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
    const tr = document.createElement('tr');
    const h2ScoreName = document.createElement('td');
    h2ScoreName.innerText = `${name}`;
    tr.appendChild(h2ScoreName)
    const h3Score = document.createElement('td');
    

    if (score > 50 ){
      h3Score.innerText = `Score: ${score} ⭐ ⭐`;
    }
    else if (score < 0){
      h3Score.innerText = `Score: ${score}  ❌`;
    } 
    else h3Score.innerText = `Score: ${score} ⭐`;

    tr.appendChild(h3Score);

    return tr;
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

//delete player

function handleDelete(event) {
  event.preventDefault();
  deletePlayer();
}

async function deletePlayer() {
  console.log(gatherDeleteData());
  const response = await fetch(`http://localhost:5000/api/scoreboard`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gatherDeleteData()),
  });
//  const deleted = await response.json();
//  console.log(deleted);
};

function gatherDeleteData() {
  const id = inputId.value;
  return {
    id
  };
}

function handleUpdate(event) {
  event.preventDefault();
  updatePlayer();
}

async function updatePlayer() {
  const response = await fetch(`http://localhost:5000/api/scoreboard`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gatherUpdateData()),
  });
  // const data = await response.json();
}

function gatherUpdateData() {
  const id = inputId.value;
  const score = updateScore.value;
  return {
    id,
    score
  };
}







// function handleClick(event) {
//   event.preventDefault();
//   getScore();
// }

// async function getScore() {
//   const response = await fetch(`http://localhost:5000/api/scoreboard`);
//   console.log(response);
//   const { payload } = await response.json();
//   // scoreSection.innerHTML = '';
//   console.log(payload);
//   payload.forEach(renderScore);
  
// }