const tweetar = document.querySelector('button');
const textarea = document.querySelector('textarea');
function pegarTweet(event) {
  event.preventDefault();
  const tweetTextArea = textarea.value;
  criarTweet(tweetTextArea);
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(textoArea) {
  console.log(textoArea);
}


