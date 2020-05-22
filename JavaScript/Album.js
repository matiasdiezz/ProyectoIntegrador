window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);

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
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
  // NO BORRAR
};
