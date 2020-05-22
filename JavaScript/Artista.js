window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);

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
