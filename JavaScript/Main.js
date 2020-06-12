window.onload = function () {
  // charts 
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      //Canciones
      var listaCanciones = document.querySelector("#listaCanciones");
      var contenidoCanciones = "";
      for (let i = 0; i < resultado.tracks.data.length; i++) {
        var canciones1 = resultado.tracks.data[i];
        contenidoCanciones +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoCanciones +=
          '<a href="Cancion.html?id=' +
          canciones1.id +
          '" class="text-light" >' +
          canciones1.title +
          "</a>";
        contenidoCanciones +=
          '<span class="badge badge-warning badge-pill" >' +
          canciones1.position +
          "</span>";
        contenidoCanciones += "</td> </tr>";
      }
      listaCanciones.innerHTML = contenidoCanciones;
      // aca son los albumes
      var listaAlbumes = document.querySelector("#listaAlbumes");
      var contenidoAlbumes = "";
      for (let i = 0; i < resultado.albums.data.length; i++) {
        var albums1 = resultado.albums.data[i];
        contenidoAlbumes +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoAlbumes +=
          '<a href="Album.html?id=' +
          albums1.id +
          '" class="text-light" >' +
          albums1.title +
          "</a>";
        contenidoAlbumes +=
          '<span class="badge badge-danger badge-pill" >' +
          albums1.position +
          "</span>";
        contenidoAlbumes += "</td> </tr>";
      }
      listaAlbumes.innerHTML = contenidoAlbumes;
      // aca va el de artista
      var listaArtista = document.querySelector("#listaArtista");
      var contenidoArtista = "";
      for (let i = 0; i < resultado.artists.data.length; i++) {
        var artista1 = resultado.artists.data[i];
        contenidoArtista +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoArtista +=
          '<a href="Artista.html?id=' +
          artista1.id +
          '" class="text-light" >' +
          artista1.name +
          "</a>";
        contenidoArtista +=
          '<span class="badge badge-primary badge-pill" >' +
          artista1.position +
          "</span>";
        contenidoArtista += "</td> </tr>";
      }
      listaArtista.innerHTML = contenidoArtista;
      document.querySelector("#fotoAlbum").innerHTML =
        '<img src = "' +
        resultado.albums.data[1].cover_xl +
        '" class="d-block w-100" alt = "..."/>';
      document.querySelector("#fotoArtista").innerHTML =
        '<img src = "' +
        resultado.artists.data[1].picture_xl +
        '" class="d-block w-100" alt = "..."/>';
      document.querySelector("#fotoTracks").innerHTML =
        '<img src = "' +
        resultado.tracks.data[1].album.cover_xl +
        '" class="d-block w-100" alt = "..."/>';
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
