window.onload = function () {
  var queryString = document.location.search.substring(0);
  var queryStringObj = new URLSearchParams(queryString);

  var holacomoestas = queryStringObj.get("q");
  //caniones
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" +
      holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var ListaCanciones = document.querySelector("#BCanciones");
      var contenidoCanciones = "";
      for (let i = 0; i < 10; i++) {
        const element = resultado.data[i];
        contenidoCanciones +=
          '<div class="card col-lg-2 col-sm-5 bg-warning align-items-center m-3 border border-light">';
        contenidoCanciones +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          element.album.cover_big +
          '" alt="Card image"/>';
        contenidoCanciones +=
          '<div class="card-body">' +
          '<a href="Cancion.html?id=' +
          element.id +
          '" class="btn btn-dark col-12">' +
          element.title +
          "</a>";
        contenidoCanciones += "</div> </div>";
      }
      ListaCanciones.innerHTML = contenidoCanciones;
    });
  //Artista
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" +
      holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var ListaArtist = document.querySelector("#BArtistas");
      var contenidoArtist = "";
      for (let i = 0; i < 5; i++) {
        const element = resultado.data[i];
        contenidoArtist +=
          '<div class="card col-lg-2 col-sm-5 bg-primary align-items-center m-3 border border-light">';
        contenidoArtist +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          element.picture_big +
          '" alt="Card image"/>';
        contenidoArtist +=
          '<div class="card-body">' +
          '<a href="Artista.html?id=' +
          element.id +
          '" class="btn btn-dark col-12">' +
          element.name +
          "</a>";
        contenidoArtist += "</div> </div>";
      }
      ListaArtist.innerHTML = contenidoArtist;
    });
  //Albums
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" +
      holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var ListaAlbum = document.querySelector("#BAlbums");
      var contenidoAlbum = "";
      for (let i = 0; i < 5; i++) {
        const element = resultado.data[i];
        contenidoAlbum +=
          '<div class="card col-lg-2 col-sm-5 bg-danger align-items-center m-3 border border-light">';
        contenidoAlbum +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          element.cover_big +
          '" alt="Card image"/>';
        contenidoAlbum +=
          '<div class="card-body">' +
          '<a href="Album.html?id=' +
          element.id +
          '" class="btn btn-dark col-12">' +
          element.title +
          "</a>";
        contenidoAlbum += "</div> </div>";
      }
      ListaAlbum.innerHTML = contenidoAlbum;
    });
};
