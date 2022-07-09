const tweetar = document.querySelector('button');
const textarea = document.querySelector('textarea');
function pegarTweet(event) {
  event.preventDefault();
  const tweetTextArea = textarea.value;
  criarTweet(tweetTextArea);
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  const tweet = {
    nome: "Daniel",
    foto: "./assets/img/ProfilePic.png",
    usuario: "@danielkenzie",
    texto: tweetTexto,
    tempo: `${hora}:${minuto} alo esse é o tempo`
  }
  listarTweet(tweet);
}

function listarTweet(tweet) {
  const feed = document.querySelector(".conteudoPrincipal__listTweets");
  const {nome, foto, usuario, texto, tempo} = tweet;
  let li = document.createElement("li");
  li.classList.add("conteudoPrincipal__tweet")
  let img = document.createElement("img");
  img.classList.add("tweet__fotoPerfil");
  img.src = foto;
  let div = document.createElement("div");
  div.classList.add("tweet__conteudo");
  let h2 = document.createElement("h2");
  h2.innerHTML = nome;
  let span = document.createElement("span");
  span.innerHTML = `${usuario} - ${tempo}`;  
  let p = document.createElement("p");
  p.innerHTML = texto;

  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(img);
  li.appendChild(div);

  feed.appendChild(li);
  textarea.value = "";
}

            // <li class="conteudoPrincipal__tweet">
            //   <img src="./assets/img/ProfilePic.png" alt="" class="tweet__fotoPerfil">
            //   <div class="tweet__conteudo">
            //     <h2>Daniel</h2>
            //     <span>@danielkenzie 14</span>
            //     <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI</p>
            //   </div>
            // </li>
