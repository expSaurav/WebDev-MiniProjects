const jokeEl = document.getElementById('jokes');
const jokeBtn = document.getElementById('nextBtn');
const category = document.getElementById('cat');




jokeBtn.addEventListener('click', getJokes)

async function getJokes(){
 let res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319');

 const data = await res.json();

 jokeEl.innerText = data.joke;
 category.innerText = data.category;
}

getJokes();