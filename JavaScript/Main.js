window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var listaCanciones = document.querySelector("#listaCanciones");
      var contenidoCanciones = "";
      for (let i = 0; i < resultado.tracks.data.length; i++) {
        console.log(resultado.tracks.data[i].title);
        contenidoCanciones +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoCanciones +=
          '<a href="Cancion.html" class="text-light" >' +
          resultado.tracks.data[i].title +
          "</a>";
        contenidoCanciones +=
          '<span class="badge badge-warning badge-pill" >' +
          resultado.tracks.data[i].position +
          "</span>";
        contenidoCanciones += "</td> </tr>";
      }
      listaCanciones.innerHTML = contenidoCanciones;
      // aca son los albumes
      var listaAlbumes = document.querySelector("#listaAlbumes");
      var contenidoAlbumes = "";
      for (let i = 0; i < resultado.albums.data.length; i++) {
        contenidoAlbumes +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoAlbumes +=
          '<a href="Album.html" class="text-light" >' +
          resultado.albums.data[i].title +
          "</a>";
        contenidoAlbumes +=
          '<span class="badge badge-danger badge-pill" >' +
          resultado.albums.data[i].position +
          "</span>";
        contenidoAlbumes += "</td> </tr>";
      }
      listaAlbumes.innerHTML = contenidoAlbumes;
      // aca va el de artista
      var listaArtista = document.querySelector("#listaArtista");
      var contenidoArtista = "";
      for (let i = 0; i < resultado.artists.data.length; i++) {
        contenidoArtista +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoArtista +=
          '<a href="Artista.html" class="text-light" >' +
          resultado.artists.data[i].name +
          "</a>";
        contenidoArtista +=
          '<span class="badge badge-primary badge-pill" >' +
          resultado.artists.data[i].position +
          "</span>";
        contenidoArtista += "</td> </tr>";
      }
      listaArtista.innerHTML = contenidoArtista;
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
  // NO BORRAR
};