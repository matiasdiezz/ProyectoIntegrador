window.onload = function () {
  var queryString = document.location.search.substring(0);
  var queryStringObj = new URLSearchParams(queryString);
  let holacomoestas = queryStringObj.get("id");
  //Cuerpo
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" +
      holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var fotoAlbum = document.querySelector("#Foto");
      fotoAlbum.innerHTML =
        '<img src="' +
        resultado.cover_big +
        '" class="img-thumbnail float-right" style="height: 200px;"/>';
      var cuerpoAlbum = document.querySelector("#Descripcion");
      var cosasAlbum = '<h1 class="m-3">' + resultado.title + "</h1>";
      cosasAlbum += '<h3 class="m-3">' + resultado.artist.name + "</h3 >";
      cosasAlbum += '<h5 class="m-3">' + resultado.release_date + "</h5>";
      cuerpoAlbum.innerHTML = cosasAlbum;
      var chartiano = document.querySelector("#chart");
      var chartt = "";
      for (let i = 0; i < resultado.tracks.data.length; i++) {
        const element = resultado.tracks.data[i];
        chartt +=
          '<td class="d-flex justify-content-between align-items-center">';
        chartt +=
          '<a href="Cancion.html?id=' +
          element.id +
          '" class="text-light" >' +
          element.title +
          "</a>";
        chartt +=
          '<span class="badge badge-danger badge-pill">' +
          element.duration +
          " segundos</span>" +
          " </td>";
        console.log(chartiano);
        chartiano.innerHTML = chartt;
      }
    });
  //chart
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
    });
};


















