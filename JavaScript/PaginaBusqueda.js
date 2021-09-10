window.onload = function () {
  //Convierto la data de la URL a una variable
  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);
  let BusquedaId = queryStringObj.get("q");
  //Hago un fetch de las canciones 
  fetch(
    "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/track?q=" +
      BusquedaId
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      //Creo variable de la lista de canciones (Solo muestro 10)
      var ListaCanciones = document.querySelector("#BCanciones");
      var contenidoCanciones = "";
      for (let i = 0; i < 10; i++) {
        const element = resultado.data[i];
        //Agrego el HTML
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
  //Hago lo mismo con artista
  fetch(
    "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=" +
      BusquedaId
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
  //Lo mismo con albums
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" +
      BusquedaId
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
