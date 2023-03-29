const jokeArea = document.querySelector('.joke-area');
const generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', fetchJoke);
fetchJoke();

function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const joke = data.joke;
      jokeArea.innerText = joke;
    });
}
