var listaFilmes = [
    {
    nome: "Kipo and the Age of Wonderbeasts",
    poster: "https://m.media-amazon.com/images/M/MV5BZDczZDIxZjEtNDJiZS00NmQwLWJjMGEtN2UwNDY0ODdjODNiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=25UHUbpFTtY&t=3s",
    },
    {
    nome: "Hilda",
    poster: "https://pics.filmaffinity.com/hilda_tv_series-959973894-large.jpg",
    trailer: "https://www.youtube.com/watch?v=f-RvZAu1_7c",
    }
];

listarFilmesNaTela();

function adicionarFilme() {
  var filmeFavorito = 
    {
    nome: document.getElementById("nomeFilme").value,
    poster: document.getElementById("poster").value,
    trailer: document.getElementById("trailer").value,
    };

  if (filmeFavorito.poster.endsWith(".jpg")) {
    listaFilmes.push(filmeFavorito);
    listarFilmesNaTela();
  } else {
    console.error("Endereço de imagem inválido!");
  }

  document.getElementById("nomeFilme").value = "";
  document.getElementById("poster").value = "";
  document.getElementById("trailer").value = "";

}

function listarFilmesNaTela() {
  var filme = document.getElementById("listaFilmes");
  var item = "";

  listaFilmes.forEach(function (filme) {
    item += `<p><a href="${filme.trailer}"><img src="${filme.poster}"></a>${filme.nome} </p>`;
  });

  filme.innerHTML = item;
}
